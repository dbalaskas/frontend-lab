<script lang="ts" setup>

const sidebarMenuLinks = ['Home', 'About', 'Services', 'Contact'];
</script>

<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li
          v-for="link in sidebarMenuLinks"
          :key="link"
        >
          <a href="#">
            {{link}}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="css" scoped>

</style>
