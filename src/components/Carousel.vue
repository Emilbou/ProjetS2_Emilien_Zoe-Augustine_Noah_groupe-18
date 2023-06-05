<template>
  <div class="carrousel w-full">
    <div class="relative w-full">
      <transition-group name="carrousel-slide" tag="div" class="flex w-full">
        <div v-for="(image, index) in images" :key="index"
          :class="{ 'hidden': index !== activeIndex, 'block': index === activeIndex }">
          <img :src="image" alt="Slide" class="w-full h-auto">
        </div>
      </transition-group>

      <div class="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
        <span v-for="(image, index) in images" :key="index"
          :class="{ 'carrousel-indicator-active': index === activeIndex }" @click="goToSlide(index)"
          class="w-3 h-1 bg-gray-500 rounded-full mx-1 cursor-pointer transition-colors duration-300"></span>
      </div>
    </div>
  </div></template>


<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  setup() {
    const images = ref<string[]>([
      'https://picsum.photos/201/300',
      'https://picsum.photos/202/300',
      'https://picsum.photos/200/300',
    ]);
    const activeIndex = ref<number>(0);
    let interval: number;

    onMounted(() => {
      startCarousel();
    });

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    const startCarousel = () => {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    const nextSlide = () => {
      activeIndex.value = (activeIndex.value + 1) % images.value.length;
    };

    const goToSlide = (index: number) => {
      activeIndex.value = index;
      clearInterval(interval);
      startCarousel();
    };

    return { images, activeIndex, goToSlide };
  },
});
</script>
