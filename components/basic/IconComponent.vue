<template>
  <div class="icon" :data-color="color" v-html="icon"></div>
</template>

<script>
  import iconsList from '@/data/icons.json'
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      icon() {
        return iconsList[this.name]
      },
    }
  }

</script>

<style lang="scss">
  @import "@/static/css/variables";

  .icon {
    margin-top: 4px;
    display: inline;
  }

  .icon svg {
    transform: scale(calc(20/24));
  }

  .icon[data-color="primary"]>svg >path {
    stroke: $color-primary;
    fill: $color-primary;
  }

  .icon[data-color="primary"]>svg >circle {
    stroke: $color-primary;
  }

  .icon[data-color="light"]>svg>path {
    stroke: $color-light;
    fill: $color-light;
  }

  .icon[data-color="light"]>svg >circle {
    stroke: $color-light;
  }

  .icon[data-color="secondary"]>svg>path {
    stroke: $color-secondary;
    fill: $color-secondary;
  }

  .icon[data-color="secondary"]>svg >circle {
    stroke: $color-secondary;
  }

  .icon[data-color="dark"]>svg>path {
    stroke: $color-dark;
    fill: $color-dark;
  }

  .icon[data-color="dark"]>svg >circle {
    stroke: $color-dark;
  }

</style>
