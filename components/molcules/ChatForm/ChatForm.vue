<template>
  <div>
    <form
      v-if="!isOpen"
      class="chat-msg-form"
      :style="{ height: boxHeight }"
      @submit.prevent
    >
      <div class="chat-msg-form__textarea">
        <textarea
          v-model="inputMessage"
          placeholder="ctrl + Enterで送信。"
          class="col-9 form-control"
          :rows="rows"
          @keydown.ctrl.enter="sendMessage()"
        />
        <base-btn :btn-type="submit" @click="sendMessage()"> Send </base-btn>
      </div>
    </form>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
const DEFAULT_HEIGHT = 50;
const ROW_PER_HEIGHT = 25;

export default {
  name: 'ChatFrom',
  components: {
    'base-btn': BaseBtn,
  },
  data() {
    return {
      inputMessage: '',
      isOpen: false,
    };
  },
  computed: {
    rows() {
      if (this.inputMessage === '') {
        return 1;
      }
      const ROW = this.inputMessage.split('\n').length;
      return ROW < 5 ? ROW : 5;
    },
    boxHeight() {
      return `${(this.rows - 1) * ROW_PER_HEIGHT + DEFAULT_HEIGHT}px`;
    },
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.length <= 200 && this.inputMessage.length > 0) {
        const CHAT_MESSAGE = this.inputMessage;
        this.inputMessage = '';
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
