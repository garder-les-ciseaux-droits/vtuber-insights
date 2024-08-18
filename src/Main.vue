<template>
  <div class="relative w-full h-screen overflow-x-hidden">
    <nav class="container  mx-auto rounded-b-3xl w-full h-20 bg-white transition-all duration-200 flex justify-between items-center text-gray-800 font-serif px-6">
      <div class="w-24 bg- h-12 flex justify-center items-center ">
        <img class="w-16 h-16" src="/src/assets/images/logogray.png">
      </div>
      <div class="flex-1 flex md:flex md:space-x-12 justify-center md:w-1/3 h-full items-center text-xs md:text-sm drop-shadow-2xl">
        <router-link class="hidden md:flex" to="/">HOME</router-link>
        <router-link class="hidden md:flex" to="/analysis">ANALYTICS</router-link>
        <router-link class="hidden md:flex" to="/info">INFORMATION</router-link>
        
      </div>
      <div class="flex justify-end items-center w-24 h-12">
        
        <button class="bg-black hidden md:flex justify-center items-center hover:bg-white rounded-2xl w-24 h-12 text-white hover:text-black transition-all duration-150">
          <a>Sign up</a>
        </button>
        <!-- <SignUp class="hidden md:flex"/> -->
        <svg  class="w-10 h-10 flex md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
      
    </nav>
    <!-- Основной контент -->
    <main class="w-full h-[88rem] md:h-[53rem] md:flex md:flex-col justify-center items-center mt-10 md:space-y-2  md:px-24">
      <div class="flex flex-col items-center justify-start h-full w-full px-6 shadow-xl rounded-3xl">
        <div class="w-full h-16 flex px-6 items-center justify-between ">
          <div class="flex h-full items-center space-x-2">
          <figure class="w-14 h-14">
            <img class="w-full h-full rounded-full border-2 border-indigo-400 " src="/src/assets/images/twitchlogos/nubchann.png">
          </figure>
          <span class="cursor-pointer text-gray-700">nubchann</span>
         
        </div>

         
        </div>
        <div class="w-full h-[3rem] flex justify-center px-6 items-center font-mono text-lg">
          <span  v-if="!this.applied">
            Choose the time of your stream
          </span>
          <div v-else class="relative justify-center flex h-full w-full items-center">
           
            
            <div v-if="this.editMode" class="absolute left-0 text-sm flex items-center space-x-2">
              <span >Change Mode</span>
              <div class="w-3 h-3 rounded-full bg-orange-500  animate-pulse"></div>
            </div>
            <div v-else class="absolute left-0 text-sm flex items-center space-x-2">
              <span >View Mode</span>
              <div class="w-3 h-3 rounded-full bg-green-500  animate-pulse"></div>
            </div>
          <span >Add categories and tags</span>
          <button v-if="this.applied === true" @click="this.linesMenu = !this.linesMenu" class="h-12 w-24 text-xs bg-gray-600 hover:bg-black hover:drop-shadow-xl text-white rounded-2xl absolute right-0">Watch Lines</button>
        </div>
        </div>
        <div class=" text-white px-6 text-sm h-[40rem] grid grid-cols-1 md:flex justify-center items-center overflow-x-auto md:overflow-x-hidden w-full py-4 glass-card-about">
          <div id="refTimeContainer" ref="timeContainer" class=" flex-1 bg-gradient-to-b from-indigo-300/40 via-pink-100/40 to-transparent h-[40rem] md:h-full relative">
            <div v-if="this.applied === false" class="relative w-full h-full flex flex-col justify-end items-center">
              <!-- Блок времени -->
              <div class="w-full flex justify-between text-gray-900 text-xs h-6">
                <span v-for="time in timeLabels" :key="time">{{ time }}</span>
              </div>

              <div class="relative w-full h-8 bg-gray-300">
                <div id="time-selection" class="absolute h-full bg-indigo-400" :style="{ left: startTimePercent + '%', width: selectionWidthPercent + '%' }"></div>
              </div>
              <!-- Линии для времени -->
              <div class="absolute top-0 bottom-0 w-full flex items-center">
                <div class="relative w-full h-full">
                  <div class="absolute h-full border-l-2 border-blue-500 cursor-ew-resize" :style="{ left: startTimePercent + '%' }" @mousedown="startDrag($event, 'start')"></div>
                  <div class="absolute h-full border-l-2 border-blue-500 cursor-ew-resize" :style="{ left: endTimePercent + '%' }" @mousedown="startDrag($event, 'end')"></div>
                </div>
              </div>
              <div v-show="this.tip1" class="w-full h-full absolute flex justify-center items-center z-50">
                <div class="w-64 h-48 flex flex-col justify-center px-4 items-center bg-indigo-500 rounded-3xl space-y-6">
                  <p class="w-full text-center">Move the lines on the timeline to select the start and end time of your nearest stream.</p>
                  <button @click="this.tip1 = false" class="text-black w-24 h-10 bg-white rounded-3xl shadow-lg hover:bg-black hover:text-white">OK</button>
                </div>
              </div>
            </div>

            <!-- Новый блок -->
            <div v-if="this.applied === true" class="w-full h-full flex flex-col justify-end items-center relative">
              <!-- Блок времени -->
                  <div v-if="currentPointValue !== null" :style="{ top: `${tooltipY}px`, left: `${tooltipX}px` }" class="fixed bg-gray-800 text-white px-2 py-1 rounded shadow-lg z-50">
                {{ currentPointValue }}
                </div>

              <div class="w-full flex justify-between text-black overflow-x-hidden h-6 text-xs">
                <span>{{ formatTime(startTimeApplied) }}</span>
                <span v-for="time in appliedTimeLabels" :key="time">{{ time }}</span>
                <span>{{ formatTime(endTimeApplied) }}</span>
              </div>
              <!-- <div class="w-20 mt-1 mr-1 h-10 top-0 right-0 z-50 absolute bg-indigo-500 hover:bg-gray-600 rounded-2xl flex justify-center items-center px-2">
                <button @click="this.isIdeasShown = true" class="text-xs w-full h-full text-center">Ideas</button>
              </div>
              <div v-show="this.isIdeasShown" class="w-full h-full absolute z-50 bg-gray-600">
                <button class="top-0 right-0 absolute mt-1 mr-1 w-20 h-10 rounded-2xl bg-white text-black px-2 text-xs hover:bg-indigo-500 hover:text-white" @click="this.isIdeasShown = false">Hide Ideas</button>
              </div> -->
              <div class="relative w-full h-8 bg-gray-300 rounded">
                <div id="time-selection" class="absolute top-0 h-full bg-indigo-400" :style="{ left: 0 + '%', width: 100 + '%' }"></div>
              </div>
              <!-- Линии для времени -->
              <div class="absolute w-full h-full flex items-center">
                <div class="relative w-full h-full flex items-start overflow-y-hidden">
                  <div id="mainChart"  class="w-full h-full pb-24">
                    <canvas v-if="chartVisible" ref="chartCanvas"></canvas>
                  </div>
              
                  <div v-if="!this.isIdeasShown" v-for="(line, index) in movableLines" :key="index" @drop="drop($event, index)" @dragover="allowDrop($event)">
                    <div @click="clearCategory(index, $event)" @mouseover="this.activeIndex = index" @mouseleave="this.activeIndex = null" class="absolute h-full flex items-center justify-center" 
                         :style="{ left: line.start + '%', width: (line.end - line.start) + '%', borderColor: line.color, backgroundColor: line.color }">
                      <!-- <img class="w-36 h-40 opacity-100 rounded-3xl" v-if="line.game" :src="line.game.box_art_url"> -->
                       <p class="text-gray-700 flex flex-col w-full items-center justify-center">
                     
                        <span v-if="(line.end - line.start) > 5" class="text-gray-700 font-bold cursor-none text-xs">{{ index + 1 }}</span>
                        <span class="text-gray-700" v-if="line.game">{{ line.game.name}}</span>
                        <span v-show="this.activeIndex === index && this.isSettingAvailable && line.game" class="text-gray-600  text-center text-xs">alt + click to clear the category</span>
                        <div   v-if="this.activeIndex === index && this.isSettingAvailable" class="absolute w-full h-full z-50 bg-white/30">
                         
                            <!-- <div class="absolute w-36 h-16 black top-0 right-0 bg-black"></div> -->
                          
                        </div>
                       </p>
                   
                      <!-- Если ширина зоны больше 5%, то показываем текст, иначе скрываем -->
                      
                      <span v-if="(line.end - line.start) > 9" class="absolute top-0 text-xs text-gray-700 mt-4">
                        {{ formatTimeApplied(line.start, startTimeApplied, endTimeApplied) }} - {{ formatTimeApplied(line.end, startTimeApplied, endTimeApplied) }}
                      </span>
                    </div>
                    <div class="absolute h-full border bg-slate-500 cursor-ew-resize z-50" 
                         :style="{ left: line.start + '%', borderColor: line.color }" 
                         @mousedown="startDrag($event, 'movableStart', index)">
                    </div>
                    <div class="absolute h-full border bg-slate-500 cursor-ew-resize z-50" 
                         :style="{ left: line.end + '%', borderColor: line.color }" 
                         @mousedown="startDrag($event, 'movableEnd', index)">
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="this.tip2" class="w-full h-full absolute flex justify-end items-center pr-6 z-50">
                <div class="w-56 h-36 flex flex-col justify-center px-4 items-center bg-indigo-500 rounded-3xl space-y-2">
                  <p class="w-full text-center">Click the button and expand the toolbar</p>
                  <button @click="this.tip2 = false, this.tip3 = true" class="text-black w-24 h-10 bg-white rounded-3xl shadow-lg hover:bg-black hover:text-white">OK</button>
                </div>
              </div>
              <div v-show="this.tip3" class="w-full h-full absolute flex justify-start items-end pl-4 pb-4 z-50">
                <div class="w-56 h-36 flex flex-col justify-center px-4 items-center bg-black rounded-3xl space-y-2">
                  <p class="w-full text-center"><span class="underline">Add Line</span> on the chart to start analysing and <span class="underline" >Switch Mode</span> to see viewers</p>
                  <button @click="this.tip3 = false" class="text-black w-24 h-10 bg-white rounded-3xl shadow-lg hover:bg-gray-700 hover:text-white">OK</button>
                </div>
              </div>
            </div>
          </div>

            <div id="hideMenuButton" class="w-8 h-full shrink-0 hidden md:flex justify-center items-center">
              <button v-if="this.applied" @click="hideMenu">
                      <div id="sidebarContainer" class="flex h-6 w-6 flex-col items-center opacity-30 hover:opacity-70">
                          <div id="sidebarUp" class="h-3 w-1 bg-black rounded-full bg-token-text-primary" style="transform: translateY(0.15rem) rotate(0deg) translateZ(0px);">
                          </div>
                          <div id="sidebarDown" class="h-3 w-1 bg-black rounded-full bg-token-text-primary" style="transform: translateY(-0.15rem) rotate(0deg) translateZ(0px);">
                          </div>
                      </div>  
              </button>
            </div>
            <div v-show="!linesMenu && !isMenuHidden" id="mainMenu" class="hidden bg-white w-48 h-full shrink-0 md:flex md:flex-col justify-start items-center ">
              <div class="flex h-10 w-full px-2">
                <label for="game-search"></label>
                <input type="text" class="text-black w-full text-start border-2 border-black/50 rounded-r-2xl px-2" id="game-search" placeholder="Search a category" v-model="currentGameSearch">
              </div>
              <div class="w-full h-1/2 px-2 flex flex-col overflow-y-auto border-b-2 space-y-1 ">
                <span v-if="this.currentGameSearch" v-for="game in searchedGame" class="text-black hover:text-indigo-500" draggable="true" @dragstart="dragStart($event, game)">{{ game.name }}</span>
                <p v-else class="text-gray-600  text-center w-full h-full flex justify-center items-center text-xs">Search a category,  drag it to the area between the lines</p>
              </div>
              <div class="text-black relative flex flex-col h-1/2 w-full space-y-2 items-start text-start pt-2 pl-2">
                <div class=" h-10 w-full  flex flex-col items-start">
                  <label for="tags"></label>
                  <input class="text-black w-full h-full text-start border-2 border-black/50 rounded-2xl px-2" type="text" id="tags" placeholder="Adds stream tags" v-model="addedTag" @keyup.enter="addTag">
                </div>
                <p class="py-1 w-full h-24 grid grid-cols-2 gap-2 overflow-y-auto px-2 items-start border-indigo-500  border-2">
                  <span @click="removeTag(index)" class="border rounded-2xl flex justify-center items-center text-center w-auto h-8 px-2 bg-indigo-500 text-white "  v-for="(tag, index) in currentTagArray">{{tag}}</span>
                </p>
                <p class="text-gray-600 text-center flex w-full justify-center text-xs">Click on a tag to remove</p>
                <p class="flex flex-col absolute bottom-0">
                  <span class="font-semibold">{{days[index]}}</span>
                  <p><span class="font-semibold">Start:</span> {{ formatTime(startTimePercent) }}</p>
                  <p><span class="font-semibold">End:</span> {{ formatTime(endTimePercent) }}</p>
                </p>
              </div>
            </div>
            <div v-show="linesMenu && !isMenuHidden" id="linesMenu" class="hidden bg-white w-48 h-full shrink-0 md:flex md:flex-col text-black">
              <div v-if="this.movableLines.length != 0"  class="w-full h-full flex flex-col overflow-y-auto space-y-3 justify-start">
                <div class="w-full h-10 border rounded-3xl flex justify-between items-center px-3 text-xs shadow-md" v-for="(line, index) in movableLines" :key="index" >
                  <p class="flex space-x-2">
                  <span>{{index + 1}}</span>
                  <span class="text-indigo-500 font-semibold" v-if="this.activeIndex === index">{{ formatTimeApplied(line.start, startTimeApplied, endTimeApplied) }} - {{ formatTimeApplied(line.end, startTimeApplied, endTimeApplied) }}</span>
                  <span v-else>{{ formatTimeApplied(line.start, startTimeApplied, endTimeApplied) }} - {{ formatTimeApplied(line.end, startTimeApplied, endTimeApplied) }}</span>
                </p>
                  <img @click="this.movableLines.splice(index, 1)" class='w-6 h-6 hover:scale-105 transition-all duration-100' src="/src/assets/images/trash-undo-svgrepo-com.svg">

                </div>
                
              </div>
              <div v-else class="text-gray-600  w-full h-full flex justify-center items-center text-xs">No lines on the chart</div>

            </div>

         </div>
          
        
        <div class="w-full h-16 px-6 mt-4 md:mt-0 ">
          <div class="w-full h-full flex  ">
            <div id="buttonsSpace" class="flex-1 overflow-x-auto flex justify-between">
            <div v-if="this.applied === true" class="flex space-x-10">
          
            <button v-if="this.applied === true" @click="addMovableLine" class="hover:bg-gray-600  bg-indigo-400 text-white w-24 h-14 px-4 py-2 rounded-3xl text-sm text-center">Add Line</button>
            <button v-if="this.applied === true" class="hover:bg-gray-600 bg-indigo-400 text-white w-28 h-14 px-2 py-2 rounded-3xl text-sm text-center" @click="changeMode">Switch mode</button>

          </div>
          <button v-if="this.applied === false" @click="apply" class="bg-black hover:bg-indigo-400 text-white w-24 h-14 px-4 py-2 rounded-3xl text-center text-sm">Apply</button>
          
          <div v-if="this.applied === false" class="text-black justify-between text-center w-64 text-xs h-14  items-center flex">
            <p><span class="font-semibold">Start:</span> {{ formatTime(startTimePercent) }}</p>
            <div class="w-40 h-14 text-white flex items-center shadow-md bg-black rounded-3xl px-4 justify-between">
              <span class="text-xs">{{ days[index] }}</span>
              <button class="text-xs  hover:text-indigo-400" @click="nextDay">next</button>
            </div>
            <p><span class="font-semibold">End:</span> {{ formatTime(endTimePercent) }}</p>
          </div>
          <button @click="reset" class="bg-black w-24 h-14  hover:bg-indigo-400 text-white px-4 py-2 rounded-3xl text-center text-sm">Reset</button>
            </div>
            <div id="extraSpace" class="w-56 hidden md:flex  h-full"></div>
        </div>
      </div>
        

      
      <div class="flex flex-col md:hidden w-full h-[32rem] mt-4 space-y-4">
        <div class="flex h-10 w-full">
          <label for="game-search"></label>
          <input type="text" class="text-black w-full text-start border-2 border-black/50 rounded-r-2xl px-2" id="game-search" placeholder="Search a category" v-model="currentGameSearch">
        </div>
        <div class="w-full h-52 flex flex-col overflow-y-auto border-b-2 border-gray-700">
          <span v-for="game in searchedGame" class="text-black" draggable="true" @dragstart="dragStart($event, game)">{{ game.name }}</span>
        </div>
        <div class="text-black relative flex flex-col h-[15rem]  w-full space-y-2 items-start text-start pt-2 pl-2">
          <div class=" h-10 w-full  flex flex-col items-start">
            <label for="tags"></label>
            <input class="text-black w-full h-full text-start border-2 border-black/50 rounded-2xl px-2" type="text" id="tags" placeholder="Add stream tags" v-model="addedTag" @keyup.enter="addTag">
           
          </div>
          <p class="w-full h-24 grid grid-cols-2 gap-2 overflow-y-auto px-2 items-start border-indigo-500  border-2">
            <span @click="this.currentTagArray.splice(index, 1)" class="border rounded-2xl flex justify-center items-center text-center w-auto h-8 px-2 bg-indigo-500 text-white "  v-for="(tag, index) in currentTagArray">{{tag}}</span>
          </p>
          <p class="flex flex-col absolute bottom-0">
            <span class="font-semibold">{{ days[index] }}</span>
            <p><span class="font-semibold">Start:</span> {{ formatTime(startTimePercent) }}</p>
            <p><span class="font-semibold">End:</span> {{ formatTime(endTimePercent) }}</p>
           
          </p>
        </div>
      </div>
      
     
    
    </div>
    
    </main>

    <footer class="container mx-auto  w-full h-24 flex text-black items-center justify-between font-mono space-x-2 opacity-80 mt-10 md:px-0 px-10">
      <p class="space-x-2">
      <span class="font-sans">Voshe Company ©</span>
      <span>2024</span>
      </p>
      <span>evdevosh@gmail.com</span>
    </footer>
  </div>
