<style src="./header-right.component.scss" lang="scss"></style>

<template>
  <div class="header-right d-flex align-center justify-center">
    <ul class="header-right__container d-flex">
      <li class="header-right__item px-4 py-7">
        <router-link :to="{name: 'download'}">Yüklə</router-link>
      </li>
      <li class="header-right__item px-4 py-7">
        <router-link :to="{name: 'services'}">Xidmətlər</router-link>
      </li>
      <li class="header-right__item px-4 py-7">
        <router-link :to="{name: 'partners'}">Tərəfdaşlar</router-link>
      </li>
      <li class="header-right__item px-4 py-7">
        <router-link :to="{name: 'news'}">Kampaniya və Xəbərlər</router-link>
      </li>
      <li class="header-right__item px-4 py-7">
        <router-link :to="{name: 'faq'}">FAQ</router-link>
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