<template>
  <div>
    <base-text v-if="rooms.length === 0">部屋が登録されていません。</base-text>
    <ul v-else>
      <li v-for="(room, index) in rooms" :key="`rooms_${index}`">
        <chat-room-box :room="room" :is-visible="isVisible" />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';
import ChatRoomBox from '../../molcules/ChatRoomBox/ChatRoomBox';

export default {
  name: 'ChatRoomList',
  components: {
    'base-text': BaseText,
    'chat-room-box': ChatRoomBox,
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    rooms: {
      type: Array,
      required: true,
    },
  },
};
</script>
