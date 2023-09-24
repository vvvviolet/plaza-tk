<template>
    <div>
            <div class="p-1 font-light">
                <a 
                class="
                ">
                <img class="rounded-md "  src="~/assets/images/post.jpg" alt="">
                </a>
                <div>
                    <a class="m-1" href="">描述描述描述描述描述描述描述描述描述描述描述...</a>
                    <div class="flex justify-between">
                        <a class="flex items-center m-1 text-gray-800 font-[15px]" href="">
                            <img class="mr-1 rounded-full w-[20px] h-[20px] border-1 border-slate-800" src="https://sns-avatar-qc.xhscdn.com/avatar/639079ed0faeb111b76b606b.jpg?imageView2/2/w/60/format/webp|imageMogr2/strip" alt="">
                            <span class="font-light">作者名称</span>
                        </a>
                        <button @click="sendLike" 
                            class="flex justify-center items-center m-2"
                        >
                            <Icon :name="likeString" size="20" color="#f00"/>
                            <span  >1w+</span>
                        </button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>

let likeString = ref('prime:heart')
const { $userStore,$generalStore } = useNuxtApp()
const sendLike = async () => {
    // if($userStore.name===''){
    if(false){
        $generalStore.isAuthOpen=true
        message.info('请先登录')
        return 
    }
    try{
        await $userStore.sendLike()
        likeString=(likeString=='prime:heart-fill'?'prime:heart':'prime:heart-fill')
    }
    catch{
        message.error('点赞失败，请稍后再试')
    }
    
}
</script>
