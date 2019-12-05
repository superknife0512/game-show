<template>
  <transition name="fly-in">
    <slot></slot>
  </transition>
</template>

<style lang="scss">
  .fly-in-enter-active {
    transition: all .5s ease;
  }
  .fly-in-leave-active {
    transition: all .5s ease;
  }
  .fly-in-enter, .fly-in-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: scale(.1) rotateY(120deg) rotateZ(30deg);
    opacity: 0;
    // opacity: 0;
  }
</style>