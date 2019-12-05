<template>
  <general-popup :isActive="isActivePopup">
    <div class="decide">
      <div class="decide__icon">
        <img :src="iconComputing" alt="icon">
      </div>
      <h4 class="decide__title"> {{getDecideDetail.title}} </h4>
      <h5 class="decide__category"> {{ getDecideDetail.category }} - {{ getDecideDetail.score}} </h5>
      <div class="progress">
        <div 
          class="progress-bar progress-bar-striped progress-bar-animated" 
          aria-valuenow="0" 
          aria-valuemin="0" 
          aria-valuemax="100" :style="{'width': `${widthBar}%`}"></div>
      </div>
      <div class="btn-group">
        <button 
          class="btn btn-danger"
          @click="disablePopup()">Get out</button>
        <button 
          class="btn btn-primary"
          @click="onJoin()"          
          :disabled="isDisableBtn">Join now!</button>
      </div>
      <audio class="none-display" autoplay ref="audioControl">
        <source :src="thinkingComputing" type="audio/mpeg" >
      </audio>
    </div>
  </general-popup>
</template>

<script>
import generalPopup from '../UIs/generalPopup';
import flyIn from '../animation/flyIn'

import sword from 'Image/sword.png';
import swords from 'Image/swords.png';
import shield from 'Image/shield.png';
import health from 'Image/health.png';

import versusThinkAudio from 'Audio/versus-thinking.mp3'
import soloThinkAudio from 'Audio/solo-thinking.mp3'
import mateThinkAudio from 'Audio/mate-thinking.mp3'
import healingAudio from 'Audio/healing.mp3'
export default {
  data(){
    return{
      widthBar: 0,
      interval: null
    }
  },
  mounted(){
    setTimeout(()=>{
      this.widthBar = 100
    },100)
    this.decreaseTime();
    this.$refs.audioControl.volume = .3
  },
  components:{
    generalPopup, 
    flyIn
  },
  computed:{
    thinkingComputing(){
      if(this.getDecideDetail.type === 'solo') {
        return soloThinkAudio
      } else if(this.getDecideDetail.type === 'heal') {
        return healingAudio
      } else if (this.getDecideDetail.type === 'versus' ) {
        return versusThinkAudio
      } else if(this.getDecideDetail.type === 'mate') {
        return mateThinkAudio
      }
    },

    isActivePopup(){
      if (this.$store.state.decideChoose) {
        return true;
      } else {
        return false
      }
    },

    isDisableBtn(){
      const type = this.$store.state.decideChoose.type;
      return type === 'heal'
    },

    getDecideDetail(){
      if(this.isActivePopup){
        return this.$store.state.decideChoose
      } else {
        return null
      }
    },

    iconComputing(){
      switch (this.getDecideDetail.type) {
        case 'solo':
          return sword
        case 'mate':
          return shield
        case 'heal':
          return health
        case 'versus':
          return swords
      }
    },
  },
  methods: {
    disablePopup(){
      this.$store.commit('clearDecideChoice');
      this.$store.commit('updateTurn');
      clearInterval(this.interval);
    },
    decreaseTime(){
      this.interval = setInterval(() => {
        this.widthBar = this.widthBar - 10;
        if(this.widthBar <= 0){
          clearInterval(this.interval);
        }
      }, 1000);
    },
    onJoin(){
      this.$store.commit('joinQuestion');
      this.$store.commit('updateTurn');
      this.$store.commit('clearDecideChoice');
    }
  }
}
</script>

<style lang="scss">
@import 'globalStyle';

  .decide{
    display: flex;
    flex-direction: column;
    align-items: center;
    // transform: translateY(-6rem);
    margin-top: -6rem;

    &__icon{
      height: 10rem;
      width: 10rem;
      background-color: #fff;
      @include boxShadow(2px, .4);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        height: 6rem;
        width: 6rem;
      }
    }

    &__title{
      margin-top: 2rem;
      font-size: 2rem;
      text-transform: uppercase;
    }
    &__category{
      margin-top: 0.5rem;
      text-transform: uppercase;
      font-size: 1.5rem;
      color: rgb(0, 153, 255);
      font-style: italic;
      font-weight: 700
    }

    .progress{
      width: 35rem;
      margin-top: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .btn-group{
      padding-top: 1.5rem;
      border-top: 1px solid rgba($color: #000000, $alpha: .2)
    }
    
  }

  .none-display {
    opacity: 0;
  }
</style>