<template>
  <div>
    <account-btn v-if="!status" btntype="login" @account-click="stateChange" />
    <login-modal :is-open="isOpen" @select-provider="selectProvider" />
    <account-btn v-if="status" btntype="logout" @account-click="logOut" />
  </div>
</template>

<script>
import AccountBtn from '../../molcules/AccountBtn/AccountBtn';
import LoginModal from '../../molcules/LoginModal/LoginModal';

export default {
  name: 'AccountForm',
  components: {
    'account-btn': AccountBtn,
    'login-modal': LoginModal,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    stateChange() {
      this.isOpen = !this.isOpen;
    },
    logOut() {},
    selectProvider() {},
  },
};
</script>
