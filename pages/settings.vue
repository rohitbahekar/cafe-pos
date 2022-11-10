<template>
  <div class="page settings-page">
    <h1 class="heading">Settings</h1>
    <SecondaryMenu :items="menuItems" selected="2" />

    <div class="content-card">
      <div>
        <div class="content-card__header">
          <h2>Product Management</h2>
          <BaseButton variation="dark">
            <IconComponent name="option" color="light" />Manage
            Categories</BaseButton
          >
        </div>
        <HorizontalList :items="categories" class="horizontal-list" />
      </div>
      <div class="content-card__body">
        <div class="add-item">
          <IconComponent name="add" color="primary" size="large" />
          <p>Add new dish</p>
        </div>
        <ItemCard
          v-for="(item, index) in items"
          :key="'item' + index"
          :item="item"
        />
      </div>
      <div class="content-card__footer">
        <BaseButton variation="outline-dark"> Discard Changes</BaseButton>
        <BaseButton variation="primary"> Save Changes</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalList from '@/components/HorizontalList.vue'
import ItemCard from '@/components/ItemCard.vue'
import { getItems } from '~/services/item'
import SecondaryMenu from '@/components/SecondaryMenu.vue'
export default {
  name: 'Seti',
  components: {
    HorizontalList,
    ItemCard,
    SecondaryMenu,
  },
  layout: 'main',
  data() {
    return {
      items: getItems(),
      menuItems: [
        {
          icon: 'appereance',
          title: 'Appearance',
          description: 'Dark and Light mode, Font size',
        },
        {
          icon: 'restaurant',
          title: 'Restaurant',
          description: 'Dark and Light mode, Font size',
        },
        {
          icon: 'discount',
          title: 'Products Management',
          description: 'Manage your product, pricing, etc',
        },
        {
          icon: 'notification',
          title: 'Notifications',
          description: 'Customize your notifications',
        },
        {
          icon: 'security',
          title: 'Security',
          description: 'Configure Password, PIN, etc',
        },
        {
          icon: 'aboutus',
          title: 'About Us',
          description: 'Find out more about Posly',
        },
      ],
      categories: ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill'],
    }
  },
  head() {
    return {
      title: 'Settings',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/variables';

.settings-page {
  display: grid;
  padding: 2.4rem;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  grid-template-columns: 27.5rem 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 2.4rem;
  column-gap: 2.4rem;

  .heading {
    grid-column: 1/3;
  }

  .content-card {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    background-color: $color-dark-bg-2;
    border-radius: 0.8rem;
    padding: 2.4rem 0;
    overflow: hidden;
    grid-template-rows: auto 1fr auto;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 0 2.4rem;
    }

    &__body {
      display: grid;
      column-gap: 1.6rem;
      grid-template-columns: repeat(auto-fill, 22rem);
      row-gap: 1.6rem;
      overflow-y: scroll;
      justify-content: center;

      .add-item {
        height: 30rem;
        width: 22rem;
        border-radius: 0.8rem;
        border: 1px dashed $color-primary;
        display: flex;
        flex-direction: column;
        row-gap: 1.6rem;
        align-items: center;
        justify-content: center;
        & p {
          font-weight: 600;
          font-size: 1.6rem;
          line-height: 140%;
          color: $color-primary;
        }
      }
    }

    &__footer {
      margin-top: 4.8rem;
      padding: 0 2.4rem;
      & > button:first-child {
        margin-right: 0.8rem;
      }
    }
  }
}
</style>
<style lang="scss">
.settings-page {
  .horizontal-list {
    margin-top: 2.4rem;
    & .horizontal-list__item:first-child {
      margin-left: 2.4rem;
    }
  }
}
</style>
