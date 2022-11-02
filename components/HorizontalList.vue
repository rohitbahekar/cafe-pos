<template>
  <div class="horizontal-list">
    <div class="horizontal-list__wrapper">
      <span
        v-for="(item, index) in items"
        :key="item"
        class="horizontal-list__item"
        :class="[index == selected ? 'horizontal-list__item--active' : '']"
        @click="handleSelection(index)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      // index of selected item
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.value,
    }
  },
  watch: {
    value(val) {
      this.selected = val
    },
  },
  methods: {
    handleSelection(index) {
      this.selected = index
      this.$emit('input', index)
      this.$emit('change', index)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/variables';
@import '@/static/css/animation';

.horizontal-list {
  overflow-y: hidden;
  overflow-x: auto;

  &__wrapper {
    height: 3.3rem;
    display: flex;
    column-gap: 3.2rem;
    border-bottom: 1px solid $color-dark;
  }

  &__item {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.96rem;
    height: 100%;
    position: relative;
    user-select: none;
    width: fit-content;

    &--active {
      color: $color-primary;

      &::before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 0.3rem;
        width: 60%;
        background-color: $color-primary;
        border-radius: 0.5rem;
      }
    }
  }
}
</style>
