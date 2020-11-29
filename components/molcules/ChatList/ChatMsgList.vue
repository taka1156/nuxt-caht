<template>
  <div>
    <p v-if="chats.length === 0">会話がありません。</p>
    <ul>
      <li v-for="(chat, index) in chats" :key="`chats_${index}`">
        <chat-ballon-box :chat="chat" />
      </li>
    </ul>
  </div>
</template>

<script>
import ChatBallonBox from '../../molcules/ChatBalloonBox/ChatBallonBox';

export default {
  name: 'ChatMsgList',
  components: {
    'chat-ballon-box': ChatBallonBox,
  },
  props: {
    chats: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
