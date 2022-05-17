<style src="./footer-center.component.scss" lang="scss"></style>

<template>
  <div class="footer-center">
    <div class="email">
      <div class="email_icon"
           :style="{'background-image': 'url(' + require('@/assets/images/MessageIcon.png') + ')'}"
      ></div>
      <div class="email_address">info@sima.az</div>
    </div>
      <div class="social-media">
        <div class="social-media_icons"
             :style="{'background-image': 'url(' + require('@/assets/images/social_media_icons/facebook.png') + ')'}"
        ></div>
        <div class="social-media_icons"
             :style="{'background-image': 'url(' + require('@/assets/images/social_media_icons/instagram.png') + ')'}"
        ></div>
        <div class="social-media_icons"
             :style="{'background-image': 'url(' + require('@/assets/images/social_media_icons/linkedin.png') + ')'}"
        ></div>
      </div>
  </div>
</template>

<script src="./footer-center.component.ts" lang="ts"></script>