<template>
  <full-window 
    :isActive="true" 
    @closeEvent="clearQuestionContent()">
    <div class="content">
      <div class="content__group">
        <h2 class="content__title">{{ questionContent.title }}</h2>
        <div class="progress">
          <div 
            class="progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" 
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="120" 
            :style="{'width': widthComputing +'%'}">
            {{remainingTime}}
          </div>
        </div>
      </div>
      <hr>
      <h5 class="mb-4">Choose your competitor</h5>
      <div class="content__arena">
        <div class="content__group">
          <draggable 
            v-model="array1" 
            group="people" 
            @start="drag=true" 
            @end="drag=true" 
            class="content__arena--1">
              <figure v-for="ele in array1" :key="ele.name">{{ele.name}}</figure>       
          </draggable>
          <draggable 
            v-model="array2" 
            group="people" 
            @start="drag=true" 
            @end="drag=true" 
            class="content__arena--2"            
            v-if="questionContent.type === 'versus'">
              <figure v-for="ele in array2" :key="ele.name">{{ele.name}}</figure>
          </draggable>
          <input 
            type="number" class="form-control content__form" 
            max="30" v-model.number="betScore" 
            placeholder="Bet score here (max 30)"
            v-if="questionContent.type === 'solo'">
        </div>
        <draggable 
          v-model="originalArr" 
          group="people" 
          @start="drag=true" 
          @end="drag=true" 
          class="content__arena--3">
          <figure v-for="ele in originalArr" :key="ele.name">{{ele.name}}</figure>
        </draggable>
        <button 
          class="btn mt-4"
          :class="{'btn-primary': !isStart, 'btn-danger': isStart}"
          @click="isStart ? onStop() : onStart()"
          :disabled="array1.length + array2.length < 1">
          {{isStart ? 'STOP' : 'START'}}
        </button>
      </div>
      <hr>
      <div class="content__area">
        <div v-html="questionContent.content"></div>
        <fly-up>
          <div class="content__block" v-if="!isStart"></div>
        </fly-up>
      </div>
      <hr>
      <h3 class="mb-4">Who win?</h3>
      <div class="btn-group mb-8">
        <button 
          class="btn btn-success"
          @click="onEndGame('win')"
          :disabled="array1.length + array2.length < 1">You win</button>
        <button 
          class="btn btn-danger"
          @click="onEndGame('lose')"
          :disabled="array1.length + array2.length < 1">You lose</button>
      </div>
    </div>
    <audio class="none-display" ref="audioControl" loop>
      <source :src="audioComputing" type="audio/mpeg" >
    </audio>
    <audio class="none-display" autoplay ref="openControl">
      <source :src="openAudio" type="audio/mpeg" >
    </audio>
    <audio class="none-display" ref="endControl">
      <source :src="endAudio" type="audio/mpeg" >
    </audio>
  </full-window>
</template>
<script>
import fullWindow from '../UIs/fullWindow'
import draggable from 'vuedraggable';
import flyUp from '../animation/flyUp'

import Intense1 from 'Audio/intense-1.mp3';
import Intense2 from 'Audio/intense-2.mp3';
import Intense3 from 'Audio/intense-3.mp3';
import openAudio from 'Audio/open-question.mp3'
import endAudio from 'Audio/end.mp3'
export default {
  created(){
    this.originalArr = this.$store.state.userData;
    this.questionContent = this.$store.state.questionContent;
  },
  mounted(){
    this.$refs.openControl.volume = .4
  },
  data(){
    return {
      originalArr: [],
      array1: [],
      array2: [],
      questionContent: null,
      interval: null,
      remainingTime: null,
      isStart: false,
      betScore: '',
      openAudio,
      endAudio
    }
  },
  components:{
    fullWindow,
    draggable,
    flyUp
  },
  methods:{    
    onEndGame(type){
      if(this.questionContent.type === 'mate'){
        this.changeScore(this.questionContent.score, type);
      } else if (this.questionContent.type === 'solo'){
        this.changeScore(this.betScore, type);
      } else if (this.questionContent.type === 'versus') {
        this.changeScore(this.questionContent.score, type)
        this.changeScore(this.questionContent.score, type, 'lose', this.array2)
      }
      const index = this.questionsList.findIndex(ele => ele.title === this.questionContent.title);
      console.log(index)
      this.$store.commit('disableQuestion', {index});
      this.clearQuestionContent()
      this.$emit('endGameEvent', type)
    },

    changeScore(scoreSource, type, firstCondition = 'win', array = this.array1){
      let payloadType;
      array.forEach(player => {
        if(type === firstCondition) {
          payloadType = 'plus'
        } else {
          payloadType = 'minus'
        }
        this.$store.commit('updateScore', {
          name: player.name,
          score: scoreSource,
          type: payloadType
        })
      })
    },

    clearQuestionContent() {
      this.$store.commit('clearQuestionContent');
      clearInterval(this.interval);
    },
    remainingTimeCalculating(){
      if(this.remainingTime === null){
        this.remainingTime = this.fullTime;
      }
      this.interval = setInterval(()=>{
        this.remainingTime = this.remainingTime - 1
      }, 1000)
    },
    onStart(){
      this.remainingTimeCalculating();
      this.isStart = true;
      this.$refs.audioControl.play();
    },
    onStop(){
      clearInterval(this.interval);
      this.isStart = false
      this.$refs.audioControl.pause();
    }
  },
  computed: {
    fullTime(){
      return this.questionContent.time;
    },    
    widthComputing(){
      return Math.floor((this.remainingTime/this.fullTime)*100)
    },
    questionsList(){
      return this.$store.state.questionData
    },
    audioComputing(){
      if(this.questionContent.type === 'solo') {
        return Intense1;
      } else if (this.questionContent.type === 'mate') {
        return Intense3
      } else if (this.questionContent.type === 'versus'){
        return Intense2
      }
    }
  },
  watch: {
    remainingTime(value){
      if(value < 1 && typeof value === 'number'){
        this.$refs.endControl.play()
        this.onStop();
      }
    }
  }
}
</script>

<style lang="scss">
@import 'globalStyle';
  %arena {
    height: 4rem;
    width: 34rem;
    border: .2rem solid rgba($color: #473f39, $alpha: .4);
    border-radius: .2rem;
    display: flex;
    align-items: center;
    padding: .5rem;

    figure{
      padding: .5rem 1.5rem;
      background-color: rgb(226, 226, 226);
      border-radius: 4px;
      align-items: center;
      display: inline-block;
      margin-bottom: 0;
      transition: all .2s;
      cursor: pointer;
      &:not(:last-child){
        margin-right: 1rem;
      }
      &:hover {
        transform: translateY(-3px);
      }
    }
  }
  .content{
    &__title{
      text-transform: capitalize;
      margin-right: 1.5rem;
      font-style: italic;
      font-size: 2.3rem;
      width: 18rem;
    }
    &__arena{
      &--1{
        margin-right: 2rem;
        @extend %arena;
        border: .2rem solid rgba($color: #9c923a, $alpha: .4);

      }
      &--2{
        @extend %arena;
        border: .2rem solid rgba($color: #9c6729, $alpha: .4);

      }
      &--3{
        @extend %arena;
        width: 100%;
      }
    }
    &__group{
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      .progress {
        width: 75%;
        height: 1.5rem;
        font-size: 1.2rem
      }
    }
    &__block{
      background-color: #fff;
      width: 100%;  
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      @include boxShadow(2px, .2)
    }
    &__area{
      position: relative;
      div{
        ul, ol{
          li{
            font-size: 1.2rem
          }
        }
      }
    }
    &__form{
      width: 40rem;
    }
  }
</style>