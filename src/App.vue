<script setup lang="ts">
import TestComponent from './components/TestComponent.vue';
</script>

<template>
<p class="bg-yellow text-2xl">test</p>
<div class="flex px-3">
<TestComponent class="mx-5 items-center content-center"/>
<TestComponent/>
<TestComponent/>
    </div>
</template>
