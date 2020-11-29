<template>
  <div>
    <div class="d-flex flex-column">
      <div class="chat-left">
        <base-img :img-url="chat.img" :img-alt="`${chat.name}アイコン`" />
        <div class="chat-balloon">
          <Nl2br tag="p" :text="chat.message"></Nl2br>
        </div>
        <p class="m-0">発言者:{{ chat.name }}</p>
        <p class="m-0">{{ dateFormat(chat.date) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ChatBallonBox',
  components: {
    'base-img': BaseImg,
  },
  props: {
    chat: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>
