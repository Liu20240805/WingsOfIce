<template>
    <div class="home">
        <div class="header_top"></div>

        <!-- 搜索 -->
        <RouterLink to="/search">
            <div class="search">
                <div class="search_top"></div>
                <div class="search_body">
                    <img :src="searchLoupe" class="search_loupe" alt="搜索">
                    <input class="search_input" type="text" placeholder="请输入关键词">
                </div>
                <div class="search_bottom"></div>
            </div>
        </RouterLink>

        <div class="header_top"></div>
        <div class="header_top"></div>

        <!-- 导航模块 -->
        <div class="home_nav">
            <div class="nav_module" @click="iceActive">
                <div class="header_top"></div>
                <div class="header_top"></div>
                <img :src="navFirst" alt="雪花" class="nav_img">
                <p class="nav_p">冰雪主题活动</p>
            </div>

            <RouterLink to="/history" class="nav_module">
                <div class="header_top"></div>
                <div class="header_top"></div>
                <img :src="navSecond" alt="雪花" class="nav_img">
                <p class="nav_p">冰雪历史简介</p>
            </RouterLink>

            <RouterLink to="/history/celebrity" class="nav_module">
                <div class="header_top"></div>
                <div class="header_top"></div>
                <img :src="navThird" alt="雪花" class="nav_img">
                <p class="nav_p">冰雪运动名人</p>
            </RouterLink>
        </div>

        <div class="header_top"></div>

        <!-- 模块一 -->
        <div class="module_first">
            <div class="mod_first_up">
                <img :src="moduleFirst1" class="mod_first_img">
                <div class="module_tool"></div>
                <img :src="moduleFirst2" class="mod_first_img">
            </div>

            <div class="header_top"></div>

            <div class="mod_first_down">
                <img :src="moduleFirst3" class="mod_first_img">
                <div class="module_tool"></div>
                <img :src="moduleFirst4" class="mod_first_img">
            </div>
        </div>

        <div class="header_top"></div>
        <div class="header_top"></div>

        <!-- 模块二 -->
        <div class="module_second">
            <div class="header_top"></div>
            <div class="header_top"></div>
            <p class="nav_p">冰雪非遗文化</p>
            <img :src="moduleSecond1" class="mod_second_img">
            <img :src="moduleSecond2" class="mod_second_img">
            <div class="header_top"></div>
            <div class="header_top"></div>
        </div>

        <div class="header_top"></div>
        <div class="header_top"></div>

        <!-- 模块三 -->
        <div class="module_third">
            <div class="mod_third_title">
                <div class="header_top"></div>
                <p class="nav_p">冰雪景点-雪乡</p>
                <div class="header_top"></div>
            </div>

            <div class="mod_third_body">
                <div class="mod_third_p">
                    <p class="nav_p" style="color: black;">中国雪乡</p>
                    <p class="nav_p" style="color: black;">被誉为:“最美的雪乡村庄”</p>
                </div>
                <img :src="moduleThird1" alt="中国雪乡" class="mod_third_img">
            </div>

            <div class="mod_third_body">
                <img :src="moduleThird2" alt="麋鹿" class="mod_third_img">
                <div class="mod_third_p">
                    <p class="nav_p" style="color: black;">雪乡村庄</p>
                    <p class="nav_p" style="color: black;">美丽雪乡的一只麋鹿</p>
                </div>
            </div>

            <div class="mod_third_body">
                <div class="mod_third_p">
                    <p class="nav_p" style="color: black;">雪乡的夜晚美景</p>
                    <p class="nav_p" style="color: black;">被誉为:“中国雪景之最”</p>
                </div>
                <img :src="moduleThird3" alt="雪乡夜景" class="mod_third_img">
            </div>
        </div>

        <div class="header_top"></div>
        <div class="header_top"></div>

        <!-- 模块四 -->
        <div class="module_fourth">
            <div class="mod_fourth_title">
                <div class="header_top"></div>
                <div class="header_top"></div>
                <p class="nav_p">冰雪游戏-冰封谷</p>
                <div class="header_top"></div>
                <div class="header_top"></div>
            </div>

            <RouterLink :to="{ name: 'news', query: { id: 1000 }}">
                <div class="news">
                    <div class="news_left">
                        <p class="news_title">冰封谷的来历</p>
                        <p class="news_describes">哈尔滨被誉为“冰雪之城”，哈尔滨市是我国冰雪文化的发源地，是中国冰雪体育运动的领头雁</p>
                        <div class="news_information">
                            <div class="placeholding"></div>
                            <img :src="people" class="people" alt="图标">
                            <p class="news_information_first">{{ readerNum }}人阅读</p>
                            <p class="news_information_second">{{ newsTime }}</p>
                        </div>
                    </div>
                    <div class="news_middle"></div>
                    <img :src="moduleFourth" alt="冰封谷" class="news_img">
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import '@/css/responsive.css'
import '@/css/news.css'
import searchLoupe from '@/img/tools/search/loupe.png'
import navFirst from '@/img/tools/nav/0.png'
import navSecond from '@/img/tools/nav/1.png'
import navThird from '@/img/tools/nav/2.png'
import moduleFirst1 from '@/img/module/module1/1.png'
import moduleFirst2 from '@/img/module/module1/2.png'
import moduleFirst3 from '@/img/module/module1/3.png'
import moduleFirst4 from '@/img/module/module1/4.png'
import moduleSecond1 from '@/img/module/module2/1.png'
import moduleSecond2 from '@/img/module/module2/2.png'
import moduleThird1 from '@/img/module/module3/1.png'
import moduleThird2 from '@/img/module/module3/2.png'
import moduleThird3 from '@/img/module/module3/3.png'
import moduleFourth from '@/img/news/cover/n0010001.png'
import people from '@/img/news/people.png'

