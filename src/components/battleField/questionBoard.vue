<template>
  <div class="question__board">
    <question-cell
      v-for="(q,i) in questionData"
      :key="i"
      :number="i+1" 
      :type="q.type"/>
  </div>
</template>

<script>
import questionCell from "./questionCell";
export default {
  components:{
    questionCell
  },
  computed: {
    questionData(){
      return this.$store.state.questionData;
    }
  }
}
</script>

<style lang="scss">
  .question{
    &__board{
      display: grid;
      grid-template-columns: repeat(5,1fr);
      grid-gap: 2.3rem;
    }
  }
</style>