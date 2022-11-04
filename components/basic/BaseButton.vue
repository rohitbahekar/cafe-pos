<template>
  <button class="btn" :class="[
      variation ? `btn--${variation}` : '',
      size ? `btn--${size}` : '',
      type ? `btn--${type}` : '',
      textColor ? `btn--text-${textColor}` : '',
    ]" @click="$emit('click', $event)">
    <span class="animate-scale">
      <slot /></span>
  </button>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'medium',
      },
      type: {
        type: String,
        default: 'default',
      },
      variation: {
        type: String,
        default: 'primary',
      },
      textColor: {
        type: String,
        default: '',
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '@/static/css/variables';

  .btn {
    height: 4.8rem;
    background: $color-primary;
    // box-shadow: 0px 0.8rem 2.4rem rgba(146, 136, 224, 0.3);
    border-radius: 0.8rem;
    font-size: 1.4rem;
    line-height: 140%;
    color: $color-light;
    width: 18rem;
    font-weight: 500;
    cursor: pointer;

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    &--primary {
      min-width: 18rem;
      border: 1px solid transparent;
    }

    &--outline {
      background: $color-light;
      color: $color-primary;
      border: 1px solid $color-primary;

      &>span {
        color: $color-primary;
      }
    }

    &--secondary {
      background: $color-secondary;
      border: 1px solid $color-secondary;
    }

    &--outline-dark {
      background: $color-dark-bg-2;
      border: 1px solid $color-dark-bg-1;

      &>span {
        color: $color-primary;
      }
    }

    &--dark {
      background: $color-dark-bg-2;
      color: $color-light;
      border: 1px solid $color-dark-bg-1;

    }

    &--small {
      min-width: unset;
      width: auto;
      height: 34px;
      padding: 0.7rem 1.2rem;
    }

    &--full {
      width: 100%;
    }

    &--icon {
      min-width: 4.8rem;
      width: 4.8rem;
    }

    &--text-primary>span {
      color: $color-primary;
    }

    &--text-secondary>span {

      color: $color-secondary;
    }
  }

</style>
