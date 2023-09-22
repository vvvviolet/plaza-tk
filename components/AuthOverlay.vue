<template>
    <div
        id="AuthOverlay"
        class="overlay fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full rounded-[0.8rem]"
    >
    <div class='top-plane'></div>
       
        <div class="relative bg-white bg-opacity-0 w-full max-w-[470px] h-[70%] p-4 rounded-lg">

            <div class="w-full flex justify-start items-center text-black font-bold hover:text-white">
                <button 
                    @click="$generalStore.isAuthOpen=false"
                    class="p-1 rounded-full flex items-center">
                    <Icon name="prime:angle-double-left" color="black" size="26"/>
                    <h1>PLaza</h1>
                </button>
                
            </div>
            
            <Auth />

        </div>
        </div>
</template>

<script setup>
const { $generalStore } = useNuxtApp()

</script>

<style>
.overlay {
  margin: 0 auto;
  perspective: 360px;
  perspective-origin: 50% 50%;
  background: radial-gradient(
      circle at 50% 0,
      rgba(255, 72, 72, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(0, 0, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,  
        rgba(5, 143, 97, 0.578),
        rgba(0, 255, 0, 0) 70.71%
      ) beige;
  /* border-radius: 50%; */
}

.top-plane{
  width: 200%;
  height: 100%;
  position: absolute;
  bottom: -35%;
  left: -50%;
  background-image: -webkit-linear-gradient(#fff 1px, transparent 8px), -webkit-linear-gradient(left, #fff 2px, transparent 1px);
  background-size: 100px 100px,100px 100px;
  background-position: -1px -1px,-1px -1px;
  transform: rotateX(260deg);
  animation: planeMoveTop 1s infinite linear;
}


@keyframes planeMoveTop {
  from {
    background-position: 0px -100px,0px 0px;
  }
  to {
    background-position: 0px 0px, 100px 0px;
  }
}

@media (max-height: 350px) {
  .overlay {
    perspective: 210px;
  }
}

</style>
