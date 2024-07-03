<template>
  <section id="terapia-online"
    class="relative w-full min-h-full bg-primary py-20 px-8 sm:px-20 border-y-4 border-variant-g/40">
    <h2 class="w-2/3 sm:w-full mb-4 text-4xl sm:text-5xl text-variant-r font-bellefair font-thin animate-slideFromRight">
      Terapia on-line funciona?
    </h2>
    <img class="w-full sm:w-2/3 mx-auto pt-20 drop-shadow-lg" src="@/assets/terapy.webp"
      alt="Mulher sentada em frente ao notebook realizando uma sessão de terapia online" />
    <article class="h-full pt-20 sm:py-10">
      <p>A terapia on-line é uma alternativa viável e eficiente ao atendimento presencial, oferecendo diversas vantagens
        que podem potencializar o processo terapêutico. Aqui estão alguns pontos que demonstram sua eficácia e benefícios:
      </p>
      <ol class="w-full my-10">
        <li class="flex flex-col mb-6">
          <h3 class="flex items-center font-semibold mb-2">
            <mdi-icon type="mdi" :path="mdiNumeric1"
              class="text-primary rounded-full w-5 h-5 bg-variant-r mr-2"></mdi-icon>
            Comodidade e Acessibilidade
          </h3>
          <div class="ml-6 flex items-start gap-2 mb-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Sem Deslocamento:</strong> Você pode participar da sessão do conforto de sua
              casa, evitando o tempo e o custo do deslocamento até o consultório.</p>
          </div>
          <div class="ml-6 flex items-start gap-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Acesso Universal:</strong> Pessoas que vivem em áreas remotas ou têm
              mobilidade reduzida podem acessar a terapia com a mesma qualidade de atendimento.</p>
          </div>
        </li>

        <li class="flex flex-col mb-6">
          <h3 class="flex items-center font-semibold mb-2">
            <mdi-icon type="mdi" :path="mdiNumeric2"
              class="text-primary rounded-full w-5 h-5 bg-variant-r mr-2"></mdi-icon>
            Flexibilidade de Horário
          </h3>
          <div class="ml-6 flex items-start gap-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Maior Disponibilidade:</strong> As sessões on-line permitem maior
              flexibilidade para agendar horários que se encaixem na sua rotina, facilitando a conciliação com
              compromissos pessoais e profissionais.</p>
          </div>
          <div class="ml-6 flex items-start gap-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Ambiente Controlado:</strong> Você pode escolher um ambiente tranquilo e
              seguro para a sessão, onde se sinta mais à vontade e livre de interrupções.</p>
          </div>
        </li>

        <li class="flex flex-col mb-6">
          <h3 class="flex items-center font-semibold mb-2">
            <mdi-icon type="mdi" :path="mdiNumeric3"
              class="text-primary rounded-full w-5 h-5 bg-variant-r mr-2"></mdi-icon>
            Privacidade e Confidencialidade
          </h3>
          <div class="ml-6 flex items-start gap-2 mb-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Espaço Pessoal:</strong> Realizar a terapia em um ambiente familiar pode
              aumentar a sensação de segurança e privacidade.</p>
          </div>
          <div class="ml-6 flex items-start gap-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Ambiente Controlado:</strong> Você pode escolher um ambiente tranquilo e
              seguro para a sessão, onde se sinta mais à vontade e livre de interrupções.</p>
          </div>
        </li>

        <li class="flex flex-col mb-6">
          <h3 class="flex items-center font-semibold mb-2">
            <mdi-icon type="mdi" :path="mdiNumeric4"
              class="text-primary rounded-full w-5 h-5 bg-variant-r mr-2"></mdi-icon>
            Continuidade do Atendimento
          </h3>
          <div class="ml-6 flex items-start gap-2 mb-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Menos Interrupções:</strong> A terapia on-line permite a continuidade do
              tratamento mesmo em situações de viagem, mudança de residência ou outros imprevistos.</p>
          </div>
          <div class="ml-6 flex items-start gap-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Frequência Consistente:</strong> A facilidade de acesso às sessões ajuda a
              manter uma frequência regular, essencial para o progresso terapêutico.</p>
          </div>
          <div class="ml-6 flex items-start gap-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Resultados Positivos:</strong> A interação virtual não diminui a qualidade da
              comunicação e da conexão emocional entre terapeuta e cliente, elementos cruciais para o sucesso da terapia.
            </p>
          </div>
        </li>

        <li class="flex flex-col mb-6">
          <h3 class="flex items-center font-semibold mb-2">
            <mdi-icon type="mdi" :path="mdiNumeric5"
              class="text-primary rounded-full w-5 h-5 bg-variant-r mr-2"></mdi-icon>
            Redução de Barreiras
          </h3>
          <div class="ml-6 flex items-start gap-2 mb-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Menos Estigmas:</strong> A terapia on-line permite a continuidade do
              tratamento mesmo em situações de viagem, mudança de residência ou outros imprevistos.</p>
          </div>
          <div class="ml-6 flex items-start gap-2">
            <div class="flex items-center justify-center mt-2 sm:mt-3">
              <DotIcon />
            </div>
            <p><strong class="font-semibold">Apoio Imediato:</strong> Em situações de crise, a terapia on-line pode
              proporcionar um acesso mais rápido ao apoio necessário.</p>
          </div>
        </li>
      </ol>
      <p class="mb-20">A terapia on-line oferece uma abordagem eficaz, acessível e flexível, mantendo a qualidade do
        atendimento e
        promovendo um ambiente propício para o crescimento e a autodescoberta. Ao optar por sessões remotas, você desfruta
        de todas essas vantagens sem comprometer a profundidade e a eficácia do tratamento terapêutico.</p>
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
        Agende já sua sessão
      </a>
    </article>
  </section>
</template>

<script setup>
import {
  mdiNumeric1,
  mdiNumeric2,
  mdiNumeric3,
  mdiNumeric4,
  mdiNumeric5,
} from '@mdi/js';
import DotIcon from './DotIcon.vue';
import { whatsappLink } from '@/utils/constants';
</script>