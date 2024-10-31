import { defineStore } from 'pinia'

export const useThemeStore = defineStore('Theme', {
    state: () => {
        return{
            ice: true,
            silence: false,
        }
    }
})