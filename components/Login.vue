<template>
    <div class="text-center text-[28px] mb-10 font-bold">
        Log in
    </div>
    <div class="px-6 pb-1.5 text-[15px]">
        邮箱
    </div>
    <div class="px-6 pb-2 w-[80%] flex justify-center items-center">
        <TextInput 
            placeholder="学号"
            v-model:input="uid"
            inputType="text"
            :autoFocus="true"
            :error="errors_uid"
        />
        &nbsp;
        <span>@tongji.edu.cn</span>
    </div>
    <div class="px-6 pb-1.5 text-[15px]">
        密码
    </div> 
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="请输入密码"
            v-model:input="password"
            inputType="password"
        />
    </div>
    <div class="px-6 text-[12px] text-gray-600">忘记密码？</div>

    <div class="px-6 pb-2 mt-6">
        <button
            :disabled="(!uid || !password)"
            :class="(!uid || !password)?'bg-gray-200':'bg-[#8800FF]'"
            @click="$event=>login()"
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
        >
        登录
        </button>
    </div>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp()
import { message } from 'ant-design-vue';

let uid    = ref(null)
let password = ref(null)
let errors   = ref(null)

const login = async () => {
    errors.value = null
    if(!errors_uid.value){
        errors_uid.value='学号不能为空'
    }
    try{
        await $userStore.login(uid.value+'@tongji.edu.cn',password.value)
        message.success('登陆成功')
        
        $generalStore.isLoginOpen = false
        }catch(e){
        message.error("邮箱或密码有误")
        }
}

</script>
