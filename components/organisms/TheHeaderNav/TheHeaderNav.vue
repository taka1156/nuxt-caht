<template>
  <div class="HeaderNavi">
    <div>
      <div>
        <i v-if="path !== null" @click="jump(path)"> chevron_left </i>
      </div>
      <h1>
        <i class="material-icons">
          {{ icon }}
        </i>
        {{ title }}
      </h1>
      <div>
        <base-img
          v-if="status !== false"
          :img-url="user.photoURL"
          :img-alt="`${user.name}ロゴ`"
          @click="jump('/account')"
        />
        <button v-else class="btn btn-outline-white" @click="jump('/account')">
          login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  components: {
    'base-img': BaseImg,
  },
  props: {
    path: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    user() {
      return this.$store.getters['auth/user'];
    },
    status() {
      return this.$store.getters['auth/status'];
    },
  },
  methods: {
    jump(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scoped>
.material-icons {
  font-size: 30px;
  padding-top: 10px;
}
.btn-outline-white {
  color: white;
  border: 1px solid white;
}
</style>
