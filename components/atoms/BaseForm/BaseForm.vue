<template>
  <div>
    <label :for="form.id" class="base-label">{{ form.name }}</label>
    <input
      :id="form.id"
      class="base-input"
      :type="form.type"
      :placeholder="form.placeholder"
      :value="value"
      @change="sendValue"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseForm',
  props: {
    form: {
      type: Object,
      default: () => {},
      reqired: true,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    sendValue() {
      this.emit('send-value', this.value);
    },
  },
};
</script>

<style scoped>
label,
input {
  margin: 0;
  padding: 0;
}
</style>
