<template>
  <div class="login">
    <div class="search_body"></div>
    <div class="search_body"></div>
    <div class="body">
      <div class="search_body"></div>

      <form @submit.prevent="login" class="form">
        <div class="user">
          <div class="user_img"></div>
          <input type="text" class="input" placeholder="请输入账号" maxlength="20" minlength="3" required="true"
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
        <RouterLink to="/lose">
          <button class="lose">
            <p class="normal_p">忘记密码?</p>
          </button>
        </RouterLink>
        <button class="submit">
          <p class="normal_p">登 录</p>
        </button>
        <br>
        <br>
        <br v-show="brShow">
        <RouterLink to="/registered">
          <button class="registered">
            <p class="normal_p">没有账号?去注册!</p>
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
import { ref } from "vue";
import router from "@/router";
import { useLoginStore } from "@/store/Login";

let user = ref()
let pwd = ref()
function login(){
  if((user.value === 'admin' && pwd.value === '123456')
    || (user.value === useLoginStore().user && pwd.value === useLoginStore().pwd)
  ){
    alert("登录成功")
    setTimeout(function(){
      router.push({path: '/serve'
      })} ,1500)
  }else{
    alert("用户名或密码错误")
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
  /* background-color: white; */
  background-color: rgb(0, 204, 255);
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

.user {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.user_img {
  background-color: #eeeeee;
  background-image: url("@/img/tools/login/user.png");
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

.pwd {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.pwd_img {
  background-color: #eeeeee;
  background-image: url("@/img/tools/login/pwd.png");
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
    font-size: 21.5px;
  }
}

@media screen and (min-width:400px) and (max-width:599.9px) {

  .normal_p,
  .input {
    font-size: 20px;
  }
}

@media screen and (min-width:350px) and (max-width:399.9px) {

  .normal_p,
  .input {
    font-size: 18px;
  }
}

@media screen and (max-width:349.9px) {

  .normal_p,
  .input {
    font-size: 16px;
  }
}
</style>