<template>
  <select :id="id" :name="name" @change="updateValue">
    <option value="" hidden>選択肢を選んでください。</option>
    <template v-for="(option, index) in options">
      <option :key="`option_${index}`" :value="option.value">
        {{ option.label }}
      </option>
    </template>
  </select>
</template>

<script>
export default {
  name: 'BaseSelectInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$emit('input', this.options[0].value);
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style scoped>
select {
  width: 70%;
  font-size: 16px;
  margin: 10px auto;
}
</style>
