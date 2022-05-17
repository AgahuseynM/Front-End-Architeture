<style src="./footer-left.component.scss" lang="scss"></style>

<template>
  <div class="footer-left">
          <router-link :to="{name: 'home'}">
            <img src="@/assets/images/SIMA_logo.png" alt="logo">
          </router-link>

    <div class="buttons">
      <v-btn class="v-btn" color="sima-blue">
        App Store
      </v-btn>
      <v-btn class="v-btn" color="sima-blue">
        Play Market
      </v-btn>
    </div>
        </div>
</template>

<script src="./footer-left.component.ts" lang="ts"></script>