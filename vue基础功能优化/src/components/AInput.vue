<template>
  <div>
    <input @input="handleInput" :value="value" :placeholder="placeholderValue" />
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value : {
      type: [String, Number],
      default: ''
    },
    placeholderValue: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('inputFun', value)
    }
  }
}
</script>

<style scoped>

</style>
