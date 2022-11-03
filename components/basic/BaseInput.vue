<template>
  <div
    class="input"
    :class="[
      size !== undefined ? 'input--' + size : '',
      icon ? 'input--icon' : '',
    ]"
  >
    <span
      class="control-buttons control-buttons--plus"
      @click.stop="onIncemrent"
      >+</span
    >
    <IconComponent
      v-if="icon"
      :name="icon"
      :color="iconColor"
      size="large"
      class="input__icon"
    ></IconComponent>
    <input
      v-bind="attributes"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('change', $event)"
    />
    <span
      class="control-buttons control-buttons--minus"
      @click.stop="onDecremrent"
      >-</span
    >
  </div>
</template>

<script>
import IconComponent from '@/components/basic/IconComponent'
export default {
  components: {
    IconComponent,
  },
  props: {
    size: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    iconColor: {
      type: String,
      default: 'light',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      internalValue: this.value,
    }
  },
  computed: {
    attributes() {
      return {
        type: this.type,
        value: this.internalValue,
        placeholder: this.placeholder,
      }
    },
  },
  watch: {
    value(val) {
      this.internalValue = val
    },
    internalValue(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    onIncemrent() {
      this.internalValue = parseFloat(this.value) + 1
    },
    onDecremrent() {
      const val = parseFloat(this.internalValue)
      if (val <= 0) return
      this.internalValue = val - 1
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/static/css/variables';

.input {
  height: 4.8rem;
  background: #2d303e;
  min-width: 10rem;
  border: 0.1rem solid $color-dark;
  color: $color-light;
  padding: 1.4rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  width: 100%;
  outline: none;

  &::placeholder {
    color: $color-text-light;
  }

  & > input[type='number']::-webkit-outer-spin-button,
  & > input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & > input {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    border-radius: 0.8rem;
  }

  .control-buttons {
    display: none;
  }

  &[data-show-buttons*='true'] {
    position: relative;
    & > input {
      text-align: center;
    }
    & > .control-buttons {
      display: inline;
      position: absolute;
      text-align: center;
      width: 100%;
      left: 0;
      line-height: 1rem;
      font-size: 1.6rem;
      cursor: pointer;
      user-select: none;
      color: $color-text-light;

      &:hover,
      &:focus:active {
        transition: all 0.3s;
        background-color: rgba(68, 68, 68, 0.682);
      }

      &--plus {
        top: 0;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
      }
      &--minus {
        bottom: 0;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
      }
    }
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &--small {
    min-width: unset;
    width: inherit;
  }

  &__icon {
    margin-right: 0.8rem;
  }

  &--icon {
    padding: 0;
    position: relative;

    & > .input__icon {
      position: absolute;
      left: 1.4rem;
      top: 1.2rem;
    }

    & > input {
      padding-left: 4.2rem;
      height: 100%;
    }
  }

  &--icon:focus-within,
  &:focus {
    outline: 2px solid lightblue;

    & > input {
      border: none;
      background: transparent;
      outline: none;
    }
  }
}
</style>
