import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('../views/SingUpView.vue')
        },
        {
            path: '/todos',
            component: () => import('../views/TodosView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/:catchAll(.*)', // 捕捉所有未定義的路徑
            redirect: '/' // 重定向到首頁
        }
    ]
})

// 取得 Cookie 的函數
function getCookie(name) {
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}

// 路由守衛：檢查登入狀態
router.beforeEach((to, from, next) => {
    const authToken = getCookie('authToken') // 從 cookie 中取得 token

    if (authToken) {
        // 如果 token 存在並且未過期
        if (to.path === '/') {
            // 如果嘗試訪問根路徑，則重定向到 /todos
            next({ path: '/todos' })
        } else {
            next() // 繼續導航
        }
    } else {
        // 如果 token 不存在或過期
        if (to.meta.requiresAuth) {
            // 需要登入才能訪問的路徑，重定向到登入頁面
            next({ path: '/' })
        } else {
            next() // 繼續導航
        }
    }
})

export default router
