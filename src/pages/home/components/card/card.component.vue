<style src="./card.component.scss" lang="scss"></style>

<template>
  <div class="news-card">
    <div class="row">
      <div class="col-12 content">

        <div class="content_container">
          <div class="content_container__title">
            Kampaniyalar və xəbərlər
          </div>

          <swiper class="card-list"
                  :space-between="60"
                  :breakpoints ="breakpoints"
                  :navigation="{ clickable: true }" >

            <swiper-slide class="card-list_item" v-for="(item, index) in CardListAll" :key="index">

              <div class="item-img" :style="{ backgroundImage: `url(${item.cardImg})`}"></div>

              <div class="item-title">{{item.title}}</div>

              <div class="item-text" :class="{ 'active': item.id === 1 }">{{item.text}}</div>

              <div class="more-btn-block" :class="{ 'active': item.id === 1 }">

                <button class="more-btn">Daha çox <i class="material-icons arrow-icon">arrow_forward</i></button>

                <button class="item-tag">Xəbər</button>
              </div>
            </swiper-slide>
          </swiper>
        </div>


      </div>
    </div>
  </div>
</template>

<script src="./card.component.ts" lang="ts"></script>