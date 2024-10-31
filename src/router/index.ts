import { createRouter, createWebHistory/* , createWebHashHistory */ } from "vue-router";

import Home from "@/pages/Home.vue";
import History from "@/pages/History.vue";
import Serve from "@/pages/Serve.vue";

import Delicacies from "@/pages/historySon/Delicacies.vue";
import Found from "@/pages/historySon/Found.vue";
import Official from "@/pages/historySon/Official.vue";
import Tourism from "@/pages/historySon/Tourism.vue";
import Culture from "@/pages/historySon/Culture.vue";
import Celebrity from "@/pages/historySon/Celebrity.vue";

import Login from "@/components/Login.vue"
import Registered from "@/components/Registered.vue";
import Lose from "@/components/Lose.vue";

import Homepage from "@/pages/serveSon/Homepage.vue";
import Theme from "@/pages/serveSon/Theme.vue";
import Setting from "@/pages/serveSon/Setting.vue";
import About from "@/pages/serveSon/About.vue";

import Watch from "@/components/watch.vue";
import Search from "@/pages/Search.vue";
// import path from "path";

import News from "@/components/News.vue";

const router = createRouter({
    // history:createWebHashHistory(),

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },

        {
            path: '/home',
            component: Home
        },

        {
            path: '/history',
            component: History,
            redirect: '/history/found',
            children: [
                {
                    path: '/history/delicacies',
                    component: Delicacies
                },

                {
                    path: '/history/found',
                    component: Found
                },

                {
                    path: '/history/official',
                    component: Official
                },

                {
                    path: '/history/tourism',
                    component: Tourism
                },

                {
                    path: '/history/culture',
                    component: Culture
                },

                {
                    path: '/history/celebrity',
                    component: Celebrity
                }
            ]
        },

        {
            path: '/serve',
            component: Serve
        },

        {
            path: '/login',
            component: Login
        },

        {
            path: '/registered',
            component: Registered
        },

        {
            path: '/lose',
            component: Lose
        },

        {
            name: "watch",
            path: '/watch',
            component: Watch
        },

        {
            path: "/search",
            component: Search
        },

        {
            path: '/homepage',
            component: Homepage
        },

        {
            path: '/theme',
            component: Theme
        },

        {
            path: '/setting',
            component: Setting
        },

        {
            path: '/about',
            component: About
        },

        {
            name: 'news',
            path: '/news',
            component: News
        }
    ]
})

export default router