<template>
    <div class="delicacies" v-for="(news, newsIndex) in newsFoundList" :key="newsIndex">
        <RouterLink :to="{ name: 'news', query: { id: news.id }}">
            <div class="news">
                <div class="news_left">
                    <p class="news_title">{{ news.title }}</p>
                    <p class="news_describes">{{ news.introduce }}</p>
                    <div class="news_information">
                        <div class="placeholding"></div>
                        <img :src="people" class="people" alt="图标">
                        <p class="news_information_first">{{ news.readerNum }}人阅读</p>
                        <p class="news_information_second">{{ news.time }}</p>
                    </div>
                </div>
                <div class="news_middle"></div>
                <img :src="news.url" :alt="news.img" class="news_img">
            </div>
        </RouterLink>
        <hr>
    </div>
</template>

<script setup lang="ts">
import '@/css/news.css'
import { ref } from 'vue'
import people from '@/img/news/people.png'
import type { NewsInformation } from '@/types/restraint';

import CultureJson from '../../../public/data/Culture.json';

let newsFoundList = ref<NewsInformation>([])

for(let i = 0; i < CultureJson.length; i++){
    newsFoundList.value[i] = CultureJson[i]
}

</script>