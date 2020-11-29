<template>
  <div>
    <account-form />
  </div>
</template>

<script>
import AccountForm from '@/components/organisms/AccountForm/AccountForm';

export default {
  name: 'Account',
  components: {
    'account-form': AccountForm,
  },
};
</script>
