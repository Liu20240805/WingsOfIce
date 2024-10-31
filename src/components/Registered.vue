<template>
  <div class="login">
    <div class="search_body"></div>
    <div class="search_body"></div>
    <div class="body">
      <div class="search_body"></div>

      <form action="" class="form">
        <div class="user">
          <div class="email_img"></div>
          <input type="text" class="input" placeholder="请输入邮箱" maxlength="30" minlength="3" required="true"
            v-model="email">
        </div>

        <br>
        <br v-show="brShow">

        <div class="user">
          <div class="user_img"></div>
          <input type="text" class="input" placeholder="请输入账号" maxlength="20" minlength="6" required="true"
            v-model="user">
        </div>

        <br>
        <br v-show="brShow">

        <div class="pwd">
          <div class="pwd_img"></div>
          <input type="password" class="input" placeholder="请输入密码" maxlength="30" minlength="6" required="true"
            v-model="pwd">
        </div>

        <br>
        <br v-show="brShow">

        <div class="pwd">
          <div class="pwd_img"></div>
          <input type="password" class="input" placeholder="请确认密码" maxlength="30" minlength="6" required="true"
          v-model="rPwd">
        </div>
        
        <br>
        <br v-show="brShow">

        <button class="submit" @click="registered">
          <p class="normal_p">注 册</p>
        </button>

        <RouterLink to="/login">
          <button class="registered">
          <p class="normal_p">已有账号?去登录!</p>
        </button>
        </RouterLink>
        <br>
      </form>

      <div class="search_body"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { RouterLink } from 'vue-router';
import router from "@/router";
import { ref } from "vue";
import { useLoginStore } from "@/store/Login";

let email = ref()
let user = ref()
let pwd = ref()
let rPwd = ref()

const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
function validateEmail(email:any){
  return emailReg.test(email)
}

function registered() {
  let registered = true
  if(validateEmail(email.value) === false){
    alert("请输入有效的邮箱!!!")
    registered = false
  }
  if(pwd.value !== rPwd.value){
    alert("请确保密码一致!!!")
    registered = false
  }
  if(registered){
    useLoginStore().$patch({
      email: email.value,
      user: user.value,
      pwd: pwd.value
    })
    alert("注册账号成功!!!")
    setTimeout(function(){
      router.push({path: '/login'
      })} ,1500)
  }else{
    alert("注册账号失败!!!")
  }
}

let brShow = ref()
function watchWin(){
  let width = (window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth)
  if(width > 600){
    brShow.value = true
  }
  if(width <= 600){
    brShow.value = false
  }
}
setInterval(watchWin, 500)
</script>


<style scoped>
.login {
  width: 100%;
}

.body {
  background-color: rgb(0, 204, 255);
  /* background-color: white; */
  width: 60%;
  display: inline-block;
  position: relative;
  left: 20%;
}

.input {
  width: 80%;
  height: 0;
  padding-top: 5%;
  padding-bottom: 5%;
  display: inline-block;
  display: inline-block;
  position: relative;
  left: 5%;
  border-top: 1px solid #c9c9c9;
  border-right: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  border-left: 1px solid #c9c9c9;
}

.input:focus {
  outline: 0.5px solid #72e3ff;
}

.email,
.user,
.pwd {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.email_img,
.user_img,
.pwd_img {
  background-color: #eeeeee;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50%;
  width: 10%;
  display: inline-block;
  left: 5%;
  position: relative;
  border-left: 1px solid #c9c9c9;
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
}

.email_img {
  background-image: url("@/img/tools/login/email.png");
}

.user_img {
  background-image: url("@/img/tools/login/user.png");
}

.pwd_img {
  background-image: url("@/img/tools/login/pwd.png");
}

.lose {
  position: absolute;
  left: 5%;
  border: 0;
  background-color: white;
}

.submit {
  background-color: #5bb75b;
  border: 0;
  position: absolute;
  right: 5%;
  padding: 1%;
}

.lose p {
  color: rgb(0, 145, 200);
}

.registered {
  position: absolute;
  left: 5%;
  border: 0;
  background-color: white;
}

.registered p {
  color: rgb(0, 145, 200);
}

.submit p {
  color: #ffffff;
}

.normal_p {
  margin: 0;
}

@media screen and (min-width:1600px) {

  .normal_p,
  .input {
    font-size: 30px;
  }
}

@media screen and (min-width:1400px) and (max-width:1599.9px) {

  .normal_p,
  .input {
    font-size: 28px;
  }
}

@media screen and (min-width:1200px) and (max-width:1399.9px) {

  .normal_p,
  .input {
    font-size: 26px;
  }
}

@media screen and (min-width:1000px) and (max-width:1199.9px) {

  .normal_p,
  .input {
    font-size: 24.5px;
  }
}

@media screen and (min-width:800px) and (max-width:999.9px) {

  .normal_p,
  .input {
    font-size: 23px;
  }
}

@media screen and (min-width:600px) and (max-width:799.9px) {

  .normal_p,
  .input {
    font-size: 20px;
  }
}

@media screen and (min-width:400px) and (max-width:599.9px) {

  .normal_p,
  .input {
    font-size: 18px;
  }
}

@media screen and (min-width:350px) and (max-width:399.9px) {

  .normal_p,
  .input {
    font-size: 15px;
  }
}

@media screen and (max-width:349.9px) {

  .normal_p,
  .input {
    font-size: 14px;
  }
}
</style>