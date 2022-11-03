<template>
  <div class="page df-row center">
    <div class="df-col">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-if="error.statusCode >= 500">Server Error</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
}
.center {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
