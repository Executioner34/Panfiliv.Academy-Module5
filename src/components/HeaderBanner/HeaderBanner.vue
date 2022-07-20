<template>
  <section class="header-banner header-banner__logo" :style="styleObj">
    <h1 class="header-banner__title">BANNER</h1>
    <search-form> find </search-form>
  </section>
</template>

<script>
import SearchForm from "./SearchForm/SearchForm.vue";
export default {
  props: {
    imageURL: String,
  },
  components: {
    SearchForm,
  },
  data() {
    return {
      styleObj: {
        backgroundImage: `url(${this.imageURL})`,
      },
    };
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/_mixins.scss";
.header-banner {
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 130px;
  padding-bottom: 76px;
  &__logo {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__title {
    font-weight: 800;
    font-size: calcFluidFontSize(80, 120, 320, 1366);
    line-height: 146px;
    color: rgba(232, 234, 236, 1);
    text-transform: uppercase;
  }
}
</style>