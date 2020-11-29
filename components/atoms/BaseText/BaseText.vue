<template>
  <div>
    <p classa="base-text">
      <!-- @slot テキスト -->
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseText',
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
</style>
