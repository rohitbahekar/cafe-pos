<template>
  <ButtonBase v-bind="$props"> 
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3V12M12 21V12M12 12H21M12 12H3" stroke="#3B5162" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <slot/>
  </ButtonBase>
</template>

<script>
import ButtonBase from './ButtonBase.vue';
import ButtonMixin from './ButtonMixin';
export default {
  components: { ButtonBase },
  mixins: [ButtonMixin],
  props:{
    icon: {
      type: String,
      required: true,
    },
    iconPosition:{
      type: String,
      default: "left"
    },    
  },
}
</script>

<style>

</style>