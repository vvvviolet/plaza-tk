<template>
    <div class="px-6 mt-20 pb-1 font-light border-b flex justify-between items-center">
        <TextInput 
            placeholder="请输入学号"
            v-model:input="uid"
            inputType="text"
            :autoFocus="true"
            :error="errors_uid"
            class="w-full"
            max="7"
        />
        &nbsp;
        <div class="text-black font-light">@tongji.edu.cn</div>
    </div>
    <div class="px-6 pb-1 font-light flex border-b justify-between items-center">
        <TextInput 
            placeholder="请输入验证码"
            v-model:input="code"
            inputType="text"
            :autoFocus="true"
            :error="errors_code"
            class="w-[80%]"
            max="6"
        />
      
        <button
            @click="$event=>sendEmail()"
            :disabled="!ok_to_send"
            :class="ok_to_send ? 'text-[#000]':'text-white'"
            class="text-[17px] font-light w-[80%] text-end "
        >
        {{ ok_to_send? '获取验证码':`${60-time_now + time_start}s后重试` }}
        </button>
    </div>

    <div class="px-6 pb-2 mt-6 flex justify-center">
        <button
            @click="$event=>auth()"
            class="verify-btn w-[100px] h-[100px] bg-opacity-0  py-3 rounded-lg "
        >
        <Icon name="prime:angle-right" color="white" size="40"/>
        </button>
    </div>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp()
import { message } from 'ant-design-vue';
import { Modal } from 'ant-design-vue';

let uid    = ref(null)
let code = ref(null)

let ok_to_send = ref(true)

let errors_uid = ref(null)
let errors_code = ref(null)

let time_now = ref(null)
let time_start = ref(null)
onMounted(()=>{
    setInterval(()=>{
        time_now.value = Date.parse(new Date())/1000;
    })
})

const sendEmail = async()=>{
    if(!uid.value){
        errors_uid.value = '学号不能为空'
        setTimeout(()=>{
            errors_uid.value=''
        },3*1000)
        return
    }
    $userStore.getVerifyCode(uid.value+'@tongji.edu.cn').then(data=>{
        console.log(data)
        Modal.success(
            {
            title:'发送成功',
            content:h('div', {}, [
            h('span', '请登录 '),
            h('a', {'href':'http://mail.tongji.edu.cn','target':'_black','style':{'color':'#4377ff'}},'mail.tongji.edu.cn'),
            h('span', ' 获取验证码'),
            ]),
            okButtonProps:{
                type:'link',
            }
            
        })
        ok_to_send.value = false
        time_start = Date.parse(new Date())/1000;
        setTimeout(()=>{
            ok_to_send.value = true
        },30*1000)
    }).catch((e)=>{
        message.error('发送验证码失败，请稍后再试')
        return
    })

}
const auth = async () => {
    errors_uid.value = null
    if(!uid.value){
        errors_uid.value='学号不能为空'
        return
    }
    if(!code.value || code.value.length<6 ){
        errors_code.value='验证码长度应为6位'
        return
    }

    
    await $userStore.auth(uid.value+'@tongji.edu.cn',code.value).then((res)=>{
        
        console.log(res)
        message.success('验证成功')
        $generalStore.isAuthOpen = false
    }).catch((e)=>{
        console.log(e)
        message.error('验证码有误')
    })
       
    
   
       
    
}

</script>

<style scoped>
.verify-btn{
    transition: 1s;
    /* 加上这一句就能隐藏突出的部分 */
    overflow: hidden;
    transition: color .1s, box-shadow .1s;
    color:white;
    background-image: url(~/assets/images/logo.png);
    background-position: center;
    background-size:cover;  
    background-repeat: no-repeat;  
    filter: drop-shadow(0 10 10 10 rgba(250, 249, 249, 1));
    border-radius: 100px;

}

.verify-btn:hover{
    box-shadow: 
    0 0 10px black,
    0 0 20px white,
    0 0 40px white,
    0 0 80px white,
    0 0 160px white;
}
.verify-btn:active{
    background-color: rgba(246, 246, 246, 0.2);
    box-shadow: 
    0 0 10px white,
    0 0 20px white,
    0 0 40px white,
    0 0 80px white,
    0 0 160px white;
}

</style>