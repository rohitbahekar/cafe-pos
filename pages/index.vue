<template>
  <div class="page homepage">
    <div class="homepage__left">
      <div class="header">
        <div class="header__left">
          <h1 class="restaurant_name">Shawarma Central</h1>
          <p class="header__date">Tuesday, 11 Nov 2022</p>
        </div>
        <div class="header__right">
          <BaseInput
            icon="search"
            placeholder="Search for food, coffee, etc."
          />
        </div>
      </div>
      <HorizontalList :items="categories" />
      <div class="content-card">
        <div class="content-card__header">
          <h2>Choose Dishes</h2>
          <BaseSelect>
            <option value="dine-in">Dine In</option>
            <option value="tk">Take away</option>
          </BaseSelect>
        </div>
        <div class="content-card__body">
          <ItemCard
            v-for="(item, index) in items"
            :key="'item' + index"
            :item="item"
            read-only
          />
          <ItemCard
            v-for="(item, index) in items"
            :key="'item' + index"
            :item="item"
            read-only
          />
        </div>
      </div>
    </div>
    <div class="homepage__right">
      <Billing />
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import { getItems } from '@/services/items'
import HorizontalList from '~/components/HorizontalList.vue'
import Billing from '~/components/billing/BillingMain.vue'
export default {
  name: 'IndexPage',
  head(){
    return {title: 'Home'}
  },
  components: {
    ItemCard,
    HorizontalList,
    Billing,
  },
  data() {
    return {
      model: '',
      items: getItems(),
      categories: ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill'],
    }
  },
}
</script>

<style lang="scss">
@import '@/static/css/variables';
@import '@/static/css/animation';

.homepage {
  display: grid;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  grid-template-columns: 1fr 41rem;

  &__left {
    padding: 2.4rem;
    display: grid;
    height: inherit;
    grid-template-rows: 6.5rem 3.3rem 1fr;
    grid-template-columns: 1fr;
    row-gap: 2.4rem;
    flex-direction: column;
    word-wrap: initital;
  }
}

.header {
  display: flex;
  justify-content: space-between;

  &__date {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: $color-text-light;
    margin-top: 4px;
  }
  & h1 {
    max-height: 3.9rem;
    overflow: hidden;
  }

  &__right {
    width: 22rem;
    padding: auto 0;
    display: flex;
    align-items: center;
  }
}

.content-card {
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  overflow: hidden;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__body {
    display: grid;
    column-gap: 2.8rem;
    grid-template-columns: repeat(auto-fill, 19.2rem);
    row-gap: 2.4rem;
    overflow-y: scroll;
    justify-content: center;
  }
}
</style>
