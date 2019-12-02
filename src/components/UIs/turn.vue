<template>
  <div class="turn">
    <h2> {{ turns}} </h2>
    <p>Turns</p>
  </div>
</template>
<script>
export default {
  computed:{
    turns(){
      return this.$store.state.turns;
    }
  }
}
</script>

<style lang="scss">
  .turn{
    position: fixed;
    top: .2rem;
    left: .2rem;
    color: #ff6600;
    padding: 1rem 1.5rem;
    border: 1rem solid #ff6600;
    border-radius: 1rem;
    opacity: .3;
    text-align: center;
    transform: scale(.7);
    h2{
      font-weight: 700;
      font-size: 4rem;
    }
    p{
      font-size: 2rem;
    }
  }
</style>