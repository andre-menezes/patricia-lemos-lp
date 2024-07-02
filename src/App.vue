<template>
  <main class="max-w-screen h-screen bg-primary text-variant-g-txt sm:text-lg">
    <NavBar />
    <HeroBanner />
    <TerapySection />
  </main>
</template>

<script setup>
import HeroBanner from './components/HeroBanner.vue';
import NavBar from './components/NavBar.vue';
import TerapySection from './components/TerapySection.vue';
</script>
