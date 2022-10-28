<template>
    <button class="btn" :class="[type ? `btn--${type}` : '', variation ? `btn--${variation}`: '', size ? `btn--${size}` : '']" >
        <slot/>
    </button>
  
</template>

<script>
import ButtonMixin from './ButtonMixin';
export default {
  mixins: [ButtonMixin]
}
</script>

<style lang="scss" scoped>
@import "@/static/css/variables";
.btn {
    all:unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 4.8rem;
    background: $color-primary;
    box-shadow: 0px .8rem 2.4rem rgba(146, 136, 224, 0.3);
    border-radius: .8rem;
    font-size: 1.4rem;
    line-height: 140%;
    color: $color-light;
    width:18rem;

    &--primary{
      min-width: 18rem;
    }

    &--outline {
      background: $color-light;
      color: $color-primary;
      border: 1px solid $color-primary;
    }

    &--secondary{
      background: $color-secondary;
    }

    &--icon {
      width:4.8rem;
    }

}


</style>