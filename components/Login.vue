<template>
    <div class="px-6 pt-20 pb-1 w-[80%] flex justify-around items-center">
        <TextInput 
            placeholder="请输入学号"
            v-model:input="uid"
            inputType="text"
            :autoFocus="true"
            :error="errors_uid"
            class=" bg-opacity-1"
        />
        &nbsp;
        <span class="text-white ">@tongji.edu.cn</span>
    </div>

    <div class="px-6 pb-2 mt-6">
        <button
            :disabled="(!uid)"
            @click="$event=>login()"
            class="w-full text-[17px] font-semibold text-white bg-gray-200 bg-opacity-10 py-3 rounded-sm cursor-pointer"
        >
        验 证
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
