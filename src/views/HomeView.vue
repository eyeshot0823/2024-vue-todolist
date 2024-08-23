<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
// api 網址
const api_site = 'https://todolist-api.hexschool.io'

const router = useRouter();

// 初始化 Pinia store
const userStore = useUserStore()

// 設定 Cookie 的函數
function setCookie(name, value, days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000) // 設定過期時間
    const expires = 'expires=' + date.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
}
/*
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

// 刪除 Cookie 的函數（登出時使用）
function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;'
}
*/
const email = ref('');
const pwd = ref('');
const token = ref('');
const email_status = ref('');
const pwd_status = ref('');

const checkEmail = () => {
    if (email.value === '') {
        email_status.value = '此欄位不可留空'
        return false
    } else {
        email_status.value = ''
        return true
    }
}

const checkPwd = () => {
    if (pwd.value === '') {
        pwd_status.value = '此欄位不可留空'
        return false
    } else {
        pwd_status.value = ''
        return true

    }
}
const signInSubmit = async () => {
    if (checkEmail() && checkPwd()) {
        try {
            const reponse = await axios.post(`${api_site}/users/sign_in`, {
                email: email.value,
                password: pwd.value
            })
            console.log(reponse)
            if (reponse.data.status === true) {
                token.value = reponse.data.token
                userStore.setNickname(reponse.data.nickname)
                setCookie('authToken', token.value, 1)
                router.replace('/todos')
            } else {
                Swal.fire({
                    title: '系統警告',
                    text: reponse.data.message,
                    icon: 'warning',
                    confirmButtonText: '確認'
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: '系統警告',
                text: error.response.data.message,
                icon: 'warning',
                confirmButtonText: '確認'
            })
        }
    }
}

</script>

<template>
    <!-- login_page -->
    <div id="loginPage" class="bg-yellow">
        <div class="conatiner loginPage vhContainer ">
            <div class="side">
                <a href="#"><img class="logoImg" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png" alt=""></a>
                <img class="d-m-n" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png" alt="workImg">
            </div>
            <div>
                <form class="formControls" @submit.prevent="signInSubmit">
                    <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
                    <label class="formControls_label" for="email">Email</label>
                    <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" v-model="email" required>
                    <span v-if="email_status" v-html="email_status"></span>
                    <label class="formControls_label" for="pwd">密碼</label>
                    <span v-if="pwd_status" v-html="pwd_status"></span>
                    <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" v-model="pwd" required>
                    <input class="formControls_btnSubmit" type="submit" value="登入">
                    <a class="formControls_btnLink" href="/signup">註冊帳號</a>
                </form>
            </div>
        </div>
    </div>
</template>
