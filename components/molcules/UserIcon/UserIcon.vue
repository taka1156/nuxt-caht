<template>
  <div class="user-icon">
    <div v-if="!status" class="dummy-icon" />
    <div v-else>
      <base-img :img-url="userInfo.photoURL" :img-alt="`ユーザーアイコン`" />
      <base-text>{{ userInfo.displayName }}さん、こんにちは</base-text>
    </div>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'UserIcon',
  components: {
    'base-text': BaseText,
  },
  props: {
    status: {
      type: Boolean,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
::v-deep .base-img--extend {
  border-radius: 100px;
  height: 100px;
  width: 100px;
  margin: 5vh auto;
  border: solid 2px #d8d8d8;
}

::v-deep .base-text--extend {
  color: cornflowerblue;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 800;
}

.dummy-icon {
  border-radius: 100px;
  height: 100px;
  width: 100px;
  margin: 5vh auto;
  border: solid 2px #d8d8d8;
  background-color: lightgray;
}
</style>
