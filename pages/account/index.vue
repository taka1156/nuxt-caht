<template>
  <div>
    <account-form :status="status" :user-info="userInfo" @log-out="logOut" />
  </div>
</template>

<script>
import AccountForm from '@/components/organisms/AccountForm/AccountForm';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Account',
  components: {
    'account-form': AccountForm,
  },
  computed: {
    ...mapGetters('auth', ['status', 'userInfo']),
  },
  methods: {
    ...mapActions('auth', ['logOut']),
  },
};
</script>
