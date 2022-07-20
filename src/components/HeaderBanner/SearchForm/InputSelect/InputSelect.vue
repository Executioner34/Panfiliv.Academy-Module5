<template>
  <template v-if="countresList">
    <div class="input-select">
      <label :for="inputName" class="input-select__title">Location</label>
      <el-select
        v-model="countrySelect"
        :teleported="false"
        v-on:change="updateSelect"
        clearable
        fit-input-width
        value-key="name"
        :name="inputName"
        class="input-select__input"
        style="width: 223px"
        placeholder="Which city do you prefer?"
        size="small"
      >
        <el-option v-for="item in optionsList" :key="item.name" :value="item.name"></el-option
      ></el-select>
    </div>
  </template>
</template>

<script>
import { fetchLocationSorted } from "@/api";
import { useQuery } from "vue-query";
import { ElSelect } from "element-plus";
export default {
  components: {
    ElSelect,
  },
  props: {
    modelValue: String,
    inputName: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      countresList: null,
      countrySelect: "",
    };
  },
  created() {
    const { data } = this.useLocationQuery();
    this.countresList = data;
  },
  watch: {
    $route: "useLocationQuery",
  },
  computed: {
    optionsList() {
      return this.countresList.map((country) => ({
        name: country.name,
      }));
    },
  },
  methods: {
    useLocationQuery() {
      return useQuery("countres", fetchLocationSorted);
    },
    updateSelect(value) {
      return this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variebles.scss";
.input-select {
  display: flex;
  flex-direction: column;
}
.input-select__title {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: $primaryColor;
}
.input-select__input {
  .el-input__wrapper {
    padding: 0;
  }
  .el-input__suffix {
    display: none;
  }
  --el-select-input-focus-border-color: 0;
  --el-border-color: 0;
  --el-select-border-color-hover: 0;
}
</style>