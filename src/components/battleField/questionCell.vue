<template>
  <figure 
    class="cell" 
    :class="bgComputing"
    @click="chooseDecide()">
    <h3>{{ number }}</h3>
  </figure>
</template>

<script>
export default {
  data(){
    return{
      isDone: null
    }
  },
  props: {
    number: Number,
    type: String
  },
  computed:{
    bgComputing(){
      switch (this.type) {
        case 'solo':
          return { 'bg-solo': true }
        case 'mate':
          return { 'bg-mate': true }
        case 'heal':
          return { 'bg-heal': true }
        case 'versus':
          return { 'bg-versus': true }
      }
    }
  },
  methods:{
    chooseDecide(){
      this.$store.commit('chooseDecide', {index: this.number - 1})
    }
  }
}
</script>

<style lang="scss">
@import 'globalStyle';
  .cell{
    cursor: pointer;
    padding: 3rem;
    height: 11.5rem;
    background-color: $color-versus;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    transition: all .3s;
    color: white;
    &:hover{
      transform: translateY(-5px);
      @include boxShadow(2.4px, .2);
    }
  }
  .bg-solo {
    background-color: $color-solo;
  }
  .bg-mate {
    background-color: $color-mate;
  }
  .bg-versus {
    background-color: $color-versus;
  }
  .bg-heal {
    background-color: $color-heal;
  }
  .disabled{
    background-color: $color-disabled;
  }
</style>