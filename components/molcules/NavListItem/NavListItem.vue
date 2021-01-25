<template>
  <div class="nav-list-item">
    <base-link :route-to="navItem.to" class="nav-item__link">
      {{ navItem.name }}
      <base-img :img-url="navItem.img" :img-alt="`${navItem.name}のナビアイコン`" />
    </base-link>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'NavListItem',
  components: {
    'base-link': BaseLink,
    'base-img': BaseImg,
  },
  props: {
    navItem: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style scoped>
::v-deep .base-link--extend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
}

::v-deep .base-img--extend {
  height: 30px;
  width: 30px;
  margin: 0 auto;
  padding: 0;
}

.nav-list-item {
  display: block;
  margin: 1px;
  height: 90%;
  width: 100%;
  border: solid 1px white;
}
</style>
