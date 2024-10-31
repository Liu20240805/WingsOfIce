<template>
    <div class="search_body"></div>
    <div class="body">
        <div class="search_body"></div>

        <form action="" class="form">
            <div class="user">
                <div class="user_img"></div>
                <input type="text" class="input" placeholder="请输入账号" maxlength="20" minlength="3" required="true"
                    v-model="user">
            </div>

            <br>
            <br>

            <div style="width: 100%; text-align: center; position: relative;">
                <button class="registered">
                    <p class="normal_p">发送验证码</p>
                </button>
            </div>
            <br>
        </form>

        <div class="search_body"></div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

let userData = ref({ user: "", pwd: "" })
let user = ref()
let pwd = ref()

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
    /* position: absolute; */
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