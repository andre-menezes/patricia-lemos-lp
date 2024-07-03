<template>
  <section id="inicio" class="relative w-full h-max sm:h-full z-10">
    <div class="h-full py-20 px-8 sm:px-0 sm:py-10 pt-28 sm:pt-14 bg-variant-bg/95 sm:flex sm:items-center">
      <article class="sm:w-1/2 sm:mx-20">
        <h1
          class="w-4/7 sm:w-full mb-4 text-5xl sm:text-6xl text-variant-r font-bellefair font-thin animate-slideFromRight">
          Olá, sou Hernani Kaiser.
        </h1>
        <p class="mb-3 animate-slideToTop">Sou <strong>Psicólogo Clínico</strong> (CRP 06/198119) com especialização em
          Psicanálise e Análise do Contemporâneo pela PUC-RS.</p>
        <p class="animate-slideToTop">Meu objetivo principal é ajudar as pessoas a se sentirem realizadas, promovendo uma
          melhor compreensão de si mesmas e das suas relações com o mundo ao seu redor.</p>
        <a :href="whatsappLink" target="_blank" class="
            uppercase
            block
            w-fit
            mx-auto
            sm:mx-0
            my-10
            px-8
            py-4
            hover:bg-variant-g/80
            bg-variant-g
            text-xs
            text-primary
            font-montserrat
            font-semibold">
          Saiba mais
        </a>
      </article>
      <article class="sm:w-2/6 sm:my-10">
        <img src="@/assets/profile1.webp" alt="profile" class="animate-show shadow rounded" />
      </article>
    </div>
  </section>
</template>

<script setup>
import { whatsappLink } from '@/utils/constants';
</script>

<style scoped>
section {
  background-image: url('@/assets/heroBannerBackground.webp');
  background-size: cover;
  background-position-y: center;
  background-attachment: fixed;
}
</style>