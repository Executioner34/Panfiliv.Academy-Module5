<template>
  <header>
    <div class="nav__bar">
      <div class="nav__logo"></div>
      <nav class="nav__link-list">
        <router-link to="/" class="nav__link"></router-link>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './assets/scss/_variebles.scss';
@import './assets/scss/_mixins.scss';
@import './assets/scss/_global.scss';
</style>
