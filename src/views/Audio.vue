<template>
    <div class="bg-[#015C89] pt-[60px] h-screen">
        <h1 class="text-[70px] font-bold text-[#CCCCCC] text-center">Header Text</h1>
        <p class="text-[25px] font-normal text-[#CCCCCC] text-center mb-[50px]">Lorem ipsim pellentesque volutpat Alquet Ultrucies</p>
        <div class="px-[50px]  flex justify-between items-center pb-[30px]">
            <AudioCard/>
            <AudioCard/>
            <AudioCard/>
        </div>
    </div>
</template>
  
<script setup>
import AudioCard from "../components/AudioCard.vue"
</script>
  
<style scoped>
  
 </style>
  