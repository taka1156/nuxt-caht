<template>
  <div>
    <base-btn :btn-type="`button`" @btn-click="accountClick">
      <base-img
        :img-url="`${
          btnLabel === 'login'
            ? require('assets/img/ui/logout.svg')
            : require('assets/img/ui/login.svg')
        }`"
        :img-alt="`${btnLabel}アイコン`"
      />
      {{ btnLabel }}
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
    btnLabel: {
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
</style>
