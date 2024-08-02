<template>
    <div class="auth-window">
        <p class="enter-login-password">
            Введите Ваш логин и пароль
        </p>
        <input class="login-field" v-model="loginData" type="text" placeholder="Логин">
        <input class="password-field" v-model ="passwordData" type="password" placeholder="Пароль">
        <button v-show="!authResult" class="enter-button" v-on:click="sendData()">Войти</button>
        <div v-show="authResult" class="reset-button-block">
            <button class="enter-button" v-on:click="sendData()">Войти</button>
            <button class="reset-button" v-on:click="">Сброс пароля</button>
        </div>
    </div>
</template>

<script setup>

import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

    const authResult = ref('');
    const loginData = ref('');
    const passwordData = ref('');

    (async () => {
        if(localStorage.getItem('token')) {
            console.log('try');
        try {
            await axios.post('/check-token/check-token',{},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            });
            router.push('/admin_panel');
        } catch (e){}
    }
    })();

    const sendData = async() =>{
        const data = {
            email:loginData.value,
            password:passwordData.value, 
        };
    try{
        const response = await axios.post('/auth/auth', data);
        localStorage.setItem('token', response.data.accessToken);  // сохраняем токен в локальное хранилище
        router.push('/admin_panel');
    }catch(error){
        authResult.value = true;
            console.log(error);
        }
    };

</script>

<style lang="scss" scoped src="./style.scss">

</style>