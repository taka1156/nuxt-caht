<template>
  <div>
    <button :type="btnType" class="base-btn" @click="btnClick">
      <!-- @slot ボタンラベル -->
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    btnType: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    btnClick() {
      this.$emit('btn-click');
    },
  },
};
</script>

<style scoped>
button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}
</style>
