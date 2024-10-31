<template>
    <div class="app" style="background-color: #f1f1f1;">
        <div class="main" id="app_main">
            <!-- 标题 -->
            <div class="header" v-if="titleShow">
                <div class="header_top"></div>
                <p class="header_title">{{ headerTitle }}</p>
                <div class="header_bottom"></div>
            </div>

            <!-- 展示区 -->
            <div class="main-content">
                <RouterView></RouterView>
                <div class="search_body"></div>
                <div class="search_body"></div>
            </div>
        </div>

        <!-- 导航区 -->
        <div class="navigate" v-if="navigateShow" id="navigate">
            <div class="nav_options">
                <RouterLink to="/home" active-class="end_nav">
                    <p class="nav_p">冰雪首页</p>
                </RouterLink>
            </div>

            <div class="nav_options">
                <RouterLink to="/history" active-class="end_nav">
                    <p class="nav_p">冰雪历史</p>
                </RouterLink>
            </div>

            <div class="nav_options">
                <RouterLink to="/serve" active-class="end_nav">
                    <p class="nav_p">冰雪服务</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import '@/css/responsive.css';
import '@/css/main.css';
import router from '@/router';
import { useThemeStore } from '@/store/Theme';

let headerTitle = ref("")
let navigateShow = ref(true)
let titleShow = ref(true)
watch(() => router.currentRoute.value.path, (toPath) => {
    console.log("您当前路径为:" + toPath);
    if (toPath == "/home") {
        headerTitle.value = "传承冰雪文化";
        navigateShow.value = true
    }

    if (toPath.includes("/history")) {
        headerTitle.value = "冰雪历史简介";
        navigateShow.value = true
    }

    if (toPath == "/serve") {
        headerTitle.value = "";
        navigateShow.value = true
    }

    if (toPath == "/login") {
        headerTitle.value = "登 录";
        navigateShow.value = false
    }

    if (toPath == "/registered") {
        headerTitle.value = "注 册";
        navigateShow.value = false
    }

    if (toPath.includes("/news")) {
        headerTitle.value = "文章详情";
        navigateShow.value = false
    }

    if (toPath == "/lose") {
        headerTitle.value = "忘记密码";
        navigateShow.value = false
    }

    if (toPath.includes("/watch")) {
        navigateShow.value = false
    }

    if (toPath.includes("/search") || toPath.includes("/homepage") || toPath.includes("/theme") || toPath.includes("/setting") || toPath.includes("/about")) {
        navigateShow.value = false
        titleShow.value = false
    } else {
        titleShow.value = true
    }
}, { deep: true, immediate: true })

watch(() => useThemeStore(), (theme) => {
    if (theme.silence === true) {
        document.getElementById('app_main')!.classList.add("silence_theme")
        document.getElementById('navigate')!.classList.add("silence_theme")
    } else {
        if (document.getElementById('app_main') !== null) {
            document.getElementById('app_main')!.classList.remove("silence_theme")
            document.getElementById('navigate')!.classList.remove("silence_theme")
        }
    }
}, { deep: true, immediate: true })
</script>
