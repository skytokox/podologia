<script setup>
import { ref } from 'vue'
import { Icon } from "@iconify/vue";


</script>
<template>
    <div class="text-[#576081] bg-creamy w-full h-fit flex flex-col lg:justify-between items-center py-4 gap-4 scroll-m-24"
        id="gallery">
        <p class="text-h3 sm:text-h2 font-bold">GALERIA</p>
        <div class="w-fit h-fit grid-cols-3 gap-3 hidden md:grid">
            <div class="grid gap-3 h-fit">
                <div class="border-[12px] rounded-xl border-light-green border-opacity-60 box-border">
                    <img src="/images/img4.jpeg" class="h-auto max-w-sm" alt="skibidi" />
                </div>
                <div class="border-[12px] rounded-xl border-light-green border-opacity-60  box-border">
                    <img src="/images/img1.jpg" class="h-auto max-w-sm" alt="skibidi" />
                </div>
            </div>
            <div class="grid gap-3 h-fit">
                <div class="border-[12px] rounded-xl border-gray border-opacity-40 box-border">
                    <img src="/images/img2.jpeg" class="h-auto max-w-sm" alt="skibidi" />
                </div>
                <div class="border-[12px] rounded-xl border-gray border-opacity-40 box-border">
                    <img src="/images/zdj3.jpg" class="h-auto max-w-sm" alt="skibidi" />
                </div>
            </div>
            <div class="grid gap-3 h-fit">
                <div class="border-[12px] rounded-xl border-light-violet border-opacity-60 box-border">
                    <img src=" /images/img6.jpeg" class="h-auto max-w-sm" alt="skibidi" />
                </div>
                <div class="border-[12px] rounded-xl border-light-violet border-opacity-60 box-border">
                    <img src="/images/img3.jpg" class="h-auto max-w-sm" alt="skibidi" />
                </div>
            </div>
        </div>
        <div class="w-fit h-fit grid grid-cols-1 gap-3 md:hidden">
            <div class="grid gap-3 h-fit">
                <div class="border-[10px] rounded-xl border-gray border-opacity-40 box-border w-fit">
                    <img src="/images/img2.jpeg" class="h-auto max-w-xs" alt="skibidi" />
                </div>
                <div class="border-[10px] rounded-xl border-light-green border-opacity-60 box-border">
                    <img src="/images/zdj3.jpg" class="h-auto max-w-xs" alt="skibidi" />
                </div>
            </div>
            <div class="grid gap-3 h-fit">
                <div class="border-[10px] rounded-xl border-light-violet border-opacity-60 box-border">
                    <img src="/images/img4.jpeg" class="h-auto max-w-xs" alt="skibidi" />
                </div>
                <div class="border-[10px] rounded-xl border-gray border-opacity-40  box-border">
                    <img src="/images/img1.jpg" class="h-auto max-w-xs" alt="skibidi" />
                </div>
            </div>
            <div class="grid gap-3 h-fit">
                <div class="border-[10px] rounded-xl  border-light-green border-opacity-60 box-border">
                    <img src=" /images/img6.jpeg" class="h-auto max-w-xs" alt="skibidi" />
                </div>
                <div class="border-[10px] rounded-xl border-light-violet border-opacity-60  box-border">
                    <img src="/images/img3.jpg" class="h-auto max-w-xs" alt="skibidi" />
                </div>
            </div>
        </div>
    </div>
</template>
