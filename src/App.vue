<template>
  <div>
    <vContent v-if="isActiveContent"></vContent>
    <v-turn></v-turn>
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
import vTurn from './components/UIs/turn'
import vContent from './components/questionSets/content'
// import generalPopup from './components/UIs/generalPopup'
export default {  
  components: {
    vHeader: vHeader,
    cardsBoard,
    questionBoard,
    decide,
    vTurn,
    vContent
    // generalPopup
  },
  computed: {
    isActive(){
      return this.$store.state.decideChoose ? true : false;
    },
    turns(){
      return this.$store.state.turns;
    },
    disabledQuestions() {
      return this.$store.state.disabledQuestions;
    },
    questionData() {
      return this.$store.state.questionData;
    },    
    isActiveContent(){
      return this.$store.state.questionContent ? true : false
    }
  },
  watch:{
    turns(newValue, oldValue){
      if(newValue !== oldValue){
        this.disabledQuestions.forEach(disQ=>{
          if(newValue - disQ.turn > 3){
            const index = this.questionData.findIndex(ele => {
              return ele.title === disQ.title
            })
            console.log(index);
            this.$store.commit('enableDisable', {index})
          }
        })
      }
    }
  }
}
</script>