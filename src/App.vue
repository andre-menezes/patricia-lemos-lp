<template>
  <main class="max-w-screen min-h-screen bg-primary text-variant-g-txt sm:text-lg">
    <NavBar />
    <HeroBanner />
    <TerapySection />
    <AboutMe />
  </main>
</template>

<script setup>
import AboutMe from './components/AboutMe.vue';
import HeroBanner from './components/HeroBanner.vue';
import NavBar from './components/NavBar.vue';
import TerapySection from './components/TerapySection.vue';
</script>
