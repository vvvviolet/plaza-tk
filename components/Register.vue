<template>
    <div class="text-center text-[28px] mb-10 font-bold">
        Sign up
    </div>
    <div class="px-6 pb-1.5 text-[15px]">
        Email address
    </div>
    <div class="px-6 pb-2 w-[80%] flex justify-center items-center">
        <TextInput 
            placeholder="uid"
            v-model:input="email"
            inputType="text"
            :autoFocus="true"
            error=""
        />
        &nbsp;
        <span>@tongji.edu.cn</span>
    </div>
    
    <div class="px-6 pb-1.5 text-[15px]">
        Password
    </div> 
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Password"
            v-model:input="password"
            inputType="password"
        />
    </div>
    <div class="px-6 pb-1.5 text-[15px]">
        Confirm Password
    </div> 
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Confirm Password"
            v-model:input="confirmPassword"
            inputType="password"
            error=""
        />
    </div>
    <div class="px-6 pb-1.5 text-[15px]">
        Verification Code
    </div>
    <div class="px-6 pb-2 flex justify-between items-center">
        <TextInput 
            placeholder="Verification Code"
            v-model:input="verificationCode"
            inputType="text"
        />
        <button class="w-[150px] text-[17px] font-semibold text-white py-3 rounded-md bg-[#8800FF]">send</button>
    </div>

    <div class="px-6 pb-2 mt-6">
        <button
            :disabled="(!email || !password || !confirmPassword)"
            :class="(!email || !password|| !confirmPassword)?'bg-gray-200':'bg-[#8800FF]'"
            @click="$event=>register()"
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
        >
        Sign up
        </button>
    </div>
</template>

<script setup>

let email    =          ref(null)
let password =          ref(null)
let confirmPassword =   ref(null)
let verificationCode =        ref(null)

let errors = ref(null)

</script>
