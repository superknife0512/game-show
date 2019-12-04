<template>
  <div class="challenge" v-if="isActive">
    <div class="container">
      <img :src="closeImg" alt="img" class="challenge__close" @click="onClose()">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import closeImg from 'Image/close.png'
export default {
  data(){
    return{
      closeImg
    }
  },
  props: {
    isActive: Boolean
  },
  methods:{
    onClose(){
      this.$emit('closeEvent')
    }
  }
}
</script>
<style lang="scss">
  .challenge {
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;
    padding: 3.4rem 0;

    &__close{
      height: 3rem;
      width: 3rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
    }
  }
</style>