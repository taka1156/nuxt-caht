<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(val) {
        return ['text', 'password', 'image', 'file'].includes(val);
      },
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
</style>
