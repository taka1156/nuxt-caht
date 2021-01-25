<template>
  <div>
    <modal-window
      :is-open="isOpen"
      :modal-title="`ログインプロバイダー`"
      @modal-close="stateChange"
    >
      <client-only>
        <!--ログアウト時に表示されるUI-->
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Now Loading...</div>
      </client-only>
    </modal-window>
  </div>
</template>

<script>
import { auth, authProviders } from '~/plugins/firebase';
import ModalWindow from '../../molcules/ModalWindow/ModalWindow';

export default {
  name: 'LoginModal',
  components: {
    'modal-window': ModalWindow,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    if (process.browser) {
      // ssr関連のエラー回避
      const firebaseui = require('firebaseui');

      auth.onAuthStateChanged(user => {
        if (user) {
          return;
        }
        //FirebaseUIログインの設定
        const uiConfig = {
          callbacks: {
            //ログインボタンが表示されるまでid=loader要素を表示
            uiShown: () => {
              document.getElementById('loader').style.display = 'none';
            },
            signInSuccessWithAuthResult: authResult => {
              this.logIn(authResult.user);
              return false;
            },
          },
          signInFlow: 'popup',
          //ログインプロバイダーはTwitter、Google, Github
          signInOptions: [
            firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
            authProviders.Twitter,
            authProviders.Google,
            authProviders.Github,
          ],
        };
        //ここまで設定

        //FirebaseUIのインスタンス作成
        //参照:(https://github.com/firebase/firebaseui-web/issues/216#issuecomment-459302414)
        //インスタンスの重複は許されないためすでに作成済みかチェック
        //(ログイン後->ログアウトで再呼び出し、Accountページから離脱して戻るなどをするとエラーになってた)
        const ui =
          firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);
      });
    }
  },
  methods: {
    stateChange() {
      this.$emit('state-change');
    },
    logIn(user) {
      this.$store.dispatch('auth/logIn', user);
      this.stateChange();
    },
  },
};
</script>
