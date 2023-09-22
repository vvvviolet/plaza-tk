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
                    <Icon name="prime:angle-left" color="black" size="26"/>
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
  background-image: 
  radial-gradient(closest-side, rgb(250, 224, 133), rgba(170, 142, 245, 0)),
  radial-gradient(closest-side, rgba(74, 201, 255, 1), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(2, 18, 58), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgba(142, 60, 249, 0.5), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(255, 248, 222), rgba(248, 192, 147, 0));
    background-size: 
    130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 40vmax;
  background-position:
    -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 10s movement linear infinite;
  /* background: radial-gradient(
      circle at 10% 20%,
      rgba(252, 252, 252, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(65, 109, 241, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
      circle at 36.7% 35%,
      rgba(2, 240, 69, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
      circle at 36.7% 35%,
      rgba(74, 201, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 3.3% 95%,  
        rgba(254, 254, 254, 0.5),
        rgba(0, 255, 0, 0) 70.71%
      ) rgb(232, 232, 182); */
  /* border-radius: 50%; */
}

.overlay::after {
  content: '';
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  z-index: -1;
}

.top-plane{
  width: 200%;
  height: 100%;
  position: absolute;
  bottom: -20%;
  left: -50%;
  background-image: -webkit-linear-gradient(#fff 1px, transparent 8px), -webkit-linear-gradient(left, #fff 2px, transparent 1px);
  background-size: 100px 100px,100px 100px;
  background-position: -1px -1px,-1px -1px;
  transform: rotateX(260deg);
  animation: planeMoveTop 8s infinite linear;
}

@keyframes movement {
  0%, 100% {
    background-size: 
      130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax;
    background-position:
      -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax;
  }
  25% {
    background-size: 
      100vmax 100vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      60vmax 60vmax;
    background-position:
      -60vmax -90vmax,
      50vmax -40vmax,
      0vmax -20vmax,
      -40vmax -20vmax,
      40vmax 60vmax;
  }
  50% {
    background-size: 
      80vmax 80vmax,
      110vmax 110vmax,
      80vmax 80vmax,
      60vmax 60vmax,
      80vmax 80vmax;
    background-position:
      -50vmax -70vmax,
      40vmax -30vmax,
      10vmax 0vmax,
      20vmax 10vmax,
      30vmax 70vmax;
  }
  75% {
    background-size: 
      90vmax 90vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      70vmax 70vmax;
    background-position:
      -50vmax -40vmax,
      50vmax -30vmax,
      20vmax 0vmax,
      -10vmax 10vmax,
      40vmax 60vmax;
  }
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
