<script lang="ts" setup>
interface Props {
  to: string | route;
  label?: string;
  iconLeft?: string;
  iconRight?: string;
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  label: undefined,
  iconLeft: undefined,
  iconRight: undefined
});
</script>

<template>
  <nuxt-link
    :to="props.to"
    class="flex items-center space-x-1 hover:text-blue-500 hover:underline"
  >
    <Icon
      v-if="props.iconLeft"
      :name="props.iconLeft"
    />
    <span>{{ label || to }}</span>
    <Icon
      v-if="props.iconRight"
      :name="props.iconRight"
    />
  </nuxt-link>
</template>

<style lang="css" scoped>

</style>
