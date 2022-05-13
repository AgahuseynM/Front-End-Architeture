<style src="./swiper.component.scss" lang="scss"></style>

<template>
<div class="swiper">
  <swiper
      :slides-per-view="1"
      :pagination="{clickable: true}"
  >
    <swiper-slide class="row">
      <div class="col-5">lorem
        <button @click="getSwiperList">Click</button>
        <div class="test" v-for="(item, index) in swiperList">
          {{item.title}}
          {{item.text}}
        </div>
      </div>
      <div class="col-7">ipsum</div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script src="./swiper.component.ts" lang="ts"></script>