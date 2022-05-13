<style lang="scss" src="./login.component.scss"></style>
<template>
  <div class="login">
    <div class="login-container p-6">
      <div class="login-container__title mb-5">
        <h1 class="m-0">Login</h1>
        <p class="mb-0">Log in to your account to continue.</p>
      </div>
      <div class="login-container__form">
        <form>
          <div class="login__element mt-10">
            <div class="login__label">
              <label class="v-label">USERNAME</label>
            </div>
            <div class="login__icon">
              <div class="login__icon left">
                <fa icon="user"/>
              </div>
              <input v-model="loginUser.username" class="v-input pl-10 mt-2 mb-1" placeholder="username" type="text">
            </div>
            <span class="login__error"></span>
          </div>
          <div class="login-container__form mt-4">
            <div class="login__label">
              <label class="v-label">PASSWORD</label>
              <a href="#">Forgot Password?</a>
            </div>
            <div class="login__icon">
              <div class="login__icon left">
                <fa icon="lock"/>
              </div>
              <input v-model="loginUser.password" :type="[loginPasswordType ? 'text' : 'password']"
                     class="v-input px-10 mt-2 mb-1" placeholder="password">
              <div class="login__icon password">
                <fa class="" icon="eye" @click="loginPasswordType = !loginPasswordType"/>
              </div>
            </div>
            <span class="login__error"></span>
          </div>
        </form>
      </div>
      <div class="login__btn">
        <v-btn class="mt-5 py-4 w-100" color="primary" size="lg">
          Log In
        </v-btn>
      </div>
      <div class="login__or mt-10">
        <p>OR</p>
      </div>
      <div>
        <v-btn class="mt-5 py-4 w-100" color="success" size="lg" @click="sendToRegister">
          Register
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./login.component.ts"></script>
