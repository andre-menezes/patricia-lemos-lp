<template>
  <section id="sobre-mim" class="w-full h-full bg-variant-g/25 py-20 px-8 sm:px-20">
    <h2 class="w-full mb-20 text-4xl sm:text-5xl text-variant-r font-bellefair font-thin animate-slideToBottom">
      Sobre mim
    </h2>
    <div class="flex flex-col sm:flex-row-reverse ">
      <img src="@/assets/profile1.webp" alt="Hernani Kaiser" class="sm:w-2/5 sm:h-1/6 animate-show shadow rounded" />
      <article class="sm:w-2/3 mt-20 sm:mt-0 sm:pr-16">
        <p class="mb-3 animate-slideToRight">Olá, meu nome é Hernani Kaiser. Sou <strong>Psicólogo Clínico</strong>
          (CRP 06/198119) com especialização em <strong>Psicanálise e Análise do Contemporâneo</strong> pela PUC-RS,
          autorizado pelo
          Conselho Federal de Psicologia para realizar atendimentos
          on-line (e-Psi). Meu objetivo principal é ajudar as pessoas a se sentirem realizadas, promovendo uma melhor
          compreensão de si mesmas e das suas relações com o mundo ao seu redor.</p>
        <p class="animate-slideToRight">
          Se você está procurando uma forma de melhor compreender seus sentimentos, resolver conflitos internos ou
          simplesmente deseja se sentir mais realizado na sua vida, estou aqui para apoiar você em sua jornada de
          autodescoberta e crescimento, fornecendo insights e ferramentas que podem te levar a uma vida mais plena e
          equilibrada.
        </p>
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
          Vamos conversar
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { whatsappLink } from '@/utils/constants';
</script>