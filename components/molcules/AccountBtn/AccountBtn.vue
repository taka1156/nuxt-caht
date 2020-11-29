<template>
  <div>
    <base-btn :btn-type="`button`" @btn-click="accountClick">
      <base-img
        :img-url="`${account.btntype === 'login' ? require() : require()}`"
        :img-alt="`${account.btntype}アイコン`"
      />
      {{ account.btntype }}
    </base-btn>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'AccountBtn',
  components: {
    'base-btn': BaseBtn,
    'base-img': BaseImg,
  },
  props: {
    btnType: {
      type: String,
      default: '',
      require: true,
      validator: function (value) {
        return ['login', 'logout'].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    accountClick() {
      this.$emit('account-click');
    },
  },
};
</script>
