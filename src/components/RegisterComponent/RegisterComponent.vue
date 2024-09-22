<template>
    <div class="register-component">
        <p class="title-register">
            Регистрация
        </p>
        <input class="name-field" v-model ="nameData" type="text" placeholder="Имя">
        <input class="phone-field" v-model="phoneData" type="text" placeholder="Телефон">
        <input class="login-field" v-model="emailData" type="text" placeholder="Электронная почта">
        <input class="password-field" v-model ="passwordData" type="password" placeholder="Пароль">
        <button  class="enter-button" v-on:click="sendData()">Отправить</button>
    </div>
</template>

<script setup>

    import axios from 'axios';
    import { ref } from 'vue';
    const nameData = ref('');
    const phoneData = ref('');
    const emailData = ref('');
    const passwordData = ref('');
    const emits = defineEmits(['closeWindowRegister']);

    const sendData = async () => {
        const data = {
            email: emailData.value,
            password: passwordData.value,
            userName: nameData.value,
            phone: phoneData.value,
        }
        try{
            const response = await axios.post('/register', data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Удачно ' + response.status);
            if(response.status === 201){
                console.log("Response body" + response);
                emits('closeWindowRegister');
                console.log('Регистрация прошла успешно.');              
            };
        }catch(error){
            if (error.response) {
                // Запрос был сделан, и сервер ответил кодом, который выходит за пределы 2xx
                console.log('Ошибка ответа:', error.response.data);
                console.log('Статус:', error.response.status);
            } else if (error.request) {
                // Запрос был сделан, но ответ не получен
                console.log('Ошибка запроса:', error.response);
            } else {
                // Произошла ошибка при настройке запроса
                console.log('Ошибка:', error.message);
            }
        }
    };

   
</script>    

<style src="./style.scss">
</style>