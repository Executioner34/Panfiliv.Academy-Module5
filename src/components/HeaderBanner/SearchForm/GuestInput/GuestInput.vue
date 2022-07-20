<template>
  <div class="guest-input">
    <label for="guest-input" class="guest-input__title">Guests</label>
    <input
      type="number"
      placeholder="Add Guests"
      :value="modelValue"
      @input="$emit('update:modelValue', Number($event.target.value))"
      min="1"
      max="6"
      class="guest-input__input"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Number,
  },
  emits: ["update:modelValue"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variebles.scss";
@import "@/assets/scss/mixins";
.guest-input {
  display: flex;
  flex-direction: column;
}
.guest-input__title {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: $primaryColor;
}
.guest-input__input {
  @include textFont;
  font-size: 14px;
  width: 100px;
  height: 24px;
  color: $secondColor;
}
.guest-input__input,
.guest-input__input:focus,
.guest-input__input:active,
.guest-input__input:focus-visible {
  border: none;
  outline: none;
}
</style>