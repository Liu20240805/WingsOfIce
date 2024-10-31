<template>
    <div class="cover" v-show="coverIf">
        <div class="header_top"></div>
        <div class="header_top"></div>
        <div class="header_top"></div>
        <img :src="cover" alt="" class="cover_img">
        <button @click="closeIf" class="close"><img :src="close" alt="" class="close_img"></button>
        <div class="header_top"></div>
        <div class="header_top"></div>
        <div class="header_top"></div>
    </div>

    <div class="banner" v-show="otherIf">
        <div class="header_top"></div>
        <div class="header_top"></div>
        <div class="header_top"></div>
        <div class="header_top"></div>
        <div class="banner_Left">
            <img :src="left" alt="" class="banner_Left_img" @click="changeImgLeft">
        </div>
        <div v-for="(bannerImg, bannerIndex) in bannerImgList" :key="bannerIndex"
         class="banner_body" v-show="imgIndex === bannerIndex">
            <RouterLink :to="{ name: 'watch', query: { id: bannerImg.id } }"><img :src="bannerImg.image" alt="轮播图"
                    class="banner_img"></RouterLink>
        </div>
        <div class="banner_Right">
            <img :src="right" alt="" class="banner_Right_img" @click="changeImgRight">
        </div>
    </div>

    <div class="circle_body" v-show="otherIf">
        <div v-for="(bannerImg, bannerIndex) in bannerImgList" :key="bannerIndex" class="circle_process">
            <div class="left">
                <div class="circle leftcircle" :id="bannerImg.circleLeftId"></div>
            </div>

            <div class="right">
                <div class="circle rightcircle" :id="bannerImg.circleRightId"></div>
            </div>
        </div>
    </div>

    <div class="header_top" v-show="otherIf"></div>
    <div class="header_top" v-show="otherIf"></div>
    <div class="header_top" v-show="otherIf"></div>

    <div class="mainShow" v-show="otherIf">
        <div class="nav">
            <div class="nav_move">
                <p class="nav_p">&ensp;</p>
                <RouterLink to="/history/found" active-class="history_nav">
                    <p class="nav_p">发现</p>
                </RouterLink>
                <p class="nav_p">|</p>
                <RouterLink to="/history/official" active-class="history_nav">
                    <p class="nav_p">官方</p>
                </RouterLink>
                <p class="nav_p">|</p>
                <RouterLink to="/history/delicacies" active-class="history_nav">
                    <p class="nav_p">美食</p>
                </RouterLink>
                <p class="nav_p">|</p>
                <RouterLink to="/history/tourism" active-class="history_nav">
                    <p class="nav_p">冰雪旅游</p>
                </RouterLink>
                <p class="nav_p">|</p>
                <RouterLink to="/history/culture" active-class="history_nav">
                    <p class="nav_p">冰雪非遗</p>
                </RouterLink>
                <p class="nav_p">|</p>
                <RouterLink to="/history/celebrity" active-class="history_nav">
                    <p class="nav_p">冰雪运动名人</p>
                </RouterLink>
                <p class="nav_p">&ensp;</p>
            </div>
            <hr>
            <div class="content">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { type BannerImg } from '@/types/restraint';
import left from '@/img/tools/banner/left.png'
import right from '@/img/tools/banner/right.png'
import banner1 from '@/img/tools/banner/v0.png'
import banner2 from '@/img/tools/banner/v1.png'
import banner3 from '@/img/tools/banner/v2.png'
import cover from "@/img/tools/celebrity/cover.png"
import close from "@/img/tools/celebrity/close.png"
import { useConterStore } from '@/store/Counter';

onMounted(() => {
    changeCircle()
    active()
})

// onUpdated(() => {
//     changeCircle()
// })

function active() {
    window.scrollTo(document.documentElement.scrollHeight, 0)
}


const countStore = useConterStore()
let coverIf = countStore.coverIf
let otherIf = countStore.otherIf

function closeIf(){
    countStore.$patch({
        coverIf: false,
        otherIf: true
    })
    coverIf = countStore.coverIf
    otherIf = countStore.otherIf
}


let bannerImgList = ref<BannerImg>([
    {
        id: "b0010001",
        image: banner1,
        circleLeftId: "b0020001",
        circleRightId: "b0020101"
    },
    {
        id: "b0010002",
        image: banner2,
        circleLeftId: "b0020002",
        circleRightId: "b0020102"
    },
    {
        id: "b0010003",
        image: banner3,
        circleLeftId: "b0020003",
        circleRightId: "b0020103"
    },
])

