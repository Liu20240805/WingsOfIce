<template>
    <div class="theme">
        <button @click="ice">
            <img class="theme_img" :src="iceTheme" alt="">
            <p class="nav_p">冰&emsp;雪&emsp;主&emsp;题</p>
        </button>
    </div>

    <div class="theme">
        <button @click="silence">
            <img class="theme_img" :src="silenceTheme" alt="">
            <p class="nav_p">默&emsp;哀&emsp;主&emsp;题</p>
        </button>
    </div>
</template>

<script lang="ts" setup>
import iceTheme from '@/img/tools/theme/theme0.png'
import silenceTheme from '@/img/tools/theme/theme1.png'
import { useThemeStore } from '@/store/Theme';

function ice(){
    useThemeStore().$patch({
        ice: true,
        silence: false,
    })
}

function silence(){
    useThemeStore().$patch({
        ice: false,
        silence: true,
    })
}
</script>

<style scoped>
.theme {
    width: 45%;
    margin-left: 2%;
    margin-top: 2%;
    text-align: center;
    display: inline-block;
}

.theme_img {
    height: auto;
    width: 99%;
}

</style>