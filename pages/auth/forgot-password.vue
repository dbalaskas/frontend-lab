<script setup lang="ts">
definePageMeta({
  name: 'forgot-password',
  layout: 'auth-layout'
});

useHead({
  title: 'Forgot Password'
});
</script>

<template>
  <nuxt-layout>
    <view-auth-forgot-password-view />
  </nuxt-layout>
</template>

<style lang="css" scoped>

</style>
