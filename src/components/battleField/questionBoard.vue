<template>
  <div class="question__board">
    <question-cell
      v-for="(q,i) in questionData"
      :key="i"
      :number="i+1" 
      :type="q.type"
      :isDisable="q.isDisable"/>
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
      grid-column-gap: 2.2rem;
      grid-row-gap: 1.5rem;
    }
  }
</style>