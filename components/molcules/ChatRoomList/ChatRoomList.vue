<template>
  <div>
    <p v-if="rooms.length === 0">部屋が登録されていません。</p>
    <ul v-else>
      <li v-for="(room, index) in rooms" :key="`rooms_${index}`">
        <chat-room-box :room="room" :is-visible="isVisible" />
      </li>
    </ul>
  </div>
</template>

<script>
import ChatRoomBox from '../../molcules/ChatRoomBox/ChatRoomBox';

export default {
  name: 'ChatRoomList',
  components: {
    'chat-room-box': ChatRoomBox,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
      required: true,
    },
    rooms: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
