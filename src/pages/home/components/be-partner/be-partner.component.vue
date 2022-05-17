<style src="./be-partner.component.scss" lang="scss"></style>

<template>
  <div class="be-partner">
    <div class="row be-partner_content">
     <div class="col-12">
       <div class="be-partner_content__title-block-list">
         <div class="title">Tərəfdaşlarımızdan biri olun</div>
         <div class="text">SİMA-nın üstünlüklərindən yararlanaraq, müştərilərinizə daha rahat və effektiv xidmət göstərmək üçün bizim tərəfdaş şəbəkəmizə qoşulun!
           Əlavə məlumat üçün: <span>info@sima.az</span></div>

         <div class="list">
           <div class="list_item" v-for="(item, index) in bePartnerListAll" :key="index">
             <div class="list_item__icon" :style="{ backgroundImage: `url(${item.icon})`}"></div>
             <div class="list_item__title">{{item.title}}</div>
           </div>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script src="./be-partner.component.ts" lang="ts"></script>