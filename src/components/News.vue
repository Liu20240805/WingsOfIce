<template>
    <div class="head">
        <p class="title">{{ news.title }}</p>
        <p class="time">{{ news.time }}&emsp;</p>
        <p class="reader">阅读&ensp;{{ news.reader }}</p>
    </div>

    <div class="body">
        <p class="content">{{ news.content }}</p>
    </div>
</template>


<script lang="ts" setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'
import newsJson from '../../public/data/news.json';

const routeNews = useRoute().query.id
let news = ref({id:"", title:"", time:"", reader:{}, content:""})

for(let i = 0; i < newsJson.length; i++){
    if(newsJson[i].id === routeNews){
        news.value = newsJson[i]
        console.log(news.value)
        console.log(newsJson[i])
    }
}

onMounted(() => {
    active()
})

function active() {
    window.scrollTo(document.documentElement.scrollHeight, 0)
}
</script>


<style>
.title{
    color: #000;
    font-weight: bold;
}

.time{
    color: #666;
    display: inline-block;
}

.reader{
    color: #666;
    display: inline-block;
}
</style>