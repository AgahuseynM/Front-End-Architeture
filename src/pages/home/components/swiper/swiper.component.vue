<style src="./swiper.component.scss" lang="scss"></style>

<template>
<div class="swiper">
  <swiper
      :slides-per-view="1"
      :pagination="{clickable: true}"
  >
    <swiper-slide class="row swiper_content" v-for="(item, index) in swiperListAll" :key="index">
      <div class="col-5">
        <div class="swiper_info">
          <div class="swiper_info__title">
            {{item.title}}
          </div>
          <div class="swiper_info__text mt-8">
            {{item.text}}
          </div>
          <div class="swiper_info__buttons mt-9">
            <v-btn color="sima" v-if="item.id === 1">
              App Store
            </v-btn>
            <v-btn color="sima" v-if="item.id === 1">
              Play Market
            </v-btn>

            <v-btn color="sima" v-if="item.id === 2">
              Ətraflı
            </v-btn>
            <v-btn color="sima" v-if="item.id === 2">
              SİMA-nı yüklə
            </v-btn>
          </div>
        </div>
      </div>
      <div class="col-7">
        <div class="swiper_image" :style="{ backgroundImage: `url(${item.image})`}"></div>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script src="./swiper.component.ts" lang="ts"></script>