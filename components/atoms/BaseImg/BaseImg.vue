<template>
  <img :src="imgUrl" :alt="imgAlt" class="base-img--extend" />
</template>

<script>
export default {
  name: 'BaseImg',
  props: {
    /**
     * 画像のURL
     */
    imgUrl: {
      type: String,
      required: true,
    },
    /**
     * 画像が表示できない時に使用する代替テキスト
     * (alt)
     */
    imgAlt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  display: block;
  margin: 0;
  padding: 0;
}
</style>
