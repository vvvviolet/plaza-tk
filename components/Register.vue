<template>
    <div class="text-center text-[28px] mb-10 font-bold">
        Sign up
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
            :error="errors_email"
        />
        &nbsp;
        <span>@tongji.edu.cn</span>
    </div>
    
    <div class="px-6 pb-1.5 text-[15px]">
        密码
    </div> 
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="密码"
            v-model:input="password"
            inputType="password"
            :error="errors_password"
        />
    </div>
    <div class="px-6 pb-1.5 text-[15px]">
        确认密码
    </div> 
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="确认密码"
            v-model:input="confirmPassword"
            inputType="password"
            :error="password!=confirmPassword&&confirmPassword?'密码不一致':''"
        />
    </div>
    <div class="px-6 pb-1.5 text-[15px]">
        验证码
    </div>
    <div class="px-6 pb-2 flex justify-between items-center">
        <TextInput 
            placeholder="验证码"
            v-model:input="verificationCode"
            inputType="text"
            :error="errors_code"
           
        />
        <button 
            :disabled="!ok_to_send" 
            :class="ok_to_send ? 'bg-[#8800FF]':'bg-gray-200'"
            @click="sendEmail"
            class="w-[150px] text-[17px] font-semibold text-white py-3 rounded-md"
            >
            {{ ok_to_send? '获取验证码':`${60-time_now + time_start}s后重试` }}
        </button>
    </div>

    <div class="px-6 pb-2 mt-6">
        <context-holder />
        <button
            :disabled="(!uid || !password || !confirmPassword)"
            :class="(!uid || !password|| !confirmPassword)?'bg-gray-200':'bg-[#8800FF]'"
            @click="$event=>{signup()}"
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
        >
        注册
        </button>
    </div>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp()
import { message } from 'ant-design-vue';
let uid    =                  ref(null)
let password =                  ref(null)
let confirmPassword =           ref(null)
let verificationCode =          ref(null)

let errors_email = ref(null)
let errors_code = ref(null)
let errors_password = ref(null)

let ok_to_send = ref(true)

let time_now = ref(null)
let time_start = ref(null)

const sendEmail = async()=>{
    if(!uid.value){
        errors_email.value = '学号不能为空'
        // errors_code.value='验证码有误'
        // setTimeout(()=>{
        //     errors_code.value=''
        // },10*1000)
        setTimeout(()=>{
            errors_email.value=''
        },3*1000)
        return
    }
    try{
    const res = await $userStore.getVerifyCode(uid.value+'@tongji.edu.cn')
    }catch{
        message.error('发送失败，请稍后再试')
        return 
    }
    message.success('发送成功，请检查邮件')

    ok_to_send.value = false
    time_start = Date.parse(new Date())/1000;
    setTimeout(()=>{
        ok_to_send.value = true
    },30*1000)
}
const signup= async () => {
    try{
        await $userStore.signup(uid.value+'@tongji.edu.cn',password.value)
        $generalStore.isLoginOpen = false
        console.log(res)
    }catch(e){
        console.log(e)
    }

}
onMounted(()=>{
    setInterval(()=>{
        time_now.value = Date.parse(new Date())/1000;
    })
})
watch(()=>password.value,(val)=>{
    errors_password=val.length<8&&val.length>=1?'密码长度至少8位':''
})

</script>
