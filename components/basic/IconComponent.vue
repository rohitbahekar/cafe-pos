<template>
  <div
    class="icon"
    :data-color="color"
    :data-name="name"
    :class="['icon--' + size]"
    v-html="icon"
  ></div>
</template>

<script>
import iconsList from '@/data/icons.json'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    icon() {
      return iconsList[this.name]
    },
  },
}
</script>

<style lang="scss">
@import '@/static/css/variables';

.icon {
  margin-top: 4px;
  display: inline;

  & svg, &--medium {
    transform: scale(calc(20 / 24));
  }

  &--small {
    & svg {
      transform: scale(calc(16 / 24));
    }
  }

  &--large {
    margin-top: 0;
    & svg {
      transform: scale(1);
    }
  }

  &[data-color='primary'] {
    & > svg > path {
      fill: $color-primary;
    }
    & > svg > circle,
    &[data-name='add'] > svg > path {
      stroke: $color-primary;
    }
  }

  &[data-color='light'] {
    & > svg > path {
      fill: $color-light;
    }
    & > svg > circle,
    &[data-name='add'] > svg > path {
      stroke: $color-light;
    }
  }
  &[data-color='dark'] {
    & > svg > path {
      fill: $color-dark;
    }
    & > svg > circle,
    &[data-name='add'] > svg > path {
      stroke: $color-dark;
    }
  }
  &[data-color='secondary'] {
    & > svg > path {
      fill: $color-secondary;
    }
    & > svg > circle,
    &[data-name='add'] > svg > path {
      stroke: $color-secondary;
    }
  }
}
</style>
