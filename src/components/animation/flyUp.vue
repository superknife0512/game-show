<template>
  <transition name="fly-up">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .fly-up-enter-active {
    transition: all .5s ease;
  }
  .fly-up-leave-active {
    transition: all .5s ease;
  }
  .fly-up-enter, .fly-up-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(100%);
    opacity: .1;
    // opacity: 0;
  }
</style>