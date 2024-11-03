<script setup lang="ts">
definePageMeta({
  name: 'account-settings',
  layout: 'dashboard-layout'
});

useHead({
  title: 'Account Settings'
});
</script>

<template>
  <nuxt-layout>
    <view-account-settings-view />
  </nuxt-layout>
</template>

<style lang="css" scoped>

</style>
