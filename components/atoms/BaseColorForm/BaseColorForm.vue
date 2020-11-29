<template>
  <div>
    <div class="base-color-form">
      <label class="base-color-form__label" :for="id"> <slot /> </label>
      <select
        :id="id"
        :value="value"
        class="base-color-form__form"
        @change="setColor"
      >
        <option v-for="(color, index) in colors" :key="index" :value="color.name">
          {{ color.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { colors } from '@/constants/index.js';

export default {
  name: 'ColorSelecter',
  props: {
    id: {
      type: String,
      default: '',
      required: true,
    },
    initColor: {
      type: String,
      default: 'black',
      required: true,
    },
  },
  data() {
    return {
      value: 'forestgreen',
      colors: colors,
    };
  },
  methods: {
    setColor() {
      this.$emit('set-color', this.value);
    },
  },
};
</script>

<style scoped>
.base-color-form {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}

.base-color-form__label {
  line-height: 20px;
  margin: 3px;
  width: 70%;
  font-size: 12.2px;
}

.base-color-form__form {
  height: 25px;
  font-size: 15px;
}
</style>
