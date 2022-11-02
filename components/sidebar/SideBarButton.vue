<template>
  <button class="sidebar-button" role="button">
    <!-- Background curve -->
    <svg
      v-if="isActive"
      width="93"
      height="105"
      viewBox="0 0 93 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24C0 17.3726 5.37258 12 12 12H92V92H12C5.37259 92 0 86.6274 0 80V24Z"
        fill="#252836"
      />
      <path
        d="M88.5 8C92.5 4 92 0 92 0V12H80C80 12 84.5 12 88.5 8Z"
        fill="#252836"
      />
      <path
        d="M88.0098 95.51C84.0098 91.51 80.0098 92.01 80.0098 92.01H92.0098V104.01C92.0098 104.01 92.0098 99.51 88.0098 95.51Z"
        fill="#252836"
      />
    </svg>

    <div
      class="sidebar-button__content animate-scale"
      :class="[isActive ? 'sidebar-button__content--active' : '']"
    >
      <slot :is-active="isActive" />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/static/css/variables';

.sidebar-button {
  position: relative;
  margin-left: 1.2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.sidebar-button,
svg {
  height: 10.2rem;
  width: 9.2rem;
}

svg {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  // width: 100%;
  // height: 100%;
}

.sidebar-button__content {
  position: absolute;
  top: 0;
  left: 0;
  height: 5.6rem;
  width: 5.6rem;
  margin: 2.4rem;
  margin-left: 1.2rem;
  margin-top: 2.2rem;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-button__content--active {
  transition: background-color 0.3s;
  border-radius: 0.8rem;
  background-color: $color-primary;
}
</style>
