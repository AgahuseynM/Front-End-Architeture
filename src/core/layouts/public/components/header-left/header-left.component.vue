<style src="./header-left.component.scss" lang="scss"></style>

<template>
  <div class="header-left">
    <div class="container-fluid">
      <div class="row align-center">
        <div class="col-12">
          <router-link :to="{name: 'home'}" class="header-left__logo">
            <img src="@/assets/images/SIMA_logo.png" alt="logo">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./header-left.component.ts" lang="ts"></script>