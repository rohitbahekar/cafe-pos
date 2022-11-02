<template>
  <div class="item">
    <div class="item__content" @click="showNote = !showNote">
      <img :src="item.image" class="item__thumbnail" />
      <div class="item__title">{{ item.name }}</div>
    </div>
    <BaseInput v-model="qty" type="number" small />
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
        style="grid-column: 1/3"
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
            src="https://img.icons8.com/external-others-ghozy-muhtarom/32/000000/external-vegetable-fruits-and-vegetable-outline-others-ghozy-muhtarom-4.png"
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
      return this.item.price * parseInt(this.qty)
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
}
</style>
