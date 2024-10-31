import { defineStore } from 'pinia'

export const useLoginStore = defineStore('Login', {
    state: () => {
        return{
            email:"123456@qq.com",
            user:"abcdef",
            pwd:"123456"
        }
    }
})