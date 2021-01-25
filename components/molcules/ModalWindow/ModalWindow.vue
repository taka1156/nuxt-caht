<template>
  <div v-show="isOpen" class="base-modal">
    <div class="base-modal__content">
      <div class="base-modal__header">
        <h2>{{ modalTitle }}</h2>
      </div>
      <!-- @slot モーダルの内容 -->
      <slot />
      <base-btn :btn-type="`button`" @btn-click="modalClose"> Close </base-btn>
    </div>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';

export default {
  name: 'BaseModal',
  components: {
    'base-btn': BaseBtn,
  },
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    modalClose() {
      this.$emit('modal-close');
    },
  },
};
</script>

<style scoped>
::v-deep .base-btn--extend {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  height: 30px;
  width: 150px;
  border: 1px solid cornflowerblue;
  color: cornflowerblue;
  border-radius: 15px;
}

::v-deep .base-btn--extend:hover {
  background-color: cornflowerblue;
  color: white;
}

.base-modal {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-modal__content {
  z-index: 2;
  width: 35vw;
  padding: 1em;
  background: #fff;
}

@media (min-width: 790px) {
  .base-modal__content {
    width: 50vw;
  }
}

.base-modal__header {
  display: flex;
  justify-content: inherit;
  border: 1px solid gray;
}

button {
  border: none;
  width: 80%;
  margin-right: 0;
  background-color: transparent;
}
</style>
