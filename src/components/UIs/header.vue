<template>
  <nav class="nav mt-4 mb-2"> 
    <button class="btn btn-primary mr-2" 
      @click="onChangePage('battle')"> Battle Field </button>
    <button class="btn btn-warning mr-4"
      @click="onChangePage('player')"> Add People </button>
    <button class="btn btn-danger"
      @click="resetGame()"> Reset game </button>
  </nav>  
</template>

<script>
export default {
  methods:{
    onChangePage(page){
      this.$emit('changePageEvent', page)
    },
    resetGame(page){
      const result = confirm('Are you sure reset game');
      if (result) {
        localStorage.removeItem('userData');
        localStorage.removeItem('questionData')
        location.reload()
      }
    }
  }
}
</script>

<style lang="scss">
  .nav{
    display: flex;
    justify-content: center
  }
</style>