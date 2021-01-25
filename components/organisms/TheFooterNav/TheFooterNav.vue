<template>
  <nav>
    <ul class="the-footer-nav">
      <li v-for="(route, index) in footerRoutes" :key="index">
        <nav-list-item :nav-item="route" />
      </li>
    </ul>
  </nav>
</template>

<script>
import NavListItem from '../../molcules/NavListItem/NavListItem';

export default {
  name: 'NavList',
  components: {
    'nav-list-item': NavListItem,
  },
  props: {
    footerRoutes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* css reset */
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  height: 10vh;
  width: 100vw;
}

/* css reset */

.the-footer-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  background-color: cornflowerblue;
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
