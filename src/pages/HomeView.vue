<template>
  <main>
    <header-banner v-if="banners" :imageURL="banners.main.image"></header-banner>
  </main>
</template>

<script>
import { fetchBanners } from "../api";
import { useQuery } from "vue-query";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner.vue";
export default {
  components: {
    HeaderBanner,
  },
  data() {
    return {
      banners: null,
    };
  },
  created() {
    const { data } = this.useBannersQuery();
    this.banners = data;
  },
  watch: {
    $route: "useBannersQuery",
  },
  methods: {
    useBannersQuery() {
      return useQuery("banners", fetchBanners);
    },
  },
};
</script>

<style lang="scss">

</style>