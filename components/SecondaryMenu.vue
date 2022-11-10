<template>
  <div class="secondary-menu">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="secondary-menu__item item"
        :class="[index == selectedIndex ? 'item--active' : '']"
        @click="selectedIndex = index"
      >
        <IconComponent :name="item.icon" color="light" class="item__icon" />
        <h3 class="item__title">{{ item.title }}</h3>
        <p class="item__description">{{ item.description }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    items:{
      type: Array,
      required: true
    },
    selected:{
      type: [Number, String],
      default: 0
    },
  },
  data(){
      return {
        selectedIndex: this.selected
      }
    },
    watch:{
      selected(val){
        this.selectedIndex = val
      },
      selectedIndex(val){
        this.$emit('changed', this.selectedIndex)
      }
    },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/variables';
.secondary-menu {
    height: 100%;
    background-color: $color-dark-bg-2;
    border-radius: 0.8rem;

    .item {
      padding: 2.4rem;
      display: grid;
      grid-template-columns: 1.6rem 1fr;
      column-gap: 0.8rem;
      row-gap: 0.4rem;
      cursor: pointer;
      grid-template-areas:
        'icon title'
        'icon description';

      &--active {
        background-color: rgba($color-primary, 0.26);
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 2.4rem;
          right: 0;
          height: 4rem;
          width: 0.4rem;
          background: $color-primary;
          border-radius: 30px;
        }
      }

      &__icon {
        grid-area: icon;
        margin-top: -0.4rem;
      }
      &__title {
        grid-area: title;
        color: $color-light;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 130%;
      }
      &__description {
        grid-area: description;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 140%;
        color: $color-text-light;
      }
    }
  }
</style>