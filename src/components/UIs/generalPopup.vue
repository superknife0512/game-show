<template>
  <div class="genPopup__backdrop" v-if="isActive">
    <div class="genPopup" v-if="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isActive: Boolean
  }
} 
</script>

<style lang="scss">
  @import 'globalStyle';
  .genPopup{
    padding: 2rem;
    background-color: #fff;
    margin: 0 3rem;
    max-width: 60rem;
    min-width: 50rem;
    text-align: center;
    border-radius: 10px;

    @include boxShadow(6px, .2);
    &__backdrop{
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba($color: #000000, $alpha: .6);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      z-index: 1000;
    }
  }
</style>