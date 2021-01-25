<template>
  <div>
    <chat-msg-list :is-visible="isVisible" :rooms="rooms" />
    <!--chatform追加-->
  </div>
</template>

<script>
import ChatMsgList from '@/components/molcules/ChatList/ChatList';

export default {
  name: 'ChatId',
  components: {
    'chat-msg-list': ChatMsgList,
  },
};
</script>
