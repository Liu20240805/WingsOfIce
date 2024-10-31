<template>
    <video class="video" :src="url" controls></video>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { type BannerImg } from '@/types/restraint';
import banner1 from '@/img/tools/banner/v0.png'
import banner2 from '@/img/tools/banner/v1.png'
import banner3 from '@/img/tools/banner/v2.png'

const route = useRoute()

let startId = "b001"
let url = ""
for (let i = 1; i <= 9999; i++) {
    if (i < 10) {
        if (route.query.id === (startId + "000" + i)) {
            url ="http://localhost:5173/src/video/v" + (i - 1) + ".mp4"
            break
        }
    }
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
</script>

<style scoped>
.video{
    width: 100%;
}
</style>