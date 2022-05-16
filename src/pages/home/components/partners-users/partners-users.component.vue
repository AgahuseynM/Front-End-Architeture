<style src="./partners-users.component.scss" lang="scss"></style>

<template>
  <div class="partners-users">
    <div class="row partners-users_content">
      <div class="col-6 partners-block">

        <div class="partners">
          <div class="partners_title">Tərəfdaşlarımız üçün üstünlüklər</div>
          <div class="partners_list" v-for="(item, index) in PartnersListAll" :key="index">
            <div class="partners_list__icon" :style="{ backgroundImage: `url(${item.icon})`}"></div>
            <div class="partners_list__text">{{item.text}}</div>
          </div>
        </div>
      </div>

      <div class="col-6 users-block">
        <div class="users">
          <div class="users_title">İstifadəçilər üçün üstünlüklər</div>
          <div class="users_list" v-for="(item, index) in UsersListAll" :key="index">
            <div class="users_list__icon" :style="{backgroundImage: `url(${item.icon})`}"></div>
            <div class="users_list__text">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./partners-users.component.ts" lang="ts"></script>