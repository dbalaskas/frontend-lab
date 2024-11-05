<script lang="ts" setup>
interface Props {
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined
});

const { value, meta, errors } = useField(() => props.name);
</script>

<template>
  <base-form-base-input
    v-model="value"
    :name="name"
    :errors="errors"
    :valid="meta.valid"
  />
</template>

<style lang="css" scoped>

</style>
