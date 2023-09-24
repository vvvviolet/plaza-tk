<template>
    <div id="TopNav"
         class="fixed top-0 bg-white z-30 flex items-center w-full border-b h-[60px]">
        <div 
            class="flex items-center justify-between w-full  mx-auto lg:ml-12">
            <!-- logo -->
                <div 
                    class="mx-2"
                >
                    <NuxtLink to="">
                        <img  class="shadow-lg rounded-full" width="30" src="~/assets/images/logo.png" alt="plaza-logo" >
                    </NuxtLink>
                </div>
            <!-- 搜索+工具栏 -->
                <div class="flex justify-end  w-full ">
                        <div class="flex bg-[#f3f3fb] rounded-sm lg:w-[40%] w-full justify-between">
                            <input type="text"
                                class="mx-2  my-2 bg-transparent placeholder-[#838383] text-1 focus:outline-none w-full"
                                placeholder="探索更多内容"
                                
                            >
                            <div class="px-3 py-1 flex items-center border-l border-l-gray-300">
                                <Icon name="ri:search-line" color="#838383" size="22"/>
                            </div>
                        </div>
                    
                        <div class="w-[30px] mx-1 flex items-center justify-end"> 
                            <Icon name="prime:align-justify" size="27" color="#A1A2A7"/>
                        </div>
            </div>
    </div>
</div>  
</template>

<script setup>
    const route = useRoute()
    const { $userStore, $generalStore } = useNuxtApp()

    let showMenu=ref(false)
</script>
