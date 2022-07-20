<template>
  <header>
    <div class="nav__bar">
      <div class="nav__logo">logo</div>
      <nav class="nav__link-list">
        <router-link to="/" class="nav__link">Find a Property</router-link>
        <router-link to="/" class="nav__link">Share Stories</router-link>
        <router-link to="/" class="nav__link">Rental Guides</router-link>
        <router-link to="/" class="nav__link">Download Mobile App</router-link>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./assets/scss/_variebles.scss";
@import "./assets/scss/_mixins.scss";
@import "./assets/scss/_global.scss";

#app {
}

header {
  width: 100%;
  height: 80px;
  background-color: rgba(239, 240, 242, 1);
  .nav__bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 23px 80px 0px;
  }
  .nav__logo {
    @include titleFont;
    font-weight: 800;
    font-size: calcFluidFontSize(24, 35, 320, 1366);
    line-height: 122%;
    text-transform: uppercase;
    margin-right: 133px;
  }
  .nav__link {
    margin-right: 30px;
  }
}
</style>
