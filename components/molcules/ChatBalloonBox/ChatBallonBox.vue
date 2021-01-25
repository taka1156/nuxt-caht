<template>
  <div>
    <div class="d-flex flex-column">
      <div class="chat-left">
        <base-img :img-url="chat.img" :img-alt="`${chat.name}アイコン`" />
        <div class="chat-balloon">
          <nl-2br tag="p" :text="chat.message" />
        </div>
        <p class="m-0">発言者:{{ chat.name }}</p>
        <p class="m-0">{{ dateFormat(chat.date) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Nl2br from 'vue-nl2br';
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ChatBallonBox',
  components: {
    'nl-2br': Nl2br,
    'base-img': BaseImg,
  },
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dateFormat() {
      return function (date) {
        return new Date(date).toLocaleDateString('ja-JP');
      };
    },
  },
};
</script>
