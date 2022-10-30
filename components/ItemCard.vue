<template>
  <div class="item-card">
    <img src="/images/Image 1.png" alt="" class="item-card__image">
    <p class="item-card__title">Spicy seasoned seafood noodles</p>
    <p class="item-card__details">$ 2.29 . 20 Bowls</p>
    <BaseButton id="edit-btn" size="full" > <IconComponent name="edit" color="primary" class="icon-margin-right"/> Edit dish</BaseButton>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import '@/static/css/variables';

.item-card{
    background-color: $color-dark-bg-2;
    display: flex;
    flex-direction: column;
    height: 30rem;
    width: 22rem;
    border-radius: .8rem;
    align-items: center;
    text-align: center;

    &__image{
        margin: 2.4rem 4.7rem 0;
        width:13.2rem;
        height:13.2rem;
    }

    &__title{
        font-weight: 500;
        font-size: 2rem;
        line-height: 130%;
        color: white;
        margin-top: 1rem;
        width: 80%;
    }

    &__details{
        margin-top: .8rem;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 140%;
        color: $color-text-light
    }
}

#edit-btn{
    margin-top: .5rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: rgba($color-primary, 0.2);
    color: $color-primary;
}

</style>
