<template>
  <div class="item">
    <div class="item__content" @click="showNote = !showNote">
      <img :src="item.image" class="item__thumbnail" />
      <div class="item__title">{{ item.name }}</div>
    </div>
    <BaseInput v-model="qty" type="number" size="small" data-show-buttons="true" />
    <div class="item__total">
      <div class="item__price">{{ item.currencySymbol }}{{ item.price }}</div>
      <span>{{ item.currencySymbol }}{{ itemTotal }}</span>
    </div>
    <BaseButton variation="outline-dark" type="icon" small>
      <IconComponent name="trash" color="primary" />
    </BaseButton>

    <template v-if="showNote">
      <BaseInput
        v-model="note"
        type="text"
        placeholder="Order Note.."
        class="modifier-input"
      />
      <div class="item__modifiers">
        <BaseButton
          type="icon"
          variation="outline-dark"
          class="modifier-btn"
          @click.native="note = 'Extra Spicy'"
        >
          <img src="/icons/chilli.png" alt="Extra Spicy" />
        </BaseButton>
        <BaseButton
          type="icon"
          variation="outline-dark"
          class="modifier-btn"
          @click.native="note = 'No Oninon Garlic'"
        >
          <img src="/icons/garlic.png" alt="No Oninon Garlic" />
        </BaseButton>
        <BaseButton
          type="icon"
          variation="outline-dark"
          class="modifier-btn"
          @click.native="note = 'Less Spicy'"
        >
          <img
            src="/icons/hollow-chilli.png"
            alt="Less Spicy"
          />
        </BaseButton>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      qty: 1,
      showNote: false,
      note: '',
    }
  },
  computed: {
    itemTotal() {
      let qty = 0;
      if(this.qty) qty = parseInt(this.qty)
      return this.item.price * qty
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/variables';
@import '@/static/css/animation';

.item {
  display: grid;
  grid-template-columns: 1fr 5rem 5rem 5.2rem;
  column-gap: 2rem;
  row-gap: 0.5rem;

  &__content {
    display: flex;
    user-select: none;
    cursor: pointer;
  }

  &__thumbnail {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    min-width: 4rem;
    margin-right: 0.8rem;
    object-fit: cover;
    background: white;
  }

  &__title {
    font-weight: 400;
    font-size: 1.4rem;
  }

  &__price {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 140%;
    color: $color-text-light;
  }

  &__total {
    align-self: center;
  }

  &__modifiers {
    display: flex;
    justify-content: flex-start;
    .modifier-btn {
      transform: scale(0.7);
      margin-left: -0.7rem;
    }
  }
  .modifier-input{
    grid-column: 1/3;
    margin-left: .2rem;
  }
}
</style>
