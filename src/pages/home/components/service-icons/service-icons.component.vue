<style src="./service-icons.component.scss" lang="scss"></style>

<template>
  <div class="services-icons">
    <div class="row">
      <div class="col-12">
        <div class="service-icons_container">
          <div class="service-icons_container__title">SİMA ilə hansı xidmətlər əldə edilə bilər?</div>
          <div class="service-icons_container__list">
            <div class="service-icons_item" v-for="(item, index) in ServiceIconsListAll">
              <div class="service-icons_item__icon" :style="{ backgroundImage: `url(${item.service_icon})`}"></div>
              <div class="service-icons_item__text">
                {{item.text}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./service-icons.component.ts" lang="ts"></script>