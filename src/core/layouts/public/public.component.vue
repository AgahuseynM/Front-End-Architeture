<style src="./public.component.scss" lang="scss"></style>
<template>
  <div class="public">
    <header-component/>
    <div class="container-fluid p-0">
      <div class="public__content p-0">
        <router-view/>
      </div>
    </div>
    <div class="public__footer p-0">
      <footer-component/>
    </div>
  </div>
</template>
<script src="./public.component.ts" lang="ts"></script>

