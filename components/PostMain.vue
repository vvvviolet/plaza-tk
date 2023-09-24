<template>
    <div id="PostMain"
    :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
    class="lg:ml-[320px] md:ml-[60px]"
    >
        <div id="PostNav" class="flex border-b m-1 md:overflow-clip lg:overflow-clip overflow-scroll">
            <div class="mr-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100">
                <a href="#">捞人</a>
            </div>
            <div class="mx-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100">
                <a href="#">搭子</a>
            </div>
            <div class="mx-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100 ">
                <a href="#">社团</a>
            </div>  
            <div class="mx-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100 ">
                <a href="#">课程</a>
            </div>  
            <div class="mx-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100 ">
                <a href="#">生活</a>
            </div>  
            <div class="mx-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100 ">
                <a href="#">板块1</a>
            </div>  
            <div class="mx-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100 ">
                <a href="#">板块2</a>
            </div>  
            <div class="ml-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100">
                <a href="#">板块3</a>
            </div>  
            <div class="ml-1 mb-2 p-1 shrink-0 rounded-sm hover:bg-slate-100">
                <a href="#">板块n</a>
            </div>  

        </div>

        <div id="PostMainContent" class="flex flex-wrap justify-center">
            <!-- 160 x 64 -->
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
            <div class=" w-[200px]  lg:w-[220px]" >
                <Post />
            </div>
           
           
          
        </div>
    </div>
</template>    

<script setup>
let posts = ref([])
const route = useRoute()

// onMounted(()=>{
//     try{

//     }
//     catch(err){
//         message.error('加载post失败')
//     }
// })
</script>
