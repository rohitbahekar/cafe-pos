<template>
  <div
    class="select-wrapper"
    :class="[small !== undefined ? 'select-wrapper--small' : '']"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99976 13.3333C9.80976 13.3333 9.6206 13.2691 9.46643 13.1399L4.46643 8.97328C4.11309 8.67911 4.06476 8.15328 4.35976 7.79995C4.65393 7.44661 5.17893 7.39911 5.53309 7.69328L10.0089 11.4233L14.4773 7.82745C14.8356 7.53911 15.3606 7.59578 15.6489 7.95411C15.9373 8.31245 15.8806 8.83661 15.5223 9.12578L10.5223 13.1491C10.3698 13.2716 10.1848 13.3333 9.99976 13.3333"
        fill="white"
      />
      <mask
        id="mask0_149_221"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="4"
        y="7"
        width="12"
        height="7"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.99976 13.3333C9.80976 13.3333 9.6206 13.2691 9.46643 13.1399L4.46643 8.97328C4.11309 8.67911 4.06476 8.15328 4.35976 7.79995C4.65393 7.44661 5.17893 7.39911 5.53309 7.69328L10.0089 11.4233L14.4773 7.82745C14.8356 7.53911 15.3606 7.59578 15.6489 7.95411C15.9373 8.31245 15.8806 8.83661 15.5223 9.12578L10.5223 13.1491C10.3698 13.2716 10.1848 13.3333 9.99976 13.3333"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_149_221)">
        <rect width="20" height="20" fill="white" />
      </g>
    </svg>

    <select
      v-bind="attributes"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    >
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: String,
      default: undefined,
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    attributes() {
      const attributes = {}
      if (this.value) attributes.value = this.value
      return attributes
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/css/variables';

.select-wrapper {
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: fit-content;
  min-width: 10rem;
  height: 4.8rem;
  background-color: $color-dark-bg-2;

  &,
  & > select {
    border-radius: 0.8rem;
  }

  & > select {
    height: 100%;
    background: transparent;
    border: 0.1rem solid $color-dark;
    font-weight: 500;
    color: $color-light;
    padding: 1.4rem;
    font-size: 1.4rem;
    width: 100%;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding-left: 4.4rem;
  }

  & > svg {
    position: absolute;
    top: 1.4rem;
    left: 1.4rem;
  }

  &--small {
    min-width: unset;
    width: 8rem;
  }
}
</style>
