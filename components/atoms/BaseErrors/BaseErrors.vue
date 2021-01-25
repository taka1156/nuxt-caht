<template>
  <div>
    <p v-for="(error, index) in errors" :key="`error_${index}`">{error}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseErrors',
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>
