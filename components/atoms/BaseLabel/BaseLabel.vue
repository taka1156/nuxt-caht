<template>
  <label :for="id">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
label {
  width: 70%;
  margin: 0 auto;
  text-align: left;
}
</style>
