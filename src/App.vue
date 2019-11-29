<template>
  <div>
    <div class="top container">
      <v-header></v-header> 
      <cards-board></cards-board>
      <hr>
      <question-board></question-board>
    </div>
  </div>
</template>

<script>
import vHeader from './components/UIs/header'
import cardsBoard from './components/cards/cardsBoard'
import questionBoard from './components/battleField/questionBoard'
export default {
  data(){
    return {
    }
  },    
  components: {
    vHeader: vHeader,
    cardsBoard,
    questionBoard
  }
}
</script>