<template>
  <div class="mt-4 board">
    <v-card 
      v-for="(user, i) in users" 
      :key="i"
      :imgName="user.img"
      :userName="user.name"
      :score="user.score"></v-card>
  </div>
</template>

<script>
import vCard from './vCard'
export default {
  components: {
    vCard
  },
  computed:{
    users(){
      return this.$store.state.userData
    }
  } 
}
</script>

<style lang="scss">
  .board{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
</style>