<template>
  <div class="the-header-nav">
    <div class="the-header-nav__box">
      <div class="the-header-nav__back">
        <base-link v-if="currentPage.back !== ''" :route-to="currentPage.back">
          <base-img
            :img-url="require('assets/img/ui/left-arrow.svg')"
            :img-alt="`戻る`"
          />
        </base-link>
      </div>
      <div class="the-header-nav__heading">
        <base-img :img-url="currentPage.img" :img-alt="currentPage.name" />
        <base-heading1>
          {{ currentPage.name }}
        </base-heading1>
      </div>
      <div class="the-header-nav__account">
        <base-link :route-to="`/account/`">
          <base-img
            v-if="status"
            :img-url="userInfo.photoURL"
            :img-alt="`${userInfo.displayName}さんのロゴ`"
          />
          <div v-else>login</div>
        </base-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseHeading1 from '../../atoms/BaseHeading1/BaseHeading1';
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  components: {
    'base-link': BaseLink,
    'base-heading1': BaseHeading1,
    'base-img': BaseImg,
  },
  props: {
    headerRoutes: {
      type: Array,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    currentPage() {
      return this.headerRoutes.find(route => route.to === this.$route.path);
    },
  },
};
</script>

<style scoped>
::v-deep .base-img--extend {
  border-radius: 100%;
  height: 35px;
  width: 35px;
  margin: 0;
  padding: 0;
}

::v-deep .base-heading1--extend {
  margin: 0;
  padding: 0;
}

.the-header-nav {
  height: 10vh;
  width: 100%;
  z-index: 2;
  position: fixed;
  background-color: cornflowerblue;
  top: 0;
  left: 0;
}

.the-header-nav__box {
  height: 100%;
  width: 100%;
  display: flex;
  margin: 2vh auto;
  padding: 0;
  justify-content: space-around;
}

.the-header-nav__back {
  height: 50%;
  width: 15%;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.the-header-nav__heading {
  height: 50%;
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.the-header-nav__account {
  height: 50%;
  width: 15%;
  padding: 0;
  margin: 0;
}
</style>