</template>

<script>
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import top_games from '/src/assets/top_games.json';
import SignUp from '/src/SignUp.vue'
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export default {
  name: 'ShaderBackground',
  components: {
    SignUp
  },
  data() {
    return {
      gl: null,
      program: null,
      startTime: Date.now(),
      animationId: null,
      startTimePercent: 0,
      endTimePercent: 100,
      selectionWidthPercent: 100,
      dragging: false,
      dragType: '',
      initialOffset: 0,
      applied: false,
      movableLinePercent: 0,
      startTimeApplied: 0,
      endTimeApplied: 100,
      selectionWidthApplied: 100,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      index: 0,
      games: top_games,
      currentGameSearch: '',
      movableLines: [],
      chartVisible: false,
      chartInstance: null,
      timeLabels: [],
      appliedTimeLabels: [],
      addedTag: '',
      currentTagArray: [],
      currentPointValue: null,
      editMode: true,
      tooltipX: 0, // Координаты для отображения элемента
      tooltipY: 0,
      isMenuHidden: true,
      isSettingAvailable: true,
      activeIndex: null,
      linesMenu: false,
      tip1: true,
      tip2: true,
      tip3: false,
      isIdeasShown: false,
    };
  },
  mounted() {
    this.hideMenuDefault();
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.stopDrag);
    this.generateTimeLabels();
    this.generateAppliedTimeLabels();
    window.addEventListener('resize', this.generateTimeLabels);
    window.addEventListener('resize', this.generateAppliedTimeLabels);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.stopDrag);
    window.removeEventListener('resize', this.generateTimeLabels);
    window.removeEventListener('resize', this.generateAppliedTimeLabels);

  },
  methods: {
    removeTag(index){
      this.currentTagArray.splice(index, 1);
      this.checkGameInLines();
    },
    hideMenuDefault(){
      const hideMenuButton = document.getElementById('hideMenuButton')
      const buttonsSpace = document.getElementById('buttonsSpace');
      const extraSpace = document.getElementById('extraSpace');
      const refTimeContainer = document.getElementById('refTimeContainer');
      const menu = document.getElementById('mainMenu');

      if(this.applied === false){
        this.isMenuHidden = true;
        menu.classList.remove('md:flex');
        menu.classList.add('md:hidden');
        // refTimeContainer.classList.remove('w-[60rem]');
        // refTimeContainer.classList.add('w-[68rem]');

        extraSpace.classList.remove('w-56');
        extraSpace.classList.add('w-8');

        // buttonsSpace.classList.remove('w-[60rem]');
        // buttonsSpace.classList.add('w-full');
        // buttonsSpace.classList.add('pr-12');
        // buttonsSpace.classList.add('pl-6');

        hideMenuButton.classList.remove('justify-end');
        hideMenuButton.classList.add('justify-center');
        
    }
    else{
    
        menu.classList.add('md:flex');
        menu.classList.remove('md:hidden');
        // refTimeContainer.classList.add('w-[60rem]');
        // refTimeContainer.classList.remove('w-[68rem]');


        extraSpace.classList.add('w-56');
        extraSpace.classList.remove('w-8');

        // buttonsSpace.classList.add('w-[60rem]');
        // buttonsSpace.classList.remove('w-full');
        // buttonsSpace.classList.remove('pr-12');
        // buttonsSpace.classList.remove('pl-6');

        hideMenuButton.classList.add('justify-end');
        hideMenuButton.classList.remove('justify-center');

       
    }
    },
    clearCategory(index, event){
      if(event.altKey) this.movableLines[index].game = null;
      
    },
    hideMenu(){

      const hideMenuButton = document.getElementById('hideMenuButton')
      const buttonsSpace = document.getElementById('buttonsSpace');
      const extraSpace = document.getElementById('extraSpace');
      const refTimeContainer = document.getElementById('refTimeContainer');
      const menu = document.getElementById('mainMenu');
      if(this.isMenuHidden){
        if(this.tip2) {
          this.tip2 = false;
          this.tip3 = true;
        }
        menu.classList.add('md:flex');
        menu.classList.remove('md:hidden');
        // refTimeContainer.classList.add('w-[60rem]');
        // refTimeContainer.classList.remove('w-[68rem]');


        extraSpace.classList.add('w-56');
        extraSpace.classList.remove('w-8');

        // buttonsSpace.classList.add('w-[60rem]');
        // buttonsSpace.classList.remove('w-full');
        // buttonsSpace.classList.remove('pr-12');
        // buttonsSpace.classList.remove('pl-6');

        hideMenuButton.classList.add('justify-end');
        hideMenuButton.classList.remove('justify-center');

        this.isMenuHidden = !this.isMenuHidden;
      }
      else{
        
        menu.classList.remove('md:flex');
        menu.classList.add('md:hidden');
        // refTimeContainer.classList.remove('w-[60rem]');
        // refTimeContainer.classList.add('w-[68rem]');

        extraSpace.classList.remove('w-56');
        extraSpace.classList.add('w-8');

        // buttonsSpace.classList.remove('w-[60rem]');
        // buttonsSpace.classList.add('w-full');
        // buttonsSpace.classList.add('pr-12');
        // buttonsSpace.classList.add('pl-6');

        hideMenuButton.classList.remove('justify-end');
        hideMenuButton.classList.add('justify-center');
        this.isMenuHidden = !this.isMenuHidden;
      }
      
    },
    changeMode(){
      const chart = document.getElementById('mainChart');
      if(this.editMode){
        this.editMode = !this.editMode;
      
        chart.classList.add('z-40')

      }
      else{
        this.editMode = !this.editMode;
        chart.classList.remove('z-40');
        this.currentPointValue = null;
      }
    },
    addTag(){
      if(this.addedTag){
      this.currentTagArray.push(this.addedTag);
      this.checkGameInLines();
      this.addedTag = '';
      }
    },
    generateTimeLabels() {
      const width = window.innerWidth;
      let interval;

      if (width > 1400) {
        interval = 1; // интервал 1 час
      } else if (width > 1300){
        interval = 2;
      }
      else if (width > 800) {
        interval = 4; // интервал 2 часа
      } else {
        interval = 6; // интервал 4 часа
      }

      this.timeLabels = [];
      for (let i = 0; i <= 24; i += interval) {
        const time = i.toString().padStart(2, '0') + ':00';
        this.timeLabels.push(time);
      }
    },
    generateAppliedTimeLabels() {
      const width = window.innerWidth;
      let interval;

      if (width > 1400) {
        interval = 1; // интервал 1 час
      } else if (width > 1300){
        interval = 2;
      }
      else if (width > 800) {
        interval = 4; // интервал 2 часа
      } else {
        interval = 6; // интервал 4 часа
      }

      const startHour = Math.floor((this.startTimeApplied / 100) * 24);
      const endHour = Math.floor((this.endTimeApplied / 100) * 24);

      this.appliedTimeLabels = [];

      // Генерируем временные метки внутри диапазона
      for (let i = startHour + interval; i < endHour; i += interval) {
        const time = i.toString().padStart(2, '0') + ':00';
        this.appliedTimeLabels.push(time);
      }
    },
    formatTime(percent) {
      const totalMinutes = (percent / 100) * 1440; // 1440 минут в сутках
      const hours = Math.floor(totalMinutes / 60);
      const minutes = Math.floor(totalMinutes % 60);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    },
    onWindowResize() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
      this.gl.uniform2f(this.gl.getUniformLocation(this.program, 'iResolution'), window.innerWidth, window.innerHeight);
    },
    startDrag(event, type, index = null) {
      this.dragging = true;
      this.dragType = type;
      this.dragIndex = index;
      const rect = this.$refs.timeContainer.getBoundingClientRect();
      const linePosition = type === 'start' ? this.startTimePercent : type === 'end' ? this.endTimePercent : this.movableLinePercent;
      if (type === 'movableStart' || type === 'movableEnd') {
        const line = this.movableLines[index];
        this.initialOffset = event.clientX - rect.left - ((type === 'movableStart' ? line.start : line.end) / 100 * rect.width);
      } else {
        this.initialOffset = event.clientX - rect.left - (linePosition / 100 * rect.width);
      }
      document.body.classList.add('no-select');
      this.isSettingAvailable = false;

    },
    checkGameInLines() {
      // Проверяем, есть ли игра между линиями
      const hasGameInLines = this.movableLines.some(line => line.game !== null);
      if (hasGameInLines) {
        this.showChart(); // Если игра есть, вызываем showChart()
      }
    },
    stopDrag() {
      const movedLine = this.movableLines[this.dragIndex];
      if (movedLine && movedLine.game) {
        this.showChart(); // Обновляем график, если в перемещаемой линии есть игра
      }
      this.dragging = false;
      this.dragType = '';
      this.dragIndex = null;
      document.body.classList.remove('no-select');
      this.isSettingAvailable = true;

    ;
      
    },
    onMouseMove(event) {
      if (this.applied === false) {
        if (!this.dragging) return;

        const rect = this.$refs.timeContainer.getBoundingClientRect();
        const x = event.clientX - rect.left - this.initialOffset;
        const percent = (x / rect.width) * 100;

        // Округление до ближайшего целого часа
        const hourStep = 100 / 24;
        const roundedPercent = Math.round(percent / hourStep) * hourStep;

        if (this.dragType === 'start' && roundedPercent < this.endTimePercent) {
          this.startTimePercent = Math.max(0, roundedPercent);
          this.selectionWidthPercent = this.endTimePercent - this.startTimePercent;
        } else if (this.dragType === 'end' && roundedPercent > this.startTimePercent) {
          this.endTimePercent = Math.min(100, roundedPercent);
          this.selectionWidthPercent = this.endTimePercent - this.startTimePercent;
        } else if (this.dragType === 'movable') {
          const minPercent = this.startTimeApplied;
          const maxPercent = this.endTimeApplied;
          this.movableLinePercent = Math.min(Math.max(minPercent, roundedPercent), maxPercent);
        }
      } else {
        if (!this.dragging) return;

        const rect = this.$refs.timeContainer.getBoundingClientRect();
        const x = event.clientX - rect.left - this.initialOffset;
        const percent = (x / rect.width) * 100;

        // Задаем шаг в процентах для заданного интервала
        const stepMinutes = 5; // Шаг в минутах, можно изменить на любое другое значение
        const totalMinutesInDay = 1440;
        const stepPercent = (stepMinutes / totalMinutesInDay) * 100;
        const roundedPercent = Math.round(percent / stepPercent) * stepPercent;

        if (this.dragType === 'start' && roundedPercent < this.endTimePercent) {
          this.startTimePercent = Math.max(0, roundedPercent);
          this.selectionWidthPercent = this.endTimePercent - this.startTimePercent;
        } else if (this.dragType === 'end' && roundedPercent > this.startTimePercent) {
          this.endTimePercent = Math.min(100, roundedPercent);
          this.selectionWidthPercent = this.endTimePercent - this.startTimePercent;
        } else if (this.dragType === 'movableStart' || this.dragType === 'movableEnd') {
          const line = this.movableLines[this.dragIndex];
          const originalStart = line.start;
          const originalEnd = line.end;

          if (this.dragType === 'movableStart' && roundedPercent < line.end) {
            line.start = Math.max(0, roundedPercent);
          } else if (this.dragType === 'movableEnd' && roundedPercent > line.start) {
            line.end = Math.min(100, roundedPercent);
          }

          // Проверка пересечения с другими линиями
          if (this.checkIntersection(this.movableLines)) {
            // Вернуть линию в исходное положение, если есть пересечение
            line.start = originalStart;
            line.end = originalEnd;
          }
        } else if (this.dragType === 'movable') {
          const minPercent = this.startTimeApplied;
          const maxPercent = this.endTimeApplied;
          this.movableLinePercent = Math.min(Math.max(minPercent, roundedPercent), maxPercent);
        }
      }
    },
    addMovableLine() {
      if (this.applied) {
        const availableSlot = this.findAvailableSlot(10); // Добавим линию с длительностью 10%
        if (availableSlot) {
          const color = this.getRandomColor();
          this.movableLines.push({ start: availableSlot.start, end: availableSlot.end, color, game: null });
        } else {
          console.warn('No available slot for a new line.');
        }
      }
    },
    formatTimeApplied(percent, startPercent, endPercent, stepMinutes = 5) {
      const totalMinutesInDay = 1440; // 1440 минут в сутках

      const startMinutes = (startPercent / 100) * totalMinutesInDay;
      const endMinutes = (endPercent / 100) * totalMinutesInDay;

      const totalMinutesInInterval = endMinutes - startMinutes; // Продолжительность интервала в минутах

      // Рассчитываем количество шагов в интервале с учетом заданного шага
      const totalSteps = Math.ceil(totalMinutesInInterval / stepMinutes);
      const step = Math.round((percent / 100) * totalSteps);
      const intervalMinutes = Math.min(step * stepMinutes, totalMinutesInInterval);

      const totalMinutes = startMinutes + intervalMinutes;

      const hours = Math.floor(totalMinutes / 60);
      const minutes = Math.floor(totalMinutes % 60);

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    },
    apply() {
      this.applied = true;
      this.startTimeApplied = this.startTimePercent;
      this.endTimeApplied = this.endTimePercent;
      this.selectionWidthApplied = this.selectionWidthPercent;
      this.movableLinePercent = 0;
      this.generateAppliedTimeLabels(); // Обновляем метки после применения
    },
    reset() {
      this.applied = false;
      this.startTimePercent = 0;
      this.endTimePercent = 100;
      this.selectionWidthPercent = 100;
      this.movableLinePercent = 0;
      this.movableLines = [];
      this.index = 0;
      this.currentGameSearch = ''
      this.linesMenu = false;
      this.hideMenuDefault();
      this.tip1 = false;
      this.tip2 = false;
      this.chartVisible = false;
      this.generateTimeLabels(); // Обновляем метки после сброса
    },
    nextDay() {
      if (this.index + 1 == this.days.length) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color + '33';
    },
    findAvailableSlot(durationPercent) {
      if (this.movableLines.length === 0) {
        return { start: 0, end: durationPercent };
      }

      let previousEnd = 0;
      for (const line of this.movableLines) {
        const gap = line.start - previousEnd;
        if (gap >= durationPercent) {
          return { start: previousEnd, end: previousEnd + durationPercent };
        }
        previousEnd = line.end;
      }

      const remainingGap = 100 - previousEnd;
      if (remainingGap >= durationPercent) {
        return { start: previousEnd, end: previousEnd + durationPercent };
      }

      return null;
    },
    checkIntersection(lines) {
      lines.sort((a, b) => a.start - b.start);

      for (let i = 0; i < lines.length - 1; i++) {
        if (lines[i].end > lines[i + 1].start) {
          return true;
        }
      }

      return false;
    },
    dragStart(event, game) {
      event.dataTransfer.setData('game', JSON.stringify(game));
    },
    allowDrop(event) {
      event.preventDefault();
    },
    drop(event, index) {
      event.preventDefault();
      const game = JSON.parse(event.dataTransfer.getData('game'));
      this.movableLines[index].game = game;
      this.checkGameInLines();
    },
    showChart() {
      if (this.chartVisible) {
        // Скрываем график
        this.chartVisible = false;

        // Обновляем график после небольшой задержки, чтобы дать времени скрыться
        setTimeout(() => {
          this.updateChart();
        }, 50); // Задержка в 50 миллисекунд (можно настроить)
      } else {
        // Если график не виден, просто обновляем его
        this.updateChart();
      }
},

 updateChart() {
    this.chartVisible = true;

    this.$nextTick(() => {
      const ctx = this.$refs.chartCanvas.getContext('2d');
      const data = this.generateChartData();

      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'My Dataset',
            data: data.values,
            borderColor: 'blue',
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 5,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false, // Убираем ось X
            },
            y: {
              beginAtZero: true,
              min: 0,
              max: 500,
            },
          },
          plugins: {
            tooltip: {
              enabled: false,
            }
          },
          onHover: (event, elements) => {
            if (elements.length) {
              const chart = elements[0].element;
              const index = chart.index;
              const value = chart.$context.raw;
              console.log(`Index: ${index}, Value: ${value}`);
            }
          }
        },
      });

      // Добавляем обработчик события mousemove
      this.$refs.chartCanvas.addEventListener('mousemove', this.onCanvasMouseMove);
    });
  },

  // Метод для обработки движения мыши по canvas
  onCanvasMouseMove(event) {
    if (!this.editMode) {
      const rect = this.$refs.chartCanvas.getBoundingClientRect();
      const x = event.clientX - rect.left; // Позиция курсора на оси X
      const chart = this.chartInstance;
      const xScale = chart.scales['x']; // Масштаб оси X
      const index = Math.round(xScale.getValueForPixel(x)); // Определение индекса на основе позиции курсора

      if (index >= 0 && index < chart.data.labels.length) {
        const value = chart.data.datasets[0].data[index];
        this.currentPointValue = value; // Обновление значения
                  // Обновляем координаты для элемента
          this.tooltipX = event.clientX + 10; // 10px отступ вправо от курсора
          this.tooltipY = event.clientY + 10; // 10px отступ вниз от курсора
      }
    }
  },








