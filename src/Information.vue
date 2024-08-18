<template>
<div class="w-full h-screen">
    <nav class="container mx-auto rounded-b-3xl w-full h-20 transition-all duration-200 flex justify-between items-center text-gray-800 font-serif px-6">
        <div class="w-24 h-12 flex justify-center items-center">
          <img class="w-16 h-16" src="/src/assets/images/logogray.png">
        </div>
        <div class="flex-1 flex md:flex md:space-x-12 justify-center md:w-1/3 h-full items-center text-xs md:text-sm drop-shadow-2xl">
          <router-link class="hidden md:flex" to="/">HOME</router-link>
          <router-link class="hidden md:flex" to="/analysis">ANALYTICS</router-link>
          <a class="hidden md:flex">INFORMATION</a>
        </div>
        <div class="flex justify-end items-center w-24 h-12">
          <button class="bg-black hidden md:flex justify-center items-center hover:bg-white rounded-2xl w-24 h-12 text-white hover:text-black transition-all duration-150">
            <a>Sign up</a>
          </button>
          <!-- <SignUp class="hidden md:flex"/> -->
          <svg class="w-10 h-10 flex md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
        </div>
    </nav>

    <div class="container mx-auto w-full h-auto mt-10 px-16  font-serif flex items-center flex-col pt-10">
      <nav id="navig" class="container mx-auto hidden rounded-b-3xl w-full h-20 bg-white transition-all duration-200  justify-between items-center text-gray-800 font-serif px-6">
        <div class="w-24 bg- h-12 flex justify-center items-center ">
          <img class="w-16 h-16" src="/src/assets/images/logogray.png">
        </div>
        <div class="flex-1 flex md:flex md:space-x-12 justify-center md:w-1/3 h-full items-center text-xs md:text-sm drop-shadow-2xl">
          <router-link class="hidden md:flex" to="/">HOME</router-link>
          <router-link class="hidden md:flex" to="/analysis">ANALYTICS</router-link>
          <a class="hidden md:flex">INFORMATION</a>
          
        </div>
        <div class="flex justify-end items-center w-24 h-12">
          <SignUp class="hidden md:flex"/>
          <svg  class="w-10 h-10 flex md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        
      </nav>
        <div class="flex flex-col w-full h-auto justify-center items-center space-y-6 text-center">
            <h1 class="text-5xl text-balance">About</h1>
            <p class="text-2xl">VTuber Insights is a platform that helps streamers to grow their channels.</p>
        </div>
        <div class="mt-16 w-full h-[25rem] bg-center bg-cover  bg-[url('/src/assets/images/informationComponent/antonio-gross-SQ2OOFbG5CY-unsplash-compresed.jpg')] flex justify-center items-center">
            <img class="w-80 h-80 drop-shadow-2xl " src="/src/assets/images/informationComponent/whitelogo.png">
        </div>
        <section class="w-full h-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 space-y-10 md:space-y-0 justify-center mt-24">
            <details open class="space-y-2 ">
                <summary class="text-xl font-semibold">Who needs it?</summary>
                <p class="text-lg">Beginners and experienced vitubers who want to grow their channel, increase viewers and surround themselves with a loyal audience on Twitch
                </p>
            </details>
            <details open class="space-y-2">
                <summary class="text-xl font-semibold">Why do you need it?</summary>
                <p class="text-lg">Every year thousands of new vtubers enter the market. In order not to lose in the growing competition, each streamer must analyze the statistics of their streamers and general trends.
                </p>
            </details>
            <details open class="space-y-2">
                <summary class="text-xl font-semibold">How does our platform work?</summary>
                <ol class="text-lg list-decimal pl-4 space-y-2">
                <li>
                    Our server collects data from Twitch, analyzes and predicts results for both individual streamers and the entire market.
                </li>
                   <li>You plan your stream starting from time and day of the week, finishing with games and topics on your stream, and learn the likely result: increase in subscribers and viewers.</li> 
                </ol>
            </details>
        </section>
    </div>
    <footer class="container mx-auto  w-full h-24 flex text-black items-center justify-between font-mono space-x-2 opacity-80 mt-10 md:px-0 px-10">
        <p class="space-x-2">
        <span class="font-sans">Voshe Company ©</span>
        <span>2024</span>
        </p>
        <span>evdevosh@gmail.com</span>
      </footer>
</div>
</template>

<script setup>
import SignUp from '/src/SignUp.vue'
window.addEventListener("scroll", (event) => {
            const navigation = document.getElementById('navig')
            if (scrollY > 200) {
              

             navigation.classList.remove('hidden')
             navigation.classList.add('fixed')
             navigation.classList.add('top-0')
             navigation.classList.add('flex')
             navigation.classList.add('z-50')
             navigation.classList.add('slide-down')
    
            }
            else if(scrollY < 200){
              navigation.classList.add('hidden')
              navigation.classList.remove('fixed');
              navigation.classList.remove('top-0');
              navigation.classList.remove('z-50');
            }
          });
</script>

<style>
.slide-down {

  transform: translateY(-100%); /* начальное смещение вверх */
  animation: slideDown 1s ease-out forwards; /* запускаем анимацию */
}

@keyframes slideDown {
  from {
    transform: translateY(-100%); /* начальное смещение вверх */
  }
  to {
    transform: translateY(0%); /* конечная позиция на месте */
  }
}
</style>

