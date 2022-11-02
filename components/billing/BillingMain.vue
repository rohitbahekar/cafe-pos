<template>
  <div class="billing">
    <h2 class="billing__number">Orders #34562</h2>
    <div class="billing__type">
      <BaseButton size="small" variation="primary">Dine In </BaseButton>
      <BaseButton size="small" variation="outline-dark">To Go </BaseButton>
      <BaseButton size="small" variation="outline-dark">Delivery </BaseButton>
    </div>
    <div class="item-list">
      <div class="item-list__header">
        <span>Item</span>
        <span>Qty</span>
        <span>Price</span>
        <span>Actions</span>
      </div>
      <BillingItem
        v-for="(item, index) in items"
        :key="'billitem' + index"
        :item="item"
        class="item-list__item"
      />
    </div>
    <div class="billing__footer">
      <div class="footer-item">
        <div class="footer-item__title">Discount</div>
        <div class="footer-item__value">$0</div>
      </div>
      <div class="footer-item footer-item--last">
        <div class="footer-item__title">Sub total</div>
        <div class="footer-item__value">$0</div>
      </div>
      <BaseButton size="full">Continue to Payment</BaseButton>
    </div>
  </div>
</template>

<script>
import BillingItem from '@/components/billing/BillingItem'
import { getItems } from '@/services/items'
import BaseButton from '@/components/basic/BaseButton.vue'
export default {
  components: {
    BillingItem,
    BaseButton,
  },
  data() {
    return {
      items: getItems(),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/animation';
@import '@/static/css/variables';

.billing {
  padding: 2.4rem;
  background: $color-dark-bg-2;
  color: $color-light;
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  justify-content: flex-start;
  overflow-y: hidden;

  .item-list {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    display: grid;
    row-gap: 2.4rem;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;

    &__header {
      display: grid;
      grid-template-columns: 1fr 5rem 5rem 5.5rem;
      column-gap: 2rem;
      border-bottom: 1px solid $color-dark-bg-1;
      padding-bottom: 2.4rem;
      width: 100%;
    }
  }

  .billing__footer {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    .footer-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4.2rem;
      margin-bottom: 2rem;

      &--last {
        margin-bottom: 4.2rem;
      }
    }
  }
}
</style>
