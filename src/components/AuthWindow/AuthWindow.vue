<template>
    <div class="auth-window" v-show="!showRegister">
        <p class="enter-login-password">
            Введите Ваш логин и пароль
        </p>
        <input class="login-field" v-model="loginData" type="text" placeholder="Логин">
        <input class="password-field" v-model ="passwordData" type="password" placeholder="Пароль">
        <div class="auth-register-buttons">
            <button v-show="!authResult" class="enter-button" v-on:click="sendData()">Войти</button>
            <button v-show="!authResult" class="enter-button" v-on:click="changeShowRegister()">Зарегистрироваться</button>
        </div>
        <div v-show="authResult" class="reset-button-block">
            <button class="enter-button" v-on:click="sendData()">Войти</button>
            <button class="reset-button" v-on:click="">Сброс пароля</button>
        </div>
    </div>
    <register-component v-show="showRegister"></register-component>
</template>

<script setup>
    
    import router from '@/router';
    import axios from 'axios';
    import { ref } from 'vue';
    import RegisterComponent from '../RegisterComponent/RegisterComponent.vue';

    const authResult = ref('');
    const loginData = ref('');
    const passwordData = ref('');
    const showRegister = ref(false);

    (async () => {
        if(localStorage.getItem('token')) {
            console.log('try');
        try {
            const responce = await axios.post('/check-token/check-token',{},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            });
            console.log(responce);
            router.push('/admin_panel');
        } catch (e){
            console.log(e);
        }
    }
    })();

    const sendData = async() =>{
        const data = {
            email:loginData.value,
            password:passwordData.value, 
        };
    try{
        console.log(data);
        const response = await axios.post('/auth/auth', data);
        
        localStorage.setItem('token', response.data.accessToken);  // сохраняем токен в локальное хранилище
        router.push('/admin_panel');
        
    }catch(error){

        authResult.value = true;
            console.log(error);
        }
    };
    const changeShowRegister = () => {
       showRegister.value = true;
    };

</script>

<style lang="scss" scoped src="./style.scss">
</style>


