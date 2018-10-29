<template>
  <div>
    <navbar title="登录" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">

      <div class="content" v-if="loginTab == 0">
        <div>
          <input type="tel" maxlength="11" return-key-type="done" @input="userTelOninput" style="width: 702px;" class="input" placeholder="手机号" />
        </div>
        <div style="flex-direction: row; margin-top: 20px;">
          <input type="number" maxlength="6" auto-appear="false" return-key-type="go" style="width: 351px; " @input="userValidCodeOninput" class="input" placeholder="验证码" />
          <wxc-button :text="btnGetValidCodeText" type="white" :btnStyle="{width: '341px',marginLeft: '10px'}" :disabled="btnGetValidCodeDisabled" @wxcButtonClicked="userValidCodeClicked"></wxc-button>
        </div>
      </div>
      <div class="content" v-else>
        <div>
          <input type="text" maxlength="16" return-key-type="done" @input="userNameOninput" style="width: 702px;" class="input" placeholder="用户名" />
        </div>
        <div style="flex-direction: row; margin-top: 20px;">
          <input type="password" maxlength="16" return-key-type="go" style="width: 702px; " @input="userPasswordOninput" class="input" placeholder="密码" />
        </div>
      </div>

      <div style="align-items:center; margin-top: 20px;" v-if="loginTab == 0">
        <wxc-button type="blue" text="登录" @wxcButtonClicked="userTelLoginClicked"></wxc-button>
      </div>
      <div style="align-items:center; margin-top: 20px;" v-else>
        <wxc-button type="blue" text="登录" @wxcButtonClicked="userNameLoginClicked"></wxc-button>
      </div>

      <div style="flex-direction: row; margin-top: 20px; justify-content: center;">
        <text class="user_agreement"> 首次登录即代表注册，并且同意 </text>
        <text class="user_agreement link" @click="clickUserAgreement()">《用户服务协议》 </text>
      </div>
    </scroller>

    <wxc-dialog title="提示" :content="dialogContent" :show="dialogShow" :single="true" @wxcDialogConfirmBtnClicked="dialogConfirmBtnClicked"></wxc-dialog>
    </div>
</template>

<script>
import { Utils, WxcButton, WxcDialog } from "weex-ui";
import {
  getEntryUrl,
  postMessage,
  initIconfont,
  isEmpty,
  setStorageVal,
  modalDebug,
  getUrlKey,
  setPageTitle
} from "../../tools/utils.js";
import { http } from "../../tools/http.js";
import category from "../../components/category.vue";
import navbar from "../../include/navbar.vue"
const navigator = weex.requireModule("navigator");
const storage = weex.requireModule("storage");
const modal = weex.requireModule("modal");

