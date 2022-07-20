<template>
  <div class="search-button">
    <input class="search-button__button" type="submit" v-bind="$attrs" value=" " />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/variebles";
.search-button {
  height: 100%;
  padding: 8px 0;
}
.search-button__button {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: $primaryColor;
  &:disabled {
    opacity: 0.5;
  }
}
</style>