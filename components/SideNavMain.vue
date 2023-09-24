<template>
    <div id="SideNavMain" 
        class="
        fixed 
        bottom-0 
        pt-[5px]
        border-t 
        w-full
        md:w-auto
        lg:w-[270px]
        lg:ml-10
        bg-white 
        md:left-0 
        md:h-full
        lg:pt-[70px] 
        lg:h-full  
        lg:left-0
        "
         >
        <div class="
         w-full
         mx-auto 
         lg:flex-col
         md:flex-col
         flex
         justify-between">
            <NuxtLink to="/">
                <MenuItem iconString="首页" colorString="rgb(250, 224, 133)" sizeString="30" />
            </NuxtLink>
            <NuxtLink to="/">
                <MenuItem iconString="推荐" colorString="#000" sizeString="30" />
            </NuxtLink>
            <NuxtLink to="/">
                <MenuItem iconString="发布" colorString="#000" sizeString="30" />
            </NuxtLink>
            <NuxtLink to="/">
                <MenuItem iconString="添加Plaza到桌面" colorString="#000" sizeString="30" />
            </NuxtLink>
            <!-- <div class="border-b lg:ml-2 mt-2"></div> -->
            <NuxtLink  to="#">
                <div class="flex items-center hover:bg-gray-100 rounded-md w-full p-3">
                <img v-if="!$userStore.uid" 
                    class="rounded-full lg:mx-0 mx-auto " 
                    width="35" 
                    src="https://picsum.photos/id/8/300/320"
                    alt="avatar"

                >
                <Icon v-else name="prime:user" size="27"/>
                <div class="lg:p-2 lg:block hidden">
                    <div class="flex items-center">
                        <div class="font-light ">
                            {{ $userStore.name ? $userStore.name:'游客请登录' }}
                        </div>
                    </div>
                    <div class="font-light text-[12px] text-gray-600">
                        {{ $userStore.bio ? $userStore.bio:'' }}
                    </div>

                </div>
                </div>
            </NuxtLink>
            <div class="mb-0 lg:block hidden border-b lg:ml-2 mt-2 "></div>
            <div class="lg:block hidden text-[11px] text-gray-500">
                <div class="pt-4 px-2">About Plaza</div>
                <div class="pt-4 px-2">Plaza for Good Advertise Developers</div>
                <div class="pt-4 px-2">Help Safety Terms Privacy Creator Portal Community Guidelines</div>
                <div class="pt-4 px-2">&copy; 2023 Plaza</div>
            </div>
            <div class="pb-14"></div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const route = useRoute()
</script>
