<style src="./public.component.scss" lang="scss"></style>
<template>
  <div class="public pt-20">
    <header-component/>
    <div class="container-fluid p-0">
      <div class="public__content">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script src="./public.component.ts" lang="ts"></script>

