<style  lang="scss" src="./not-found.component.scss"></style>
<template>
  <div class="error-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 mr-auto mt-5 text-md-left text-center">
          <a href="#" class="ml-12">
            <img alt="logo" src="@/assets/images/mhm.png" class="theme-logo">
          </a>
        </div>
      </div>
    </div>
    <div class="container-fluid error-content">
      <div class="">
        <h1 class="error-content__number">404</h1>
        <p class="error-content__mini-text mb-0 mt-0">Ooops!</p>
        <p class="error-content__error-text">The page you requested was not found!</p>
        <router-link :to="{name: 'home'}" class="btn btn--primary">Go Back</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./not-found.component.ts"></script>
