<template>
  <div class="page homepage">
    <div class="header">
        <div class="header__left">
          <h1 class="restaurant_name">Shawarma Central</h1>
          <p class="header__date" >Tuesday, 11 Nov 2022</p>
        </div>
        <div class="header__right">
          <BaseInput icon="search" placeholder="Search for food eg. Coffee Burger" />
        </div>
    </div>

    <div class="horizontal-list ">
      <span class="horizontal-list__item horizontal-list__item--active">Hot Dishes</span>
      <span class="horizontal-list__item">Cold Dishes</span>
      <span class="horizontal-list__item">Soup</span>
      <span class="horizontal-list__item">Grill</span>
    </div>

    <ItemCard :item="item" read-only/>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
export default {
  name: 'IndexPage',
  components: {
    ItemCard,
  },
  data() {
    return {
      model: '',
      item:{
        id: 1,
        name: 'Spicy seasoned seafood noodles',
        genericName: "seafood noodles",
        image: '/images/Image 1.png',
        price: 69,
        currencySymbol: '₹',
        qtyAvailable: 20,
        qtyUnit: 'bowls'
      },
      item2:{
        id: 1,
        name: 'Spicy seasoned seafood noodles',
        genericName: "seafood noodles",
        image: 'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=150',
        price: 69,
        currencySymbol: '₹',
        qtyAvailable: 20,
        qtyUnit: 'bowls'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/variables';
@import '@/static/css/global';

.homepage{
  display: grid;
  row-gap: 2rem;
  grid-template-rows: min-content;
}

.header{
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  height:6.5rem;

  &__date{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color:$color-text-light;
    margin-top:4px;
  }
  &__right{
    width: 22rem;
    padding: auto 0;
    display: flex;
    align-items: center;
  }
}

.horizontal-list{
  margin: 0 2rem;
  height: 3.3rem;
  display: flex;
  column-gap: 3.2rem;
  border-bottom: 1px solid $color-dark;
  &__item{
    @extend .animate-scale;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.96rem;
    height:100%;
    position: relative;
    user-select: none;

    &--active{
      color: $color-primary;
      &::before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        height:.3rem;
        width:60%;
        background-color: $color-primary;
        border-radius: .5rem;
      }
    }
  }
}
</style>
