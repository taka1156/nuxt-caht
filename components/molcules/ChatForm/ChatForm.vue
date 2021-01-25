<template>
  <div>
    <form
      v-if="!isOpen"
      class="chat-msg-form"
      :style="{ height: boxHeight }"
      @submit.prevent
    >
      <div class="chat-msg-form__textarea">
        <base-text-area
          v-model="inputMessage"
          :placeholder="`ctrl + Enterで送信。`"
          :rows="rows"
          @keydown.ctrl.enter="sendMessage()"
        />
        <base-btn :btn-type="`submit`" @click="sendMessage()"> Send </base-btn>
      </div>
    </form>
  </div>
</template>

<script>
import BaseTextArea from '../atoms/Input/BaseTextArea/BaseTextArea';
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
const DEFAULT_HEIGHT = 50;
const ROW_PER_HEIGHT = 25;

export default {
  name: 'ChatFrom',
  components: {
    'base-text-area': BaseTextArea,
    'base-btn': BaseBtn,
  },
  data() {
    return {
      inputChat: '',
      isOpen: false,
    };
  },
  computed: {
    rows() {
      if (this.inputChat === '') {
        return 1;
      }
      const ROW = this.inputChat.split('\n').length;
      return ROW < 5 ? ROW : 5;
    },
    boxHeight() {
      return `${(this.rows - 1) * ROW_PER_HEIGHT + DEFAULT_HEIGHT}px`;
    },
  },
  methods: {
    sendMessage() {
      if (this.inputChat.length <= 200 && this.inputChat.length > 0) {
        const CHAT_MESSAGE = this.inputChat;
        this.inputChat = '';
        this.$emit('send-msg', CHAT_MESSAGE);
      }
    },
  },
};
</script>

<style scoped>
.chat-msg-form {
  position: fixed;
  background-color: lightgray;
  height: 50px;
  width: 100%;
  right: 0;
  bottom: 0;
}
</style>
