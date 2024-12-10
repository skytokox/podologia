<script setup>
import { ref, shallowReactive } from 'vue';
import {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
    Img,
    Fade,
    Slide,
    Swipe,
} from 'vue-flux';
import 'vue-flux/style.css';
// import { isOpened } from './Menu.vue'
const options = shallowReactive({
    autoplay: true,
    // height: '400px',
});
const rscs = shallowReactive([
    new Img('/images/img1.jpg', 'img 1'),
    new Img('/images/img2.jpg', 'img 1'),
    new Img('/images/img3.jpg', 'img 1'),
]);

const transitions = shallowReactive([Swipe]);
</script>

<template>
    <div class="w-full h-1/3 sm:h-2/3 relative" id="gallery">
        <VueFlux :options="options" :rscs="rscs" :transitions="transitions" ref="$vueFlux" class="h-full z-20">

            <!-- <template #preloader="preloaderProps">
                <FluxPreloader v-bind="preloaderProps" />
            </template> -->
<!-- 
            <template #caption="captionProps">
                <FluxCaption v-bind="captionProps" />
            </template> -->

            <!-- <template #controls="controlsProps">
                <FluxControls v-bind="controlsProps" />
            </template> -->
<!-- 
            <template #pagination="paginationProps">
                <FluxPagination v-bind="paginationProps" />
            </template> -->

            <!-- <template #index="indexProps">
                <FluxIndex v-bind="indexProps" />
            </template> -->
        </VueFlux>
        <div class="absolute text-white w-1/2 h-1/3 top-1/3 left-8 z-20 sm:left-36 flex flex-col gap-4">
            <p class="text-h6 sm:text-h1 font-bold">GABINET <br> PODOLOGICZNY</p>
            <p class="text-p sm:text-h4">Renata Duda-Błasiak Sebastian Błasiak</p>
        </div>
    </div>
</template>