function changeCircle() {
    let circleIndex = ref(imgIndex.value + 1)

    for (let i = 1; i <= bannerImgList.value.length; i++) {
        let j, k
        if (i < 10) {
            j = document.getElementById("b002000" + i)
            k = document.getElementById("b002010" + i)
        }
        // if (i >= 10) {
        //     j = document.getElementById("b00200" + i)
        //     k = document.getElementById("b00201" + i)
        // }
        if (i != circleIndex.value) {
            if (j != null) {
                j.classList.remove("leftcircle")
                k!.classList.remove("rightcircle")
                j.classList.add("leftcircle_false")
                k!.classList.add("rightcircle_false")
            }
        }
        if (i === circleIndex.value) {
            if (j != null) {
                j.classList.remove("leftcircle_false")
                k!.classList.remove("rightcircle_false")
                j.classList.add("leftcircle")
                k!.classList.add("rightcircle")
            }
        }
    }
}

let imgIndex = ref(0)

function changeImg() {
    imgIndex.value++
    
    if (imgIndex.value > bannerImgList.value.length - 1) {
        imgIndex.value = 0
    }
    changeCircle()
}

let set = setInterval(changeImg, 5000)

function changeImgLeft() {
    if (imgIndex.value === 0) {
        imgIndex.value = bannerImgList.value.length - 1
    } else {
        imgIndex.value -= 1
    }
    clearInterval(set)
    set = setInterval(changeImg, 5000)
    changeCircle()
}

function changeImgRight() {
    if (imgIndex.value === bannerImgList.value.length - 1) {
        imgIndex.value = -1
    }
    imgIndex.value += 1
    clearInterval(set)
    set = setInterval(changeImg, 5000)
    changeCircle()
}
</script>


<style scoped>
.cover{
    width: 100%;
    position: absolute;
    text-align: center;
    z-index: 1;
    background-color: #666;
}

.cover_img{
    width: 80%;
}

.close{
    width: 5%;
    height: 0;
    position: absolute;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    border: 0;
    background-color: #d6d6d6;
    text-align: center;
    left: 85%;
}

.close_img{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;

}

.banner {
    width: 100%;
    position: relative;
    text-align: center;
}

.banner_body {
    width: 80%;
    display: inline-block;
    position: relative;
}

.banner_body-enter-active{
    animation: bokeh 0.5s;
}

@keyframes bokeh{
    0%, 50%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
}

.banner_img {
    position: relative;
    width: 100%;
}

.banner_Left {
    height: 8%;
    width: 8%;
    position: absolute;
    display: inline-block;
    top: 46%;
    left: 1%;
}

.banner_Right {
    height: 8%;
    width: 8%;
    position: absolute;
    display: inline-block;
    top: 46%;
    right: 1%;
}

.banner_Left_img {
    display: inline;
    width: 99%;
}

.banner_Right_img {
    display: inline;
    width: 99%;
}

.nav {
    display: inline-block;
    background-color: white;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    overflow: hidden;
}

.nav_move {
    width: 95%;
    white-space: nowrap;
    overflow-y: auto;
    position: relative;
    left: 2.5%;
}

.nav_move::-webkit-scrollbar {
    display: none;
}

.nav a.history_nav {
    color: #1890ff;
}

.nav a {
    width: 100%;
    color: black;
}

.nav_p {
    text-align: center;
    display: inline-block;
    margin: 3px 6px 3px 6px;
}


/* ========================圆环进度条======================== */
.circle_body {
    text-align: center;
}

.circle_process {
    display: inline-block;
    position: relative;
    width: 9.9px;
    height: 10px;
    margin-left: 5px;
    margin-right: 5px;
    /* animation-duration: 5s; */
}

.left {
    width: 5px;
    height: 10px;
    position: absolute;
    top: 0;
    overflow: hidden;
    left: 0;
}

.right {
    width: 5px;
    height: 10px;
    position: absolute;
    top: 0;
    overflow: hidden;
    right: 0;
}

.circle{
    width: 8px;
    height: 8px;
    border: 1px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    transform: rotate(-135deg);
}

.leftcircle {
    border-bottom: 1px solid rgb(20, 96, 184);
    border-left: 1px solid rgb(20, 96, 184);
    left: 0;
    animation: circle_left linear;/* -webkit- */
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    /* animation-duration: 5s; */
    animation-duration: 0s;
}

.rightcircle {
    border-top: 1px solid rgb(20, 96, 184);
    border-right: 1px solid rgb(20, 96, 184);
    right: 0;
    animation: circle_right linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-duration: 0s;
}

.leftcircle_false {
    border-bottom: 1px solid rgb(0, 204, 255);
    border-left: 1px solid rgb(0, 204, 255);
    left: 0;
    animation: circle_left linear;
    /* -webkit- */
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-duration: 0s;
}

.rightcircle_false {
    border-top: 1px solid rgb(0, 204, 255);
    border-right: 1px solid rgb(0, 204, 255);
    right: 0;
    animation: circle_right linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-duration: 0s;
}

@keyframes circle_left {

    0%,
    50% {
        /* -webkit- */
        transform: rotate(-135deg);
    }

    100% {
        transform: rotate(45deg);
    }
}

@keyframes circle_right {
    0% {
        transform: rotate(-135deg);
    }

    50%,
    100% {
        transform: rotate(45deg);
    }
}
</style>  