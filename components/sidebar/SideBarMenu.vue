<template>
  <div class="sidebar-wrapper">
    <!-- Restaurant icon -->
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="logo"
    >
      <rect opacity="0.26" width="56" height="56" rx="12" fill="#EB966A" />
      <path
        d="M39.6668 11.3334H16.3335C13.5768 11.3334 11.3335 13.5767 11.3335 16.3334V21.0517C11.3335 22.8067 11.9702 24.4017 13.0002 25.6284V41.3334C13.0002 41.7754 13.1758 42.1993 13.4883 42.5119C13.8009 42.8244 14.2248 43 14.6668 43H28.0002C28.4422 43 28.8661 42.8244 29.1787 42.5119C29.4912 42.1993 29.6668 41.7754 29.6668 41.3334V33H36.3335V41.3334C36.3335 41.7754 36.5091 42.1993 36.8216 42.5119C37.1342 42.8244 37.5581 43 38.0002 43H41.3335C41.7755 43 42.1994 42.8244 42.512 42.5119C42.8246 42.1993 43.0002 41.7754 43.0002 41.3334V25.6267C44.0302 24.4017 44.6668 22.8067 44.6668 21.05V16.3334C44.6668 13.5767 42.4235 11.3334 39.6668 11.3334ZM41.3335 16.3334V21.0517C41.3335 22.9517 39.9185 24.5717 38.1818 24.6634L38.0002 24.6667C36.1618 24.6667 34.6668 23.1717 34.6668 21.3334V14.6667H39.6668C40.5868 14.6667 41.3335 15.415 41.3335 16.3334ZM24.6668 21.3334V14.6667H31.3335V21.3334C31.3335 23.1717 29.8385 24.6667 28.0002 24.6667C26.1618 24.6667 24.6668 23.1717 24.6668 21.3334ZM14.6668 16.3334C14.6668 15.415 15.4135 14.6667 16.3335 14.6667H21.3335V21.3334C21.3335 23.1717 19.8385 24.6667 18.0002 24.6667L17.8185 24.6617C16.0818 24.5717 14.6668 22.9517 14.6668 21.0517V16.3334ZM24.6668 34.6667H18.0002V29.6667H24.6668V34.6667Z"
        fill="url(#paint0_linear_412_5198)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_412_5198"
          x1="28.0002"
          y1="11.3334"
          x2="28.0002"
          y2="43"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EA9769" />
          <stop offset="1" stop-color="#EA6969" />
        </linearGradient>
      </defs>
    </svg>

    <template v-for="(menuItem, index) in items">
      <NuxtLink :key="menuItem.icon" :to="menuItem.route">
        <SideBarButton
          v-slot="slotProps"
          :is-active="activeIndex == index"
          @click.native="setActive(index)"
        >
          <IconComponent
            size="large"
            :name="menuItem.icon"
            class="menu-icon"
            :color="slotProps.isActive ? 'light' : 'primary'"
          />
        </SideBarButton>
      </NuxtLink>
    </template>
  </div>
</template>

<script>
import SideBarButton from '@/components/sidebar/SideBarButton.vue'
import IconComponent from '@/components/basic/IconComponent.vue'
export default {
  components: {
    SideBarButton,
    IconComponent,
  },
  data() {
    return {
      activeIndex: 0,
      items: [
        { icon: 'home', route: '/' },
        { icon: 'discount', route: '/' },
        { icon: 'dashboard', route: '/' },
        { icon: 'message', route: '/' },
        { icon: 'notification', route: '/' },
        { icon: 'setting', route: '/settings' },
        { icon: 'logout', route: '/' },
      ],
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/static/css/variables';
.sidebar-wrapper {
  width: 10.2rem;
  display: flex;
  flex-direction: column;
  background: $color-dark-bg-2;
  border-radius: 1.6rem;
  // padding-bottom: 2rem;
  padding-top: 0.8rem;
  max-height: 100vh;
  overflow-y: scroll;
}

.logo {
  align-self: center;
  min-height: 5.6rem;
  margin: 1.6rem 0;
}
</style>
