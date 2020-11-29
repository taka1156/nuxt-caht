<template>
  <div>
    <div v-show="isOpen" class="modal base-modal">
      <!-- @slot モーダルの内容 -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 30px;
  right: 0;
  left: 0;
  z-index: 2;
}
</style>
