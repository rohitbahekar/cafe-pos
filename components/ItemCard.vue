<template>
  <div
    class="item-card"
    :class="[readOnly != undefined ? 'item-card--read-only' : '']"
  >
    <img v-if="item.image" :src="item.image" alt="" class="item-card__image" />
    <div v-else class="item-card__image item-card__default-image">
      {{ item.name }}
    </div>
    <p class="item-card__title">{{ item.name }}</p>
    <p class="item-card__details">
      <span class="item-card__price"
        >{{ item.currencySymbol }} {{ item.price }}</span
      >
      <span v-if="item.qtyAvailable" class="item-card__stock"
        >{{ item.qtyAvailable }} {{ item.qtyUnit }}</span
      >
    </p>
    <BaseButton id="edit-btn" size="full" @click.native="$emit('edit', item)" text-color="primary">
      <IconComponent name="edit" color="primary" class="icon-margin-right" />
      Edit dish</BaseButton
    >
  </div>
</template>

<script>
export default {
  props: {
    readOnly: undefined,
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/variables';

.item-card {
  background-color: $color-dark-bg-2;
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 22rem;
  border-radius: 0.8rem;
  align-items: center;
  text-align: center;
  border: 1px solid $color-dark-bg-1;

  &__image {
    margin: 2.4rem 4.7rem 0;
    width: 13.2rem;
    height: 13.2rem;
    object-fit: cover;
    border-radius: 50%;
  }

  &__default-image {
    border-radius: 50%;
    background-image: linear-gradient(35deg, $color-primary, $color-dark-bg-2);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    overflow: hidden;
    padding: 2rem;
  }

  &__title {
    font-weight: 500;
    font-size: 2rem;
    line-height: 130%;
    color: $color-light;
    margin-top: 1rem;
    width: 80%;
  }

  &__details {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 140%;
    color: $color-text-light;
    display: flex;
    width: max-content;
    margin: 0.8rem auto 0;
    column-gap: 2rem;
  }

  &--read-only {
    height: 26rem;
    width: 19.2rem;
    background-color: transparent;
    position: relative;
    z-index: 1;
    cursor: pointer;
    user-select: none;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 3.4rem;
      width: 100%;
      height: 22.6rem;
      border-radius: 1.6rem;
      background-color: $color-dark-bg-2;
      z-index: -1;
    }

    & > .item-card__image {
      margin: 0 4.7rem;
    }

    & > #edit-btn {
      display: none;
    }

    & > .item-card__details {
      flex-direction: column;
      row-gap: 0.4rem;

      & > .item-card__price {
        color: $color-light;
        font-size: 1.8rem;
      }

      & > .item-card__stock {
        color: $color-text-light;
        font-weight: 400;
      }
    }
  }
}

#edit-btn {
  margin-top: 0.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: rgba($color-primary, 0.2);
}
</style>
