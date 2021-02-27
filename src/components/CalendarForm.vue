<template>
  <form @submit.prevent="submit">
    <div class="input-block">
      <div class="input-block__radio">
        <input type="radio" id="single" value="single" v-model="mode">
        <label for="single">Single</label>
      </div>
      <div class="input-block__radio">
        <input type="radio" id="multi" value="multi" v-model="mode">
        <label for="multi">Multi</label>
      </div>
      <div class="input-block__radio">
        <input type="time" id="start" value="multi" v-model="start">
      </div>
      <div class="input-block__radio">
        <input type="time" id="end" value="multi" v-model="end">
      </div>
      <button
        type="submit"
      >
        Save Changes
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    name: "CalendarForm",
    data() {
      return {
        mode: 'single',
        start: null,
        end: null
      }
    },
    methods: {
      submit() {
        if (this.start > this.end) {
          alert('Not valid')
          return
        }
        this.$emit('on-submit', {
          mode: this.mode,
          start: this.start,
          end: this.end
        })
        this.mode = 'single'
        this.start = null
        this.end = null
      }
    }
  }
</script>

<style lang="scss">
  .input-block {
    display: flex;
    align-items: center;
    max-width: 1060px;
    margin: 10px auto;
    &__radio {
      margin-right: 10px;
    }
  }
</style>
