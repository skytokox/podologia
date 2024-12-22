<script setup>
import { ref } from 'vue'
import { Icon } from "@iconify/vue";
const isOpened = ref(false)



</script>

<template>
    <button @click="isOpened = !isOpened" aria-label="modal menu">
        <Icon class="text-h4 lg:hidden mr-4" v-if="!isOpened" icon="mdi:hamburger-menu"  />
        <Icon class="text-h4 lg:hidden mr-4" v-else icon="mdi:close"  />
    </button>

    <div class="absolute w-full h-screen bg-white top-24 z-30 border-t-[1px] border-gray border-opacity-30 animate-slide"
        v-if="isOpened">
        <div class="w-full flex h-12 items-center justify-center border-b-[1px] border-opacity-30 border-gray">
            <p class="text-h6 pl-2"><a @click="isOpened = !isOpened" href="/#gallery">Galeria</a></p>
        </div>
        <div class="w-full flex h-12 items-center justify-center border-b-[1px] border-opacity-30 border-gray">
            <p class="text-h6 pl-2"><a @click="isOpened = !isOpened" href="/#tiles">Oferta</a></p>
        </div>
        <div class="w-full flex h-12 items-center justify-center border-b-[1px] border-opacity-30 border-gray">
            <p class="text-h6 pl-2"><a @click="isOpened = !isOpened" href="/#about">O nas</a></p>
        </div>
        <div class="w-full flex h-12 items-center justify-center border-b-[1px] border-opacity-30 border-gray">
            <p class="text-h6 pl-2"><a @click="isOpened = !isOpened" href="/#contact">Kontakt</a></p>
        </div>
    </div>

</template>
