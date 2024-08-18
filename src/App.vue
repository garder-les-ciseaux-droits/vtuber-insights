<template>
  <router-view></router-view>


</template>

<script setup>

</script>

<style>
/* Для Chrome, Edge и Safari */
::-webkit-scrollbar {
  width: 8px; /* Ширина вертикального скроллбара */
  height: 8px; /* Высота горизонтального скроллбара */
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* Цвет фона трека скроллбара */
}

::-webkit-scrollbar-thumb {
  background-color: #535353; /* Цвет бегунка скроллбара */
  border-radius: 10px; /* Скругление углов бегунка */
  border: 2px solid #f1f1f1; /* Отступы между треком и бегунком */
}

/* Для Firefox */
* {
  scrollbar-width: thin; /* Делаем скроллбар тонким */
  scrollbar-color: #535353 #f1f1f1; /* Цвет бегунка и трека скроллбара */
}

</style>