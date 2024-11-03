<script setup lang="ts">
definePageMeta({
  name: 'reset-password',
  layout: 'auth-layout'
});

useHead({
  title: 'Reset Password'
});
</script>

<template>
  <nuxt-layout>
    <view-auth-reset-password-view />
  </nuxt-layout>
</template>

<style lang="css" scoped>

</style>
