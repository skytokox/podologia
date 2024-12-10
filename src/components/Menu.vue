<script setup>
import { onMounted, ref, watch } from 'vue' 
const isOpened = ref(false)



watch(isOpened, () => {
    console.log(isOpened.value)
})

</script>

<template>
    <button @click="isOpened = !isOpened" aria-label="modal menu">
        <slot></slot>
    </button>

    <div class="absolute w-full h-fit bg-white top-24 z-30 border-t-[1px] border-gray" v-if="isOpened">
        <div class="w-full flex h-12 items-end border-b-[1px] border-gray">
            <p class="text-p pb-1"><a @click="isOpened = !isOpened" href="/#tiles">Oferta</a></p>
        </div>
        <div class="w-full flex h-12 items-end border-b-[1px] border-gray">
            <p class="text-p pb-1"><a @click="isOpened = !isOpened" href="/">Galeria</a></p>
        </div>
        <div class="w-full flex h-12 items-end border-b-[1px] border-gray">
            <p class="text-p pb-1"><a @click="isOpened = !isOpened" href="/#about">O nas</a></p>
        </div>
        <div class="w-full flex h-12 items-end border-b-[1px] border-gray">
            <p class="text-p pb-1"><a @click="isOpened = !isOpened" href="/#contact">Kontakt</a></p>
        </div>
    </div>

</template>
