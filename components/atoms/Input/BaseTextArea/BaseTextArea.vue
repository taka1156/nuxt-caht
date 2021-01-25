<template>
  <textarea
    :id="id"
    :name="name"
    :value="value"
    :row="row"
    :col="col"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>

<script>
export default {
  name: 'BaseTextArea',
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
      required: true,
    },
    rows: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('change', e.target.value);
    },
  },
};
</script>
