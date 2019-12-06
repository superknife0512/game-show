<template>
  <div>
    <div class="top container">
      <v-header @changePageEvent="changePage($event)"></v-header> 
      <div v-if="page === 'battle'">
        <fly-up>
          <vContent v-if="isActiveContent" @endGameEvent="invokeAudio($event)"></vContent>
        </fly-up>
        <v-turn></v-turn>
        <cards-board/>
        <hr>
        <question-board/>
        <fly-in>
          <decide v-if="isActive"></decide>
        </fly-in>
      </div>
      <div v-if="page === 'player'">
        <add-player/>   
      </div>
      <audio class="none-display" ref="loseControl">
        <source :src="loseAudio" type="audio/mpeg" >
      </audio>
      <audio class="none-display" ref="winControl">
        <source :src="winAudio" type="audio/mpeg" >
      </audio>
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

import flyUp from './components/animation/flyUp'
import flyIn from './components/animation/flyIn'

import OhAudio from './assets/audio/Oh.mp3'
import YayAudio from './assets/audio/Yay.mp3'
export default {  
  components: {
    vHeader: vHeader,
    cardsBoard,
    questionBoard,
    decide,
    vTurn,
    vContent,
    addPlayer,
    flyUp,
    flyIn
    // generalPopup
  },
  created(){
    this.$store.commit('setGame')
    setInterval(() => {
      this.$store.commit('saveGame')
    }, 5*60000);
  },
  mounted(){
    this.$refs.loseControl.volume = .6;
    this.$refs.winControl.volume = .6;
  },
  data(){
    return {
      page: 'battle',
      winAudio: YayAudio,
      loseAudio: OhAudio
    }
  },
  computed: {
    isActive(){
      return this.$store.state.decideChoose ? true : false;
    },
    isActiveContent(){
      return this.$store.state.questionContent ? true : false
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
  },
  watch:{
    turns(newValue, oldValue){
      if(newValue !== oldValue){
        this.disabledQuestions.forEach(disQ=>{
          if(newValue - disQ.turn > 3 && disQ.type === 'heal'){
            const index = this.questionData.findIndex(ele => {
              return ele.title === disQ.title
            })
            console.log(index);
            this.$store.commit('enableDisable', {index})
          }
        })
      }
    }
  },
  methods:{
    changePage(page){
      this.page = page;
    },    
    invokeAudio(type){
      console.log(type);
      if(type === 'lose'){
        this.$refs.loseControl.play();
      } else if(type === 'win') {
        this.$refs.winControl.play()
      }
    }
  }
}
</script>