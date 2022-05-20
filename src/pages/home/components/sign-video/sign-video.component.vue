<style src="./sign-video.component.scss" lang="ts"></style>

<template>
  <div class="sign-video"
       :style="{'background-image': 'url(' + require('@/assets/images/SignEverywhere.png') + ')'}"
  >
    <div class="row sign-video_content">
      <div class="col-12">
        <div class="container">
          <div class="play-video-btn"
               :style="{'background-image': 'url(' + require('@/assets/images/PlayVideoBtn.png') + ')'}"
          ></div>
          <div class="container_title">SİMA ilə hər yerdə imzala!</div>
          <div class="container_text">Design is the design system that will help you create your digital brand and its application to digital touch points. Before starting you must ask yourself why it should exist, what values it has, what its mission is, and who it is going to target.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./sign-video.component.ts" lang="ts"></script>