<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{food}}
  </div>
</template>
<script>
export default {
  name: 'about',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>

<style scoped>

</style>
