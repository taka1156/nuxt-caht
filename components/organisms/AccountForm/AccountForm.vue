<template>
  <div>
    <user-icon :status="status" :user-info="userInfo" />
    <account-btn v-if="!status" :btn-label="`login`" @account-click="stateChange" />
    <login-modal
      :is-open="isOpen"
      @select-provider="selectProvider"
      @state-change="stateChange"
    />
    <account-btn v-if="status" :btn-label="`logout`" @account-click="logOut" />
  </div>
</template>

<script>
import UserIcon from '../../molcules/UserIcon/UserIcon';
import AccountBtn from '../../molcules/AccountBtn/AccountBtn';
import LoginModal from '../../organisms/LoginModal/LoginModal';

export default {
  name: 'AccountForm',
  components: {
    'user-icon': UserIcon,
    'account-btn': AccountBtn,
    'login-modal': LoginModal,
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
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    stateChange() {
      this.isOpen = !this.isOpen;
    },
    logOut() {
      this.$emit('log-out');
    },
    selectProvider() {},
  },
};
</script>
