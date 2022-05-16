<style src="./header-right.component.scss" lang="scss"></style>

<template>
  <div class="header-right d-flex align-center justify-center">
    <ul class="header-right__container d-flex">
      <li class="header-right__item px-4 py-7">
        Yüklə
      </li>
      <li class="header-right__item px-4 py-7">
        Xidmətlər
      </li>
      <li class="header-right__item px-4 py-7">
        Tərəfdaşlar
      </li>
      <li class="header-right__item px-4 py-7">
        Kampaniya və Xəbərlər
      </li>
      <li class="header-right__item px-4 py-7">
        FAQ
      </li>

      <li class="header-right__item search  px-4 py-7">
        <a class="search_btn" href="#" @click.prevent="showSearchInput">
          <img class="search_img" src="@/assets/images/search.png" >
        </a>
         <input  type="text" class="v-input v-input--dark search-input" v-if="searchInputVisibility">
      </li>
    </ul>
  </div>
</template>

<script src="./header-right.component.ts" lang="ts"></script>