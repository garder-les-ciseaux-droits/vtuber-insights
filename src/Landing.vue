<template>
    <div class="w-full h-full overflow-y-auto">
        <header class="container mx-auto w-full md:h-[48rem] flex flex-col space-y-10 ">
          <nav class="container  mx-auto rounded-b-3xl w-full h-20 bg-white transition-all duration-200 flex justify-between items-center text-gray-800 font-serif px-6">
            <div class="w-24 bg- h-12 flex justify-center items-center ">
              <img class="w-16 h-16" src="/src/assets/images/logogray.png">
            </div>
            <div class="flex-1 flex md:flex md:space-x-12 justify-center md:w-1/3 h-full items-center text-xs md:text-sm drop-shadow-2xl">
              <a class="hidden  md:flex cursor-pointer">HOME</a>
              <router-link class="hidden md:flex" to="/analysis">ANALYTICS</router-link>
              <router-link class="hidden md:flex" to="/info">INFORMATION</router-link>
              
            </div>
            <div class="flex justify-end items-center w-24 h-12">
              
              <button class="bg-black hidden md:flex justify-center items-center hover:bg-white rounded-2xl w-24 h-12 text-white hover:text-black transition-all duration-150">
                <a>Sign up</a>
              </button>
              <!-- <SignUp class="hidden md:flex"/>
              <svg  class="w-10 h-10 flex md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> -->
            </div>
            
          </nav>
          <nav id="navig" class="container mx-auto hidden  rounded-b-3xl w-full h-20 bg-white transition-all duration-200  justify-between items-center text-gray-800 font-serif px-6">
            <div class="w-24 bg- h-12 flex justify-center items-center ">
              <img class="w-16 h-16" src="/src/assets/images/logogray.png">
            </div>
            <div class="flex-1 flex md:flex md:space-x-12 justify-center md:w-1/3 h-full items-center text-xs md:text-sm drop-shadow-2xl">
              <a class="hidden  md:flex cursor-pointer">HOME</a>
              <router-link class="hidden md:flex" to="/analysis">ANALYTICS</router-link>
              <router-link class="hidden md:flex" to="/info">INFORMATION</router-link>
              
            </div>
            <div class="flex justify-end items-center w-24 h-12">
              <SignUp class="hidden md:flex"/>
              <svg  class="w-10 h-10 flex md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            
          </nav>
          <div class="relative container md:h-[36rem] mx-auto rounded-b-3xl md:shadow-xl text-gray-800 font-serif px-24 md:drop-shadow-2xl flex flex-col items-start py-16 space-y-10">
            <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full md:rounded-3xl"></canvas>
            <div class="relative z-10 space-y-10 w-full h-full flex flex-col justify-center items-start">
              <h1 class="text-4xl drop-shadow-2xl border-b border-gray-800 ">We help VTubers grow faster</h1>
              <p class="text-xl text-wrap max-w-[80ch] ">
                Welcome to VTuber Insights, a platform that analyzes streamers' data to predict viewership based on overall trends and your specific content. Plan your stream by selecting categories, games, and tags, and see the likely outcomes. Boost your stream's success with accurate predictions and insights.
              </p>
             
              <button class="w-44 h-14 text-sm bg-white hover:bg-black hover:text-white duration-150 transition-all text-gray-800 rounded-full shadow-xl">
                <router-link class="flex justify-center items-center" to="/analysis">
                    Try our platform
                </router-link>
                </button>
            </div>
  
          </div>
        </header>
        
        <div class="w-full h-auto container mx-auto flex flex-col  pt-12 justify-start space-y-24 md:px-0 px-10">
          
          <div class="grid grid-cols-1 md:flex md:space-x-6 space-y-6 md:space-y-0 bg">
            <details open class="space-y-2">
              <summary class="text-xl">Statistics</summary>
              <p class="text-lg">We collect relevant information automatically and manually and provide real-time information to Vtubers.
              </p>
            </details>
            <details open class="space-y-2">
              <summary class="text-xl">Analytics</summary>
              <p class="text-lg">
                We process your stream stats and predict viewer and subscriber growth based on your preferred content and  trends.
              </p>
            </details>
            <details open class="space-y-2">
              <summary class="text-xl">Configure your stream</summary>
              <p class="text-lg">
                Pick your time, categories, tags and learn how you can increase your viewership!
              </p>
            </details>
          </div>
          <div class="bg-gray-400 w-full h-80 md:h-64 text-white flex flex-col items-center justify-center space-y-6 md:space-y-6 px-6 rounded-xl shadow-2xl">
            <p class="text-2xl font-mono text-center">Create a perfect stream. Grow your audience faster.</p>
            <button class="w-44 h-14 text-sm bg-white hover:bg-black hover:text-white duration-150 transition-all text-gray-800 rounded-full shadow-xl">
                <router-link class="flex justify-center items-center" to="/analysis">
                    Try our platform
                </router-link>
            </button>
          </div>
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
  
  <script>
 

  import SignUp from '/src/SignUp.vue'

    export default {
      components: {
        SignUp
      },
      name: 'ShaderBackground',
      data() {
        return {
          gl: null,
          program: null,
          startTime: Date.now(),
          animationId: null,
        };
      },
      mounted() {
        this.fixedNavigation();
        this.initWebGL();
        this.initShader();
        this.animate();
        window.addEventListener('resize', this.onWindowResize);


        
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.onWindowResize);
        if (this.animationId) {
          cancelAnimationFrame(this.animationId);
        }
      },
      methods: {
        fixedNavigation(){
          window.addEventListener("scroll", (event) => {
            const navigation = document.getElementById('navig')
            if (scrollY > 250) {
              

             navigation.classList.remove('hidden')
             navigation.classList.add('fixed')
             navigation.classList.add('top-0')
             navigation.classList.add('flex')
             navigation.classList.add('z-50')
             navigation.classList.add('slide-down')
    
            }
            else{
              
              navigation.classList.add('hidden')
             
              navigation.classList.remove('fixed');
              navigation.classList.remove('top-0');
              navigation.classList.remove('z-50');
            }
          });
        },
        initWebGL() {
          const canvas = this.$refs.canvas;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          this.gl = canvas.getContext('webgl');
          if (!this.gl) {
            console.error('Unable to initialize WebGL. Your browser may not support it.');
          }
        },
        initShader() {
          const vertexShaderSource = `
            attribute vec4 a_position;
            void main() {
              gl_Position = a_position;
            }
          `;
    
          const fragmentShaderSource = `
            precision mediump float;
            uniform float iTime;
            uniform vec2 iResolution;
            void mainImage(out vec4 fragColor, vec2 fragCoord) {
              float mr = min(iResolution.x, iResolution.y);
              vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;
    
              float d = -iTime * 0.5;
              float a = 0.0;
              for (float i = 0.0; i < 8.0; ++i) {
                  a += cos(i - d - a * uv.x);
                  d += sin(uv.y * i + a);
              }
              d += iTime * 0.5;
              vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
              col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);
              fragColor = vec4(col, 1);
            }
            
            void main() {
              mainImage(gl_FragColor, gl_FragCoord.xy);
            }
          `;
    
          const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource);
          const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
    
          this.program = this.createProgram(vertexShader, fragmentShader);
          this.gl.useProgram(this.program);
    
          const positionLocation = this.gl.getAttribLocation(this.program, 'a_position');
          const buffer = this.gl.createBuffer();
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
          this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            1, 1,
          ]), this.gl.STATIC_DRAW);
          this.gl.enableVertexAttribArray(positionLocation);
          this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 0, 0);
    
          this.gl.uniform2f(this.gl.getUniformLocation(this.program, 'iResolution'), window.innerWidth, window.innerHeight);
        },
        createShader(type, source) {
          const shader = this.gl.createShader(type);
          this.gl.shaderSource(shader, source);
          this.gl.compileShader(shader);
          if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('An error occurred compiling the shaders:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
          }
          return shader;
        },
        createProgram(vertexShader, fragmentShader) {
          const program = this.gl.createProgram();
          this.gl.attachShader(program, vertexShader);
          this.gl.attachShader(program, fragmentShader);
          this.gl.linkProgram(program);
          if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error('Unable to initialize the shader program:', this.gl.getProgramInfoLog(program));
            return null;
          }
          return program;
        },
        animate() {
          this.animationId = requestAnimationFrame(this.animate);
          this.render();
        },
        render() {
          const time = (Date.now() - this.startTime) * 0.001;
          this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'iTime'), time);
          this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
        },
        onWindowResize() {
          const canvas = this.$refs.canvas;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
          this.gl.uniform2f(this.gl.getUniformLocation(this.program, 'iResolution'), window.innerWidth, window.innerHeight);
        },
      }
  
  }
  </script>
  
  
  <style scoped>
  .slide-down {

    transform: translateY(-100%); /* начальное смещение вверх */
    animation: slideDown 1s ease-out forwards; /* запускаем анимацию */
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-100%); /* начальное смещение вверх */
    }
    to {
      transform: translateY(-50%); /* конечная позиция на месте */
    }
  }


</style>