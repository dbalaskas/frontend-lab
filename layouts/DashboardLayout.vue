<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="h-screen flex flex-col">
    <layout-dashboard-header-layout />

    <div class="flex flex-1 flex-col lg:flex-row overflow-hidden">
      <layout-dashboard-sidebar-layout />

      <div class="flex-1 bg-gray-50 overflow-y-scroll">
        <layout-dashboard-page-container-layout>
          <base-link
            v-if="route.name !== 'dashboard'"
            icon-left="uil:arrow-left"
            :to="{ name: 'dashboard' }"
            label="Go Home"
          />
          <slot />
        </layout-dashboard-page-container-layout>

        <layout-dashboard-footer-layout />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>

</style>
