<template>
    <div id="signUpPage" class="bg-yellow">
        <div class="conatiner signUpPage vhContainer">
            <div class="side">
                <a href="#"><img class="logoImg" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png" alt=""></a>
                <img class="d-m-n" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png" alt="workImg">
            </div>
            <div>
                <form class="formControls" @submit.prevent="signUpSubmit">
                    <h2 class="formControls_txt">註冊帳號</h2>
                    <label class="formControls_label" for="email">Email</label>
                    <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" v-model="email" required>
                    <label class="formControls_label" for="name">您的暱稱</label>
                    <input class="formControls_input" type="text" name="name" id="name" v-model="nickname" placeholder="請輸入您的暱稱">
                    <label class="formControls_label" for="pwd">密碼</label>
                    <input class="formControls_input" type="password" name="pwd" id="pwd" v-model="pwd" placeholder="請輸入密碼" required>
                    <label class="formControls_label" for="pwd">再次輸入密碼</label>
                    <input class="formControls_input" type="password" name="pwd" id="pwd" v-model="confirm_pwd" placeholder="請再次輸入密碼" required>
                    <input class="formControls_btnSubmit" type="submit" value="註冊帳號">
                    <a class="formControls_btnLink" href="/">登入</a>
                </form>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'
// api 網址
const api_site = 'https://todolist-api.hexschool.io'

const router = useRouter();

const email = ref('')
const pwd = ref('')
const confirm_pwd = ref('')
const nickname = ref('')

const signUpSubmit = async () => {
    if (pwd.value === confirm_pwd.value) {
        try {
            await axios.post(`${api_site}/users/sign_up`, {
                email: email.value,
                password: pwd.value,
                nickname: nickname.value
            })
            router.replace('/home')
        } catch (error) {
            //console.log(error.response.data.message)
            Swal.fire({
                title: '系統警告',
                text: error.response.data.message,
                icon: 'warning',
                confirmButtonText: '確認'
            })
        }

    } else {
        Swal.fire({
            title: '系統警告',
            text: '密碼不一致',
            icon: 'warning',
            confirmButtonText: '確認'
        })

    }
}
</script>