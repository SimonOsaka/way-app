<template>
    <div class="container">
        <slider class="slider" :style="sliderStyle" auto-play="false" infinite="false" show-indicators="true" @change="onChange">
        <div class="frame" :style="frameStyle" v-for="(img, i) in imageList" :key="i">
            <image class="image" :style="imageStyle" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
        </slider>
        <wxc-button text="立即体验" type="white" size="big" :btnStyle="{ position: 'relative', bottom: '260px', left: '206px', visibility: visible}"
              @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>

<script>
import { Utils, WxcButton } from "weex-ui";
import { setPageTitle, setStorageVal } from "./tools/utils.js";
import { guide1, guide2, guide3 } from "./tools/guide.js";
const navigator = weex.requireModule("navigator");

export default {
  components: { WxcButton },
  data: () => ({
    imageList: [{ src: guide1 }, { src: guide2 }, { src: guide3 }],
    visible: "hidden"
  }),
  methods: {
    onChange(e) {
      const length = this.imageList.length;
      if (e.index === length - 1) {
        this.visible = "visible";
      }
      console.log(e);
    },
    wxcButtonClicked(e) {
      console.log("点击进入应用");
      setStorageVal("way:first", "done");
      if (Utils.env.isIOS()) {
        weex.requireModule("rootview").refresh();
      }
      navigator.pop({
        animated: 'false'
      });
    }
  },
  created() {
    const screenHeight = Utils.env.getScreenHeight();
    console.log("屏幕高度", screenHeight);
    this.sliderStyle = { height: screenHeight + "px" };
    this.frameStyle = { height: screenHeight + "px" };
    this.imageStyle = { height: screenHeight + "px" };
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
}
.slider {
  width: 750px;
}
.frame {
  width: 750px;
  position: relative;
}
.image {
  width: 750px;
}
.indicator {
  width: 150px;
  height: 150px;
  item-color: #cccccc;
  item-selected-color: white;
  item-size: 20px;
  position: absolute;
  bottom: 20px;
  left: 300px;
}
</style>