generateChartData() {
  const labels = [];
  const values = [];
  const totalPoints = 100;

  // Генерируем временные метки
  for (let i = 0; i <= totalPoints; i++) {
    labels.push(i.toString());
  }

  // Генерация основной формы графика с подъемом и спадом
  const startValue = 20 + Math.random() * 10; // Начальное значение от 20 до 30
  let currentValue = startValue;

  for (let i = 0; i <= totalPoints; i++) {
    const progress = i / totalPoints; // Прогресс от 0 до 1 по всей длине графика

    // Основная кривая: подъем в первой четверти, пик в середине, спад в последней четверти
    let baseValue = (150 - startValue) * Math.sin(progress * Math.PI);

    // Добавляем стартовое значение и увеличиваем среднее значение до диапазона 110-130
    baseValue += 90;

    // Плавный переход от текущего значения к базовому значению
    currentValue = currentValue + (baseValue - currentValue) * 0.1;

    // Добавляем данные
    values.push(currentValue);
  }

  // Перебираем все линии и генерируем локальные пики и впадины
  this.movableLines.forEach(line => {
    const startIndex = Math.round((line.start / 100) * totalPoints);
    const endIndex = Math.round((line.end / 100) * totalPoints);
    const dipIndex = Math.floor((startIndex + endIndex) / 2); // Точка для локального пика/впадины

    // Добавляем локальные пики и впадины
    for (let i = startIndex; i <= endIndex; i++) {
      const localProgress = (i - startIndex) / (endIndex - startIndex);

      // Генерируем впадину или пик в середине интервала
      const fluctuation = Math.sin(localProgress * Math.PI) * 40 * (Math.random() * 0.4 + 0.8);
      values[i] -= fluctuation;
    }
  });

  // Сглаживание данных для плавных переходов
  for (let i = 1; i < totalPoints; i++) {
    values[i] = (values[i - 1] + values[i] + values[i + 1]) / 3;
  }

  // Обеспечение плавного завершения графика на 50
  for (let i = Math.floor(totalPoints * 0.75); i <= totalPoints; i++) {
    const progress = (i - totalPoints * 0.75) / (totalPoints * 0.25);
    values[i] = 50 + (values[i] - 50) * (1 - progress);
  }

  return { labels, values };
}

,

// Метод для определения фактора дня недели
getDayFactor(day) {
  const factors = {
    'Monday': 1,
    'Tuesday': 1.1,
    'Wednesday': 1.2,
    'Thursday': 1.3,
    'Friday': 1.4,
    'Saturday': 1.5,
    'Sunday': 1.6
  };

  return factors[day] || 1;
}



  },
  computed: {
    searchedGame() {
      if (!this.currentGameSearch) {
        return [];
      }
      const searchLowerCase = this.currentGameSearch.toLowerCase();
      return this.games.filter(game => game.name.toLowerCase().includes(searchLowerCase));
    },
  },
};
</script>

<style>
/* Добавьте необходимые стили здесь */
.no-select {
  user-select: none;
}
</style>
