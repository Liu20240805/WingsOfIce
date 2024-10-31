import { defineStore } from 'pinia'

export const useConterStore = defineStore('Counter', {
    state: () => {
        return{
            coverIf: true,
            otherIf: false
        }
    }
})