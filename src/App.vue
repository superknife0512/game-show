<template>
  <div>
    <div class="top container">
      <v-header @changePageEvent="changePage($event)"></v-header> 
      <div v-if="page === 'battle'">
        <vContent v-if="isActiveContent"></vContent>
        <v-turn></v-turn>
        <cards-board/>
        <hr>
        <question-board/>
        <div>
          <decide v-if="isActive"></decide>
        </div>
      </div>
      <div v-if="page === 'player'">
        <add-player/>   
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
import addPlayer from './components/player/addPlayer'
// import generalPopup from './components/UIs/generalPopup'
export default {  
  components: {
    vHeader: vHeader,
    cardsBoard,
    questionBoard,
    decide,
    vTurn,
    vContent,
    addPlayer
    // generalPopup
  },
  created(){
    this.$store.commit('setGame')
    setInterval(() => {
      this.$store.commit('saveGame')
    }, 4*60000);
  },
  data(){
    return {
      page: 'battle'
    }
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
          if(newValue - disQ.turn > 3 && disQ.type === 'heal'){
            const index = this.questionData.findIndex(ele => {
              return ele.title === disQ.title
            })
            this.$store.commit('enableDisable', {index})
          }
        })
      }
    }
  },
  methods:{
    changePage(page){
      this.page = page;
    }
  }
}
</script>