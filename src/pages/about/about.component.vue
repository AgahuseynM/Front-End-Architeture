<style lang="scss"  src="./about.component.scss"></style>
<template>
  <div class="d-flex justify-between mb-5">
    <v-btn @click="getAbouts"  color="dark" rounded>
      Get all ABout Data
    </v-btn>
    <v-btn @click="addItem"  color="info" rounded class="mr-2">
      add item
    </v-btn>
  </div>


  <v-card v-if="todos2&&todos2.length">
    <ul>
      <li v-for="(item,index) in todos2" :key="index" class="mb-1">
        <v-alert color="info">
          {{ item.title }}
        </v-alert>
      </li>
    </ul>
  </v-card>

</template>
<script lang="ts" src="./about.component.ts"></script>
