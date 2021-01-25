<template>
  <div class="Help">
    <div>
      <h1>ようこそ Chat アプリへ</h1>
      <img src="@/assets/img/undraw_chat.svg" />
      <p>このウェブページはFireBaseとVue.jsを利用して作られたチャットページです。</p>
      <p>好きなことを書いてください。</p>
      <h2>&lt;主な機能&gt;</h2>
      <section>
        <h3>HELP</h3>
        <p>使い方の説明のページです。</p>
      </section>
      <section>
        <h3>ACCOUNT</h3>
        <p>ログインやユーザー情報の更新を行うページです。</p>
        <p>
          ログインはTwitter、Google、Githubのアカウントを使用しています。<br />
          ユーザー情報更新はアカウントのアイコンや名前を更新します。<br />
        </p>
      </section>
      <section>
        <h3>CHATROOM</h3>
        <p>チャット部屋の作成及び、一覧を見ることができます。</p>
        <p>
          チャット部屋には、任意でパスワードの設定を行うことができ、スレ主がクリックすることで、パスワードの表示/非表示をすることができます。
        </p>
      </section>
      <p>さぁチャットを始めましょう</p>
      <img src="@/assets/img/undraw_beginchat.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help',
  data() {
    return {
      title: 'Help',
      icon: 'help',
    };
  },
};
</script>

<style scoped>
img {
  margin: 0 auto;
  height: 20%;
  width: 40%;
}

section {
  margin: 10px auto;
  padding: 0;
  border: 1px dotted cornflowerblue;
}

h3 {
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: cornflowerblue;
}

p {
  padding: 10px;
  text-align: left;
}
</style>
