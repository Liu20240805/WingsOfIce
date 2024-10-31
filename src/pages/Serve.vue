<template>
    <div class="serve">
        <div class="head_background">
            <div class="user">
                <img :src="user" alt="" class="user_img">
            </div>
        </div>

        <div class="head_bottom"></div>

        <div class="nav">
            <RouterLink to="/homepage" active-class="mine_nav" class="nav_choose">
                <div>
                    <div class="header_top"></div>
                    <img :src="mine" alt="" class="nav_img">&ensp;
                    <p class="nav_p">个&ensp;人&ensp;主&ensp;页</p>
                </div>
            </RouterLink>
            <hr>
            <RouterLink to="/theme" active-class="mine_nav" class="nav_choose">
                <div>
                    <img :src="theme" alt="" class="nav_img">&ensp;
                    <p class="nav_p">系&ensp;统&ensp;主&ensp;题</p>
                </div>
            </RouterLink>
            <hr>
            <RouterLink to="/setting" active-class="mine_nav" class="nav_choose">
                <div>
                    <img :src="set" alt="" class="nav_img">&ensp;
                    <p class="nav_p">基&ensp;本&ensp;设&ensp;置</p>
                </div>
            </RouterLink>
            <hr>
            <RouterLink to="/about" active-class="mine_nav" class="nav_choose">
                <div>
                    <img :src="about" alt="" class="nav_img">&ensp;
                    <p class="nav_p">关&ensp;于&ensp;我&ensp;们</p>
                </div>
            </RouterLink>
            <!-- <hr>
            <RouterLink to="/serve" active-class="mine_nav">
                <img :src="set" alt="" class="nav_img">&ensp;
                <p class="nav_p">设&emsp;置</p>
            </RouterLink>
            <hr>
            <RouterLink to="/serve" active-class="mine_nav">
                <img :src="about" alt="" class="nav_img">&ensp;
                <p class="nav_p">关&emsp;于</p>
                <div class="header_top"></div>
            </RouterLink> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { watch } from "vue";
import user from '@/img/tools/mine/user.png'
import mine from '@/img/tools/mine/mine.png'
import theme from '@/img/tools/mine/theme.png'
import set from '@/img/tools/mine/set.png'
import about from '@/img/tools/mine/about.png'

// const loginStore = useLoginStore()
// watch(() => loginStore.loginState, (toLoginState) => {
//     if (toLoginState === false) {
//         location.href = "http://localhost:5173/login"
//     }
// }, { deep: true, immediate: true })
onMounted(() => {
    active()
})

function active() {
    window.scrollTo(document.documentElement.scrollHeight, 0)
}
</script>

<style scoped>
.serve {
    height: 100vh;
}

.head_background {
    width: 100%;
    height: 0;
    padding-bottom: 20%;
    background-color: rgb(66, 165, 246);
}

.head_bottom {
    width: 100%;
    height: 0;
    display: inline-block;
    padding-bottom: 20%;
    border-bottom-left-radius: 60%;
    border-bottom-right-radius: 60%;
    background-color: rgb(66, 165, 246);
}

.user {
    position: relative;
    width: 20%;
    text-align: center;
    border-radius: 50%;
    background-color: rgb(236, 235, 235);
    left: 40%;
}

.user_img {
    width: 100%;
}

.mine_nav {
    text-align: center;
    color: #000;
}

.nav {
    width: 80%;
    left: 10%;
    /* position: absolute; */
    /* top: 20%; */
    position: relative;
    top: -10%;
    background-color: rgb(255, 255, 255, 0.9);
    text-align: center;
}

.nav_img {
    width: 7%;
    display: inline-block;
}

.nav_p {
    display: inline-block;
    margin: 10%;
}

.nav_choose {
    text-align: center;
    color: #000;
}
</style>