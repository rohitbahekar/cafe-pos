<template>
  <input v-if="!icon" v-bind="attributes" />
  <div v-else v-bind="attributes" class="input--icon">
    <IconComponent
      :name="icon"
      :color="iconColor"
      class="input__icon"
    ></IconComponent>
    <input
      v-bind="attributes"
      :type="type"
      :value="value"
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
      required: true
    },
    type: {
      type: String,
      default: 'text',
    },
    iconColor: {
      type: String,
      default: 'light',
    },
    value: {
      type: [String, Number],
      default: ''
    },
  },
  computed: {
    attributes() {
      return {
        class: ['input', this.small !== undefined ? 'input--small' : ''],
      }
    },
  },
}
</script>

<style class="scoped" lang="scss">
@import '@/static/css/variables';

.input {
  height: 4.8rem;
  min-width: 10rem;
  background-color: $color-dark;
  border: 0.1rem solid $color-dark;
  color: $color-light;
  padding: 1.4rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  width: 100%;
  outline: none;

  &::placeholder {
    color: $color-dark-grey;
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
    min-width: none;
    width: min-content;
  }

  &__icon {
    margin-right: 0.8rem;
  }

  &--icon {
    display: flex;
    align-items: center;
    padding: 0 1.4rem;

    & > input {
      border: none;
      outline: none;
      width: 100%;
      padding: 0;
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
