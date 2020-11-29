<template>
  <div>
    <form class="" @submit.prevent>
      <base-color-form
        :id="'ui-color'"
        :init-color="setting.backgroundColor"
        @set-color="setColor"
      >
        UIカラー
      </base-color-form>

      <div class="">
        <base-btn :btn-type="button" @btn-click="resetSetting()">Reset</base-btn>
        <base-btn :btn-type="button" @btn-click="saveSetting()">OK</base-btn>
      </div>
    </form>
  </div>
</template>

<script>
import BaseColorForm from '@/components/atoms/BaseColorForm/BaseColorForm';
import BaseBtn from '@/components/atoms/BaseBtn/BaseBtn.vue';

export default {
  name: 'Setting',
  components: {
    'base-color-form': BaseColorForm,
    'base-btn': BaseBtn,
  },
  data() {
    return {
      userSetting: {
        uiColor: '',
      },
    };
  },
  mounted() {
    //初期値をフォームに反映
    // this.$store.commit('setting/setUserSetting');
    this.userSetting.uiColor = this.colorSetting;
  },
  methods: {
    saveSetting() {
      localStorage.setItem('userSetting', JSON.stringify(this.userSetting));
      // this.$store.commit('setting/setUserSetting');
    },
    resetSetting() {
      this.userSetting.uiColor = 'forestgreen';
      this.saveSetting();
    },
  },
};
</script>
