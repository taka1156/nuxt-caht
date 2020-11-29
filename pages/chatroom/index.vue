<template>
  <div>
    <!--roomform追加-->
    <base-btn @btn-click="stateChange"> パスワード表示 </base-btn>
    <chat-room-list :is-visible="isVisible" :rooms="rooms" />
  </div>
</template>

<script>
import BaseBtn from '@/components/atoms/BaseBtn/BaseBtn';
import ChatRoomList from '@/components/molcules/ChatRoomList/ChatRoomList';

export default {
  name: 'ChatRoom',
  components: {
    'base-btn': BaseBtn,
    'chat-room-list': ChatRoomList,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    stateChange() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
