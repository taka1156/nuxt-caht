<template>
  <div>
    <base-text v-if="chats.length === 0">会話がありません。</base-text>
    <ul>
      <li v-for="(chat, index) in chats" :key="`chats_${index}`">
        <chat-ballon-box :chat="chat" />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';
import ChatBallonBox from '../../molcules/ChatBalloonBox/ChatBallonBox';

export default {
  name: 'ChatList',
  components: {
    'base-text': BaseText,
    'chat-ballon-box': ChatBallonBox,
  },
  props: {
    chats: {
      type: Array,
      required: true,
    },
  },
};
</script>
