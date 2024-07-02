<template>
  <section id="inicio" class="w-full h-max sm:h-full">
    <div class="h-full py-20 px-8 sm:px-0 sm:py-10 pt-28 sm:pt-14 bg-variant-bg/95 sm:flex sm:items-center">
      <article class="sm:w-1/2 sm:mx-20">
        <h1
          class="w-4/7 sm:w-full mb-4 text-5xl sm:text-6xl text-variant-r font-bellefair font-thin animate-slideFromRight">
          Olá, sou Patrícia Lemos.
        </h1>
        <p class="mb-3 animate-slideToTop">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, aut.</p>
        <p class="animate-slideToTop">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam recusandae a ipsum
          obcaecati cumque harum!</p>
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
      <article class="sm:h-3/4 px-10 sm:w-1/2">
        <img src="@/assets/profile1.webp" alt="profile" class="animate-show shadow rounded sm:h-full" />
      </article>
    </div>
  </section>
</template>

<script setup>
const whatsappLink = 'https://api.whatsapp.com/send?phone=5511957885973&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20terapia.'
</script>

<style scoped>
section {
  background-image: url('@/assets/heroBannerBackground.webp');
  background-size: cover;
  background-position-y: center;
  background-attachment: fixed;
}
</style>