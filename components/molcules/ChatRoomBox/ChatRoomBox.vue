<template>
  <div>
    <base-link :route-to="{ name: 'chatroom', prarams: { id: room.index } }">
      <article class="chat-room-box">
        <div class="chat-room-box__name">
          <div v-if="room.pass !== 'NONE'">
            <base-img
              :img-url="require('assets/img/ui/lock.svg')"
              :img-alt="`lockアイコン`"
            />
          </div>
          {{ room.roomName }}
        </div>
        スレ主:{{ room.userName }}
        <base-text v-if="userUid === room.uid && room.pass !== 'NONE' && isVisible">
          PASS[{{ room.pass }}]
        </base-text>
        <base-text v-else>{{ room.detail }}</base-text>
      </article>
    </base-link>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseText from '../../atoms/BaseText/BaseText';
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ChatRoomBox',
  components: {
    'base-link': BaseLink,
    'base-text': BaseText,
    'base-img': BaseImg,
  },
  props: {
    room: {
      type: Object,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
