import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        nickname: localStorage.getItem('nickname') || '' // 從 localStorage 恢復狀態
    }),
    actions: {
        setNickname(newNickname) {
            this.nickname = newNickname
            localStorage.setItem('nickname', newNickname) // 同步到 localStorage
        }
    },
    persist: true // 啟用持久化
})