let readerNum = ref(0);
let newsTime = ref("2024-06-09");

function iceActive() {
    window.scrollTo(0, document.documentElement.scrollHeight)
}

onMounted(() => {
    active()
})

function active() {
    window.scrollTo(document.documentElement.scrollHeight, 0)
}
</script>

<style scoped>
/* 搜索样式 */
.search {
    width: 100%;
    background: url("../img/tools/search/search.png") no-repeat;
    background-size: 100% 100%;
}

.search_body {
    width: 80%;
    margin-left: 9.5%;
    position: relative;
}

.search_loupe {
    position: absolute;
    top: 7%;
    left: 1%;
    height: 90%;
}

.search_input {
    width: 99%;
    height: 99%;
    border: 0;
    border-radius: 25px;
    text-align: center;
}

/* 导航模块样式 */
.home_nav {
    width: 100%;
    background: url("../img/tools/nav/background.png") no-repeat;
    background-size: 100% 100%;
}

.nav_module {
    width: 33%;
    display: inline-block;
    text-align: center;
}

.nav_img {
    width: 33%;
    display: inline-block;
}

.nav_p {
    color: #1890ff;
}

/* 模块一样式 */
.module_first {
    width: 100%;
    background-color: white;
}

.mod_first_up,
.mod_first_down {
    width: 100%;
}

.mod_first_img {
    width: 49.1%;
    border: 1px black solid;
}

.module_tool {
    width: 0.5%;
    display: inline-block;
}

/* 模块二样式 */
.module_second {
    background: url("../img/module/module2/background.png"), no-repeat;
    background-size: 100% 100%;
    width: 100%;
}

.mod_second_img {
    width: 40%;
    margin-left: 6.5%;
}

/* 模块三样式 */
.mod_third_title {
    background: url("../img/module/module3/backlground.png") no-repeat;
    background-size: 100% 100%;
}

.mod_third_body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
}

.mod_third_p {
    width: 49.5%;
    display: inline-block;
    position: relative;
}

.mod_third_p p {
    margin: 30% 0;
}

.mod_third_img {
    width: 49.5%;
}

/* 模块四样式 */
.mod_fourth_title {
    background: url("../img/module/module4/backlground.png") no-repeat;
    background-size: 100% 100%;
}
</style>