<template>
  <div class="App">
    <header>
      <the-header-nav
        :header-routes="headerRoutes"
        :status="status"
        :user-info="userInfo"
      />
    </header>
    <div class="container">
      <main>
        <transition name="slide-in-up" mode="out-in">
          <nuxt />
        </transition>
      </main>
      <footer>
        <the-footer-nav :footer-routes="footerRoutes" />
      </footer>
    </div>
  </div>
</template>

<script>
import TheHeaderNav from '@/components/organisms/TheHeaderNav/TheHeaderNav';
import TheFooterNav from '@/components/organisms/TheFooterNav/TheFooterNav';
import { HEADER_ROUTES, FOOTER_ROUTES } from '@/constants/index.js';
import { mapGetters } from 'vuex';

export default {
  components: {
    'the-header-nav': TheHeaderNav,
    'the-footer-nav': TheFooterNav,
  },
  data() {
    return {
      headerRoutes: HEADER_ROUTES,
      footerRoutes: FOOTER_ROUTES,
    };
  },
  computed: {
    ...mapGetters('auth', ['status', 'userInfo']),
  },
};
</script>

<style scoped>
/* css reset */
header,
footer {
  padding: 0;
  margin: 0;
}

/* css reset */
.App {
  text-align: center;
}

.container {
  margin: 100px auto 0;
}

main {
  min-height: 100vh;
  padding: 0;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  main {
    width: 60vw;
  }
}

.slide-in-up-enter {
  opacity: 0;
  transform: translate(0, 100px);
}

.slide-in-up-enter-to {
  opacity: 1;
}

.slide-in-up-enter-active {
  transition: all 1s 0s ease;
}

.slide-in-up-leave {
  opacity: 1;
  transform: translate(0, 0);
}

.slide-in-up-leave-to {
  opacity: 0;
  transform: translate(0, -100px);
}

.slide-in-up-leave-active {
  transition: all 0.2s 0s ease;
}
</style>
