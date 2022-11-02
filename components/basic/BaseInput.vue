<template>
  <input
    v-if="!icon"
    v-bind="attributes"
    class="input"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('change', $event)"
  />
  <div v-else v-bind="attributes" class="input input--icon">
    <IconComponent
      :name="icon"
      :color="iconColor"
      size="large"
      class="input__icon"
    ></IconComponent>
    <input
      v-bind="attributes"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('change', $event)"
    />
  </div>
</template>

<script>
import IconComponent from '@/components/basic/IconComponent'
export default {
  components: {
    IconComponent,
  },
  props: {
    small: {
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
  computed: {
    attributes() {
      return {
        class: [this.small !== undefined ? 'input--small' : ''],
        type: this.type,
        value: this.value,
        placeholder: this.placeholder,
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/static/css/variables';

.input {
  & > input {
    background-color: transparent;
    height: 100%;
  }
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

  &input[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
      border: none;
      outline: none;
      width: 100%;
      padding-left: 4.2rem;
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
