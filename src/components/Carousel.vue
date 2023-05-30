<template>
    <div class="carrousel">
      <div class="relative">
        <transition-group name="carrousel-slide" tag="div" class="flex">
          <div v-for="(image, index) in images" :key="index" :class="{ 'carrousel-active': index === activeIndex }">
            <img :src="image" alt="Slide" class="w-full h-auto">
          </div>
        </transition-group>
  
        <div class="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
          <span v-for="(image, index) in images" :key="index" :class="{ 'carrousel-indicator-active': index === activeIndex }" @click="goToSlide(index)" class="w-3 h-1 bg-gray-500 rounded-full mx-1 cursor-pointer transition-colors duration-300"></span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'https://example.com/image1.jpg',
          'https://example.com/image2.jpg',
          'https://example.com/image3.jpg',
        ],
        activeIndex: 0,
        interval: null,
      };
    },
    mounted() {
      this.startCarousel();
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
    methods: {
      startCarousel() {
        this.interval = setInterval(() => {
          this.nextSlide();
        }, 5000);
      },
      nextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.images.length;
      },
      goToSlide(index) {
        this.activeIndex = index;
        clearInterval(this.interval);
        this.startCarousel();
      },
    },
  };
  </script>
  