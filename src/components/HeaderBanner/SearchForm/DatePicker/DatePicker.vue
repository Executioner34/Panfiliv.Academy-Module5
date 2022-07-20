<template>
  <div class="date-picker">
    <label :for="namePicker" class="date-picker__title">{{ title }}</label>
    <el-date-picker
      v-model="dateValue"
      type="date"
      :editable="false"
      v-on:change="updateModelValue"
      :name="namePicker"
      class="date-picker__input"
      :placeholder="placeholder"
      style="width: 140px"
      size="small"
    ></el-date-picker>
  </div>
</template>

<script>
import { ElDatePicker } from "element-plus";
export default {
  components: {
    ElDatePicker,
  },
  props: {
    modelValue: [Date, String],
    namePicker: String,
    placeholder: String,
    title: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      dateValue: "",
    };
  },
  methods: {
    updateModelValue(value) {
      if (value) {
        return this.$emit("update:modelValue", value.toISOString());
      }
      return this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variebles.scss";
.date-picker {
  display: flex;
  flex-direction: column;
}
.date-picker__title {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: $primaryColor;
}
.date-picker__input {
  .el-input__wrapper {
    padding-left: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .el-input__prefix {
    display: none;
  }
  .is-focus {
    box-shadow: none;
  }

  --el-select-input-focus-border-color: 0;
  --el-border-color: 0;
  --el-select-border-color-hover: 0;
}
</style>