<template>
  <div>
    <article class="chat-room-box" @click="moveRoom(index)">
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
      <div v-if="userUid === room.uid && room.pass !== 'NONE' && isVisible">
        PASS[{{ room.pass }}]
      </div>
      <div v-else>{{ room.detail }}</div>
    </article>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ChatRoomBox',
  components: {
    'base-img': BaseImg,
  },
  props: {
    room: {
      type: Object,
      default: () => {},
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>
