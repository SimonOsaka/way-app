<template>
  <div>
    <navbar title="选择城市" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <wxc-searchbar ref="wxc-searchbar" placeholder="请输入您所在的位置（例如：xx市xx区xx街）" :always-show-cancel="alwaysShowCancel" :return-key-type="returnKeyType" @wxcSearchbarInputReturned="wxcSearchbarInputOnInput"></wxc-searchbar>
      <div v-if="currentAddress != ''">
        <category title="当前地址"></category>
        <wxc-cell :title="currentAddress" :has-arrow="false" :has-top-border="true">
        </wxc-cell>
      </div>
      <div v-if="searchList.length > 0">
        <category title="搜索地址"></category>
        <wxc-cell v-for="(result, i) in searchList" :key="i" :title="result.addressTitle" :desc="result.addressDesc" @wxcCellClicked="wxcIndexlistItemClicked(i)" :has-arrow="false" :has-top-border="true">
        </wxc-cell>
      </div>
    </scroller>
  </div>
</template>

<script>
import { WxcSearchbar, WxcCell, Utils } from "weex-ui";
import navbar from "../../include/navbar.vue";
import {
  postMessage,
  getStorageVal,
  setPageTitle,
  getEntryUrl,
  setStorageVal
} from "../../tools/utils.js";
import { http } from "../../tools/http.js";
import category from "../../components/category.vue";
const navigator = weex.requireModule("navigator");
const dictionary = weex.requireModule("dictionary");

export default {
  components: { WxcSearchbar, WxcCell, category, navbar },
  data: () => ({
    searchList: [],
    keywords: "",
    alwaysShowCancel: false,
    returnKeyType: "done",
    inputTimeout: null,
    currentAddress: "",
    city: {}
  }),
  beforeCreate() {
    setPageTitle("选择城市");
    dictionary.getDict("longitude", function(resp) {
      console.log("获取iOS native经度", resp);
    });
    dictionary.getDict("latitude", function(resp) {
      console.log("获取iOS native纬度", resp);
    });
  },
  methods: {
    wxcIndexlistItemClicked(i) {
      console.log(i);
      let rs = this.searchList[i];
      this.city = { name: rs.addressTitle };
      this.regeo(rs.addressLocation);
    },
    wxcSearchbarInputOnInput(e) {
      this.keywords = e.value;
      if (this.inputTimeout) {
        clearTimeout(this.inputTimeout);
      }
      let _this = this;
      this.inputTimeout = setTimeout(() => {
        this.inputTipsFetch();
      }, 500);
    },
    inputTipsFetch() {
      let _this = this;
      http({
        method: "POST",
        url: "/amap/inputtips",
        headers: {},
        body: {
          keywords: this.keywords
        }
      }).then(
        function(data) {
          if (data.code != 200) {
            return;
          }
          _this.searchList.splice(0, _this.searchList.length);
          let inputTipsList = data.data;
          inputTipsList.forEach(tip => {
            _this.searchList.push({
              addressTitle: tip.name,
              addressDesc: tip.district + tip.address,
              addressLocation: tip.location
            });
          });
        },
        function(error) {
          console.error("failure", error);
        }
      );
    },
    regeo(location) {
      let _this = this;
      http({
        method: "POST",
        url: "/amap/regeo",
        headers: {},
        body: {
          location: location
        }
      }).then(
        function(data) {
          if (data.code != 200) {
            return;
          }

          let regeoData = data.data;
          let cityCode = regeoData.cityCode;

          let loc = location.split(",");

          _this.city.lng = loc[0];
          _this.city.lat = loc[1];
          _this.city.cityCode = cityCode;
          setStorageVal("way:city", JSON.stringify(_this.city)).then(data => {
            console.log("设置city data");
            postMessage("m:way:city");
            navigator.pop({
              animated: true
            });
          });
        },
        function(error) {
          console.error("failure", error);
        }
      );
    }
  },
  created() {
    const pageHeight = Utils.env.getPageHeight();
    const screenHeight = Utils.env.getScreenHeight();
    this.scrollerStyle = { marginTop: screenHeight - pageHeight + "px" };

    let _this = this;
    getStorageVal("way:city").then(
      data => {
        let city = JSON.parse(data);
        _this.currentAddress = city.name;
      },
      error => {}
    );
  }
};
</script>

<style scoped>
.scroller {
  width: 750px;
}
</style>
