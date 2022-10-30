<template>
  <div id="wrapper">
    <div>
      <h2>Buttons</h2>
      <BaseButton> Hello Button </BaseButton>
      <BaseButton variation="outline"> Hello Button </BaseButton>
      <BaseButton variation="outline-dark"> Hello Button </BaseButton>
      <BaseButton variation="secondary"> Hello Button </BaseButton>
      <BaseButton type="icon">
        <IconComponent name="add" color="light" />
      </BaseButton>
      <BaseButton type="icon" variation="secondary">
        <IconComponent name="coin" color="light" />
      </BaseButton>
      <BaseButton type="icon" variation="outline">
        <IconComponent name="coin" color="primary" />
      </BaseButton>
      <BaseButton type="icon" variation="outline-dark">
        <IconComponent name="add" color="primary"
      /></BaseButton>
      <BaseButton variation="secondary">
        <IconComponent name="add" color="light" style="margin-right: 0.8rem" />
        Confirm</BaseButton
      >
      <BaseButton variation="outline">
        <IconComponent
          name="add"
          color="primary"
          style="margin-right: 0.8rem"
        />
        Confirm</BaseButton
      >
      <BaseButton variation="outline-dark">
        <IconComponent
          name="add"
          color="primary"
          style="margin-right: 0.8rem"
        />
        Confirm</BaseButton
      >
      <BaseButton variation="primary">
        <IconComponent name="add" color="light" style="margin-right: 0.8rem" />
        Confirm</BaseButton
      >
      <BaseButton size="small">Small</BaseButton>
      <BaseButton size="small" variation="outline">Small</BaseButton>
      <BaseButton size="small" variation="outline-dark"
        >Small with lengthy content</BaseButton
      >
    </div>

    <div>
      <h2>Input</h2>
      <BaseInput placeholder="Enter someting" />
      <BaseInput type="email" small />
      <BaseInput type="number" small />
      <BaseInput v-model="model" type="email" icon="restaurant" small />
      {{ model }}
    </div>

    <div style="grid-row:1/4">
      <h2>Sidebar</h2>
      <SideBarMenu />
    </div>

    <div>
      <h2>ItemCard</h2>
      <br>
      <ItemCard />
    </div>
  </div>
</template>

<script>
import SideBarMenu from '@/components/sidebar/SideBarMenu.vue'
import ItemCard from '@/components/ItemCard.vue'
export default {
  name: 'IndexPage',
  components: {
    SideBarMenu,
    ItemCard,
  },
  data() {
    return {
      model: '',
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: #111;
  color: white;
}

#wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
