<style lang="scss" src="./register.component.scss"></style>
<template>
  <div class="register">
    <div class="register-container p-6">
      <div class="register-container__title mb-5">
        <h1 class="m-0">Register</h1>
        <p class="mb-0">Register to your account to continue.</p>
      </div>
      <div class="login__form">
        <form action="">
          <div class="register__element mt-10">
            <div class="register__label">
              <label class="v-label">USERNAME</label>
            </div>
            <div class="register__icon">
              <div class="register__icon left">
                <fa icon="user"/>
              </div>
              <input type="text" class="v-input pl-10 mt-2 mb-1" placeholder="username" v-model="userInfo.username">
            </div>
            <span class="register__error"></span>
          </div>
          <div class="register__element mt-4">
            <div class="register__label">
              <label class="v-label">Email</label>
            </div>
            <div class="register__icon">
              <div class="register__icon left">
                <fa icon="at"/>
              </div>
              <input type="text" class="v-input pl-10 mt-2 mb-1" placeholder="email" v-model="userInfo.email">
            </div>
            <span class="register__error"></span>
          </div>
          <div class="register__element mt-4">
            <div class="register__label">
              <label class="v-label">PASSWORD</label>
            </div>
            <div class="register__icon">
              <div class="register__icon left">
                <fa icon="lock"/>
              </div>
              <input :type="[registerPasswordType ? 'text' : 'password']" class="v-input px-10 mt-2 mb-1" placeholder="password" v-model="userInfo.password">
              <div class="register__icon password">
                <fa icon="eye" @click="registerPasswordType = !registerPasswordType"/>
              </div>
            </div>
            <span class="register__error"></span>
          </div>
          <div class="register__element mt-4">
            <div class="register__label">
              <label class="v-label">CONFIRM PASSWORD</label>
            </div>
            <div class="register__icon">
              <div class="register__icon left">
                <fa icon="lock"/>
              </div>
              <input :type="[registerConfirmPasswordType ? 'text' : 'password']" class="v-input px-10 mt-2 mb-1" placeholder="confirm password" v-model="confirmPassword">
              <div class="register__icon password">
                <fa icon="eye" @click="registerConfirmPasswordType = !registerConfirmPasswordType"/>
              </div>
            </div>
            <span class="register__error"></span>
          </div>
        </form>
      </div>
      <div>
        <v-btn @click="register" class="mt-5 py-4 w-100" color="success" size="lg">
          Register
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./register.component.ts"></script>
