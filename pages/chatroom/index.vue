<template>
  <div>
    <!--roomform追加-->
    <base-btn :btn-type="`button`" @btn-click="stateChange">
      パスワード表示
    </base-btn>
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
      rooms: [],
    };
  },
  methods: {
    stateChange() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
::v-deep .base-btn--extend {
  height: 30px;
  width: 150px;
  border: 1px solid cornflowerblue;
  border-radius: 15px;
  margin: 10px;
  color: cornflowerblue;
}

::v-deep .base-btn--extend:hover {
  background-color: cornflowerblue;
  color: white;
}
</style>
