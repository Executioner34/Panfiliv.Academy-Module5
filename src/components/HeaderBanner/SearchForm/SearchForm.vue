<template>
  <article class="search-form">
    <h2 class="search-form__title"><slot></slot></h2>
    <form @submit.prevent="formSubmit" class="search-form__form">
      <input-select input-name="country-select" v-model="country"></input-select>
      <div class="vl"></div>
      <date-picker
        v-model="dateCheckIn"
        name-picker="date-picker-in"
        placeholder="Add dates"
        title="Check In"
      ></date-picker>
      <div class="vl"></div>
      <date-picker
        v-model="dateCheckOut"
        name-picker="date-picker-out"
        placeholder="Add dates"
        title="Check Out"
      ></date-picker>
      <div class="vl"></div>
      <guest-input v-model="guests" @change="isDisabledButton"></guest-input>
      <search-button :disabled="isDisabled"></search-button>
    </form>
  </article>
</template>

<script>
import { postForm } from "@/api";
import InputSelect from "./InputSelect/InputSelect.vue";
import DatePicker from "./DatePicker/DatePicker.vue";
import GuestInput from "./GuestInput/GuestInput.vue";
import SearchButton from "./SearchButton/SearchButton.vue";

export default {
  components: {
    InputSelect,
    DatePicker,
    GuestInput,
    SearchButton,
  },
  data() {
    return {
      country: "",
      dateCheckIn: "",
      dateCheckOut: "",
      guests: 0,
      isDisabled: true,
    };
  },
  methods: {
    isDisabledButton() {
      if (this.country && this.dateCheckIn && this.dateCheckOut && this.guests) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    formSubmit(event) {
      postForm({
        location: this.country,
        checkIn: this.dateCheckIn,
        checkOut: this.dateCheckOut,
        guest: this.guests,
      });
      this.resetForm();
    },
    resetForm() {
      this.country = "";
      this.dateCheckIn = "";
      this.dateCheckOut = "";
      this.guests = 0;
      this.isDisabled = true;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_mixins.scss";
.search-form {
  margin-top: 93px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__title {
    padding-left: 30px;
    text-transform: uppercase;
  }
  &__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 17px;
    width: 794px;
    height: 70px;
    padding-left: 30px;
    padding-right: 8px;
    border-radius: 35px;
    background: #ffffff;
    .vl {
      height: 30px;
      border-left: 1px solid #dddddd;
      margin-right: 17px;
    }
  }
}
</style>