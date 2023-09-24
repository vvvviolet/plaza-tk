<template>
    <div 
        class="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
        <div class="flex items-center lg:mx-0 mx-auto">
            <Icon :name="icon" :color="colorString" :size="sizeString"/>
            <span
                class="lg:block hidden pl-[9px] mt-0.5 font-light text-[17px] "
            >
                {{ iconString }}
            </span>
        </div>
    </div>
</template>

<script setup>
const props=defineProps(['iconString','colorString','sizeString'])
const {iconString,colorString,sizeString}=toRefs(props)

let icon=ref('icon')
// console.log(iconString.value)
if (iconString.value === '首页')icon.value='mdi:home'
if (iconString.value === '推荐') icon.value='prime:thumbs-up'
if (iconString.value === '发布') icon.value='prime:pencil'
if (iconString.value === '添加Plaza到桌面') icon.value='prime:plus-circle'


</script>