export default {
  components: { WxcButton, WxcDialog, navbar },
  data: () => ({
    userTel: "",
    userValidCode: "",
    userName: "",
    userPasword: "",
    btnGetValidCodeText: "获取验证码",
    btnGetValidCodeDisabled: false,
    btnGetValidCodeDisabledTime: 120,

    dialogContent: "",
    dialogShow: false,
    loginTab: 1
  }),
  created() {
    initIconfont();
    setPageTitle("登录");
    const pageHeight = Utils.env.getPageHeight();
    const screenHeight = Utils.env.getScreenHeight();
    this.scrollerStyle = { marginTop: screenHeight - pageHeight + 'px' }
  },
  methods: {
    userTelOninput: function(event) {
      this.userTel = event.value;
      console.log("oninput", event.value);
    },
    userNameOninput(event) {
      this.userName = event.value;
      console.log("userName", this.userName);
    },
    userPasswordOninput(event) {
      this.userPasword = event.value;
      console.log("userPasword", this.userPasword);
    },
    userValidCodeOninput: function(event) {
      this.userValidCode = event.value;
      console.log("oninput", event.value);
    },
    userValidCodeClicked(e) {
      if (isEmpty(this.userTel)) {
        this.dialogContent = "请输入手机号";
        this.dialogShow = true;
        return;
      } else {
        let mobile_mode = /^1[34578]\d{9}$/;
        if (!mobile_mode.test(this.userTel)) {
          this.dialogContent = "手机号格式不正确";
          this.dialogShow = true;
          return;
        }
      }

      let _this = this;
      http({
        method: "POST",
        url: "/user/validCode",
        headers: {},
        body: {
          userTel: this.userTel
        }
      }).then(
        function(data) {
          console.log("success", data);
          if (data.code != 200) {
            _this.dialogContent = data.msg;
            _this.dialogShow = true;
          }
        },
        function(error) {
          console.error("failure", error);
        }
      );

      this.btnGetValidCodeDisabled = true;
      let interval = setInterval(() => {
        this.btnGetValidCodeText =
          "已发送（" + --this.btnGetValidCodeDisabledTime + "）";
        console.debug(
          this.btnGetValidCodeDisabled,
          this.btnGetValidCodeText,
          this.btnGetValidCodeDisabledTime
        );
        if (this.btnGetValidCodeDisabledTime === 0) {
          this.btnGetValidCodeDisabled = false;
          this.btnGetValidCodeText = "获取验证码";
          this.btnGetValidCodeDisabledTime = 120;
          clearInterval(interval);
        }
      }, 1000);
    },
    userTelLoginClicked(e) {
      if (isEmpty(this.userTel) || isEmpty(this.userValidCode)) {
        return;
      } else {
        let code_mode = /\d{6}$/;
        if (!code_mode.test(this.userValidCode)) {
          this.dialogContent = "验证码格式不正确";
          this.dialogShow = true;
          return;
        }
      }

      let _this = this;
      http({
        method: "POST",
        url: "/user/login",
        headers: {},
        body: {
          userTel: this.userTel,
          validCode: this.userValidCode
        }
      }).then(
        function(data) {
          console.log("success", data);
          if (data.code != 200) {
            _this.dialogContent = data.msg;
            _this.dialogShow = true;
            return;
          }

          modalDebug(JSON.stringify(data));

          let userProfile = data.data;
          setStorageVal(
            "way:user",
            JSON.stringify({
              userLoginId: userProfile.userLoginId,
              userNickName: userProfile.userNickName,
              userToken: userProfile.token
            })
          ).then(
            data => {
              modalDebug("setStorageVal");
              let tabIndex = getUrlKey("tabIndex");
              postMessage("way:tab:selectedIndex", tabIndex ? tabIndex : 0);
              navigator.pop({
                animated: "true"
              });
            },
            error => {
              const modal = weex.requireModule("modal");
              modal.toast({
                message: error,
                duration: 3
              });
            }
          );
        },
        function(error) {
          console.error("failure", error);
        }
      );

      console.log(this.userTel, this.userValidCode);
    },
    dialogConfirmBtnClicked(e) {
      this.dialogContent = "";
      this.dialogShow = false;
    },
    clickUserAgreement() {
      navigator.push({
        url: getEntryUrl("views/user/agreements"),
        animated: 'true'
      });
    },
    userNameLoginClicked() {
      if (isEmpty(this.userName) || isEmpty(this.userPasword)) {
        modal.toast({
          message: "用户名和密码必须填写",
          duration: 1.5
        });
        return;
      }

      let _this = this;
      http({
        method: "POST",
        url: "/user/signin",
        headers: {},
        body: {
          userLoginName: this.userName,
          userLoginPassword: this.userPasword
        }
      }).then(
        function(data) {
          console.log("success", data);
          if (data.code != 200) {
            _this.dialogContent = data.msg;
            _this.dialogShow = true;
            return;
          }

          modalDebug(JSON.stringify(data));

          let userProfile = data.data;
          setStorageVal(
            "way:user",
            JSON.stringify({
              userLoginId: userProfile.userLoginId,
              userNickName: userProfile.userNickName,
              userToken: userProfile.token
            })
          ).then(
            data => {
              modalDebug("setStorageVal");
              postMessage("m:way:login", 'success');
              navigator.pop({
                animated: "true"
              });
            },
            error => {
              modal.toast({
                message: error,
                duration: 3
              });
            }
          );
        },
        function(error) {
          console.error("failure", error);
        }
      );

      console.log(this.userTel, this.userValidCode);
    }
  }
};
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
  font-size: 32px;
  font-style: normal;
}
.scroller {
  flex: 1;
}
.title {
  margin-top: 300px;
  margin-left: 275px;
  width: 200px;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.title_text {
  font-size: 80px;
  font-weight: bold;
}
.content {
  margin-top: 50px;
  padding-top: 24px;
  padding-right: 24px;
  padding-left: 24px;
}
.input {
  font-size: 40px;
  height: 88px;
  border-width: 1px;
  border-style: solid;
  border-color: #a5a5a5;
  border-radius: 12px;
}
.user_agreement {
  font-size: 22px;
  color: #a5a5a5;
}
.link {
  color: #2395ff;
}
.center-text {
  position: absolute; 
  bottom: 25; 
  left: 172; 
  right: 172;
  text-align: center; 
  font-size: 36; 
  font-weight: bold;
}
</style>