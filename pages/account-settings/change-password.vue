<script setup lang="ts">
definePageMeta({
  name: 'change-password',
  layout: 'dashboard-layout'
});

useHead({
  title: 'Change Password'
});
</script>

<template>
  <nuxt-layout>
    <view-account-settings-change-password-view />
  </nuxt-layout>
</template>

<style lang="css" scoped>

</style>
