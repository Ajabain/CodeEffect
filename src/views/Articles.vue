<template>
    <div class="bg-[#015C89] pt-[60px] h-screen">
        <h1 class="text-[70px] font-bold text-[#CCCCCC] text-center">Header Text</h1>
        <p class="text-[25px] font-normal text-[#CCCCCC] text-center mb-[50px]">Lorem ipsim pellentesque volutpat Alquet Ultrucies</p>
        <div class="px-[50px]  flex justify-between items-center pb-[30px]">
            <ArticalCard/>
            <ArticalCard/>
            <ArticalCard/>
        </div>
    </div>

  </template>
  
  <script setup>
  import ArticalCard from '../components/ArticalCard.vue';
  </script>
  
  <style scoped>
  
  </style>
  