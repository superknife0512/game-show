<template>
  <div>
    <div class="top container">
      <v-header></v-header> 
      <cards-board></cards-board>
      <hr>
      <question-board></question-board>
      <div>
        <decide v-if="isActive"></decide>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from './components/UIs/header'
import cardsBoard from './components/cards/cardsBoard'
import questionBoard from './components/battleField/questionBoard'
import decide from './components/questionSets/decide'
// import generalPopup from './components/UIs/generalPopup'
export default {  
  components: {
    vHeader: vHeader,
    cardsBoard,
    questionBoard,
    decide
    // generalPopup
  },
  computed: {
    isActive(){
      return this.$store.state.decideChoose ? true : false;
    }
  }
}
</script>