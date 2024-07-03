<template>
  <section id="sessoes" class="relative w-full min-h-full bg-primary py-20 px-8 sm:px-20 border-y-4 border-variant-g/40">
    <h2 class="w-2/3 sm:w-full mb-4 text-4xl sm:text-5xl text-variant-r font-bellefair font-thin animate-slideFromRight">
      Sobre as sessões
    </h2>
    <img class="w-full sm:w-2/3 mx-auto pt-20 drop-shadow-lg" src="@/assets/sessions.webp"
      alt="Homem sentado em frente ao notebook realizando uma sessão de terapia online" />
    <article class="h-full pt-20 sm:py-10">
      <p class="mb-14">Durante nossas sessões, você encontrará um espaço seguro e acolhedor para expressar seus
        sentimentos, pensamentos
        e preocupações. A abordagem psicanalítica permite uma exploração profunda das questões que você enfrenta, ajudando
        a revelar padrões inconscientes e promovendo o autoconhecimento e a realização pessoal.</p>
      <h3 class="mb-10 text-xl text-variant-r font-semibold">Como funciona as sessões?</h3>
      <ol class="w-full my-10">
        <li class="mb-6">
          <mdi-icon type="mdi" :path="mdiNumeric1"
            class="inline text-primary rounded-full w-5 h-5 bg-variant-r mb-1 mr-2">
          </mdi-icon>
          <strong>Formato Online: </strong> As sessões são realizadas por videoconferência, permitindo que você
          participe
          do conforto do seu lar ou de qualquer outro local que prefira, desde que haja uma conexão estável à internet.
        </li>
        <li class="mb-6">
          <mdi-icon type="mdi" :path="mdiNumeric2"
            class="inline text-primary rounded-full w-5 h-5 bg-variant-r mb-1 mr-2">
          </mdi-icon>
          <strong>Duração:</strong> Cada sessão tem uma duração de 50 minutos. Esse tempo é ideal para explorar questões
          em profundidade e avançar no processo terapêutico sem ser cansativo.
        </li>
        <li class="mb-6">
          <mdi-icon type="mdi" :path="mdiNumeric3"
            class="inline text-primary rounded-full w-5 h-5 bg-variant-r mb-1 mr-2">
          </mdi-icon>
          <strong>Frequência:</strong> As sessões são realizadas semanalmente, garantindo um ritmo constante e progressivo
          no tratamento.
        </li>
      </ol>
    </article>
  </section>
</template>

<script setup>
import {
  mdiNumeric1,
  mdiNumeric2,
  mdiNumeric3
} from '@mdi/js';
</script>