<template>
  <div>
    <form class="setting-from" @submit.prevent="">
      <div class="setting-from__box">
        <base-label id="ui-color"> UIカラー </base-label>
        <base-select-input
          id="ui-color"
          v-model="userSetting.uiColor"
          name="uiColor"
          :options="colors"
        />
      </div>
      <div class="setting-from__box">
        <base-label id="persistence-type"> ログインの永続性 </base-label>
        <base-select-input
          id="persistence-type"
          v-model="userSetting.persistenceType"
          name="persistenceType"
          :options="persistenceTypes"
        />
      </div>

      <div class="setting-from__btns">
        <base-btn :btn-type="`button`" @btn-click="resetSetting">Reset</base-btn>
        <base-btn :btn-type="`button`" @btn-click="saveSetting">OK</base-btn>
      </div>
    </form>
  </div>
</template>

<script>
import BaseLabel from '@/components/atoms/BaseLabel/BaseLabel';
import BaseSelectInput from '@/components/atoms/Input/BaseSelectInput/BaseSelectInput';
import BaseBtn from '@/components/atoms/BaseBtn/BaseBtn.vue';
import { COLORS, PERSISTENCE_TYPES } from '@/constants/index.js';

export default {
  name: 'Setting',
  components: {
    'base-label': BaseLabel,
    'base-select-input': BaseSelectInput,
    'base-btn': BaseBtn,
  },
  data() {
    return {
      userSetting: {
        uiColor: 'red',
        persistenceType: 'none',
      },
    };
  },
  computed: {
    colors: () => COLORS,
    persistenceTypes: () => PERSISTENCE_TYPES,
  },
  mounted() {
    //初期値をフォームに反映
    // this.$store.commit('setting/setUserSetting');
    this.userSetting.uiColor = this.colorSetting;
    this.userSetting.persistenceType = this.persistenceType;
  },
  methods: {
    saveSetting() {
      console.log(this.userSetting);
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

<style scoped>
::v-deep .base-btn--extend {
  height: 30px;
  width: 100px;
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
  border-radius: 15px;
}

::v-deep .base-btn--extend:hover {
  background-color: cornflowerblue;
  color: white;
}

.setting-from {
  display: flex;
  flex-direction: column;
}

.setting-from__box {
  display: flex;
  flex-direction: column;
}

.setting-from__btns {
  display: flex;
  margin: 20px;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
