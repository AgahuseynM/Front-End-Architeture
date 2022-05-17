<style src="./faq.component.scss" lang="scss"></style>

<template>
  <div class="faq">
    <div class="row faq_content">

      <div class="col-6 faq-intro">
        <div class="question">
          <div class="question_title">Sualınız var?</div>
          <div class="question_text">Ən çox verilən sualların cavabı üçün hazır FAQ bölməsinə baxın</div>
          <button class="question_more-btn">
            <div class="question_more-btn__info-icon"
                 :style="{'background-image': 'url(' + require('@/assets/images/button_images/Info.png') + ')'}"></div>
            Daha çox
          </button>
        </div>
      </div>

      <div class="col-6 faq-block">
        <div class="faq-block_second">

          <!-- faq questions -->
          <!-- first question -->
          <div class="faq_questions first"
               v-if="firstQuestionVisibility"
               @click="showFirstQuestion"
          >SİMA nədir?
            <div class="space"></div>
            <span class="material-icons">remove</span>
          </div>

          <div class="faq_questions first"
               v-else
               @click="showFirstQuestion"
          >SİMA nədir?
            <div class="space"></div>
            <span class="material-icons">add</span></div>

          <!-- Answer to first question -->
          <transition name="answeranim" mode="out-in">
            <div class="answer" v-if="firstQuestionVisibility">SİMA – elektron imzanın bulud texnologiyalarına əsaslanan versiyasıdır. Bu həll üz tanıma və açıq açar texnologiyasını (elektron imza həlli) özündə birləşdirir.</div>
          </transition>

          <!-- Second question -->
          <div class="faq_questions second"
               v-if="secondQuestionVisibility"
               @click="showSecondQuestion"
          >İstifadə sahələri
            <div class="space"></div>
            <span class="material-icons">remove</span></div>

          <div class="faq_questions second"
               v-else
               @click="showSecondQuestion"
          >İstifadə sahələri
            <div class="space"></div>
            <span class="material-icons">add</span></div>

          <!-- Answer to second question -->
          <transition name="answeranim" mode="out-in">
            <div class="answer" v-if="secondQuestionVisibility">SİMA – elektron imzanın bulud texnologiyalarına əsaslanan versiyasıdır. Bu həll üz tanıma və açıq açar texnologiyasını (elektron imza həlli) özündə birləşdirir.</div>
          </transition>

          <!-- Third question -->
          <div class="faq_questions third"
               v-if="thirdQuestionVisibility"
               @click="showThirdQuestion"
          >SİMA tətbiqini necə yükləyə bilərəm?
            <div class="space"></div>
            <span class="material-icons">remove</span></div>

          <div class="faq_questions third"
               v-else
               @click="showThirdQuestion"
          >SİMA tətbiqini necə yükləyə bilərəm?
            <div class="space"></div>
            <span class="material-icons">add</span></div>

          <!-- Answer to third question -->
          <transition name="answeranim" mode="out-in">
            <div class="answer" v-if="thirdQuestionVisibility">SİMA – elektron imzanın bulud texnologiyalarına əsaslanan versiyasıdır. Bu həll üz tanıma və açıq açar texnologiyasını (elektron imza həlli) özündə birləşdirir.</div>
          </transition>

        </div>
      </div>
    </div>
  </div>
</template>

<script src="./faq.component.ts" lang="ts"></script>