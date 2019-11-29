<template>
  <general-popup :isActive="isActivePopup">
    <div class="decide">
      <div class="decide__icon">
        <img :src="iconComputing" alt="icon">
      </div>
      <h4 class="decide__title"> {{getDecideDetail.title}} </h4>
      <h5 class="decide__category"> {{ getDecideDetail.category }} </h5>
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
          class="btn btn-primary">Join now!</button>
      </div>
    </div>
  </general-popup>
</template>

<script>
import generalPopup from '../UIs/generalPopup';
import sword from 'Image/sword.png';
import swords from 'Image/swords.png';
import shield from 'Image/shield.png';
import health from 'Image/health.png';
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
  },
  components:{
    generalPopup
  },
  computed:{
    isActivePopup(){
      if (this.$store.state.decideChoose) {
        return true;
      } else {
        return false
      }
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
      clearInterval(this.interval);
    },
    decreaseTime(){
      this.interval = setInterval(() => {
        this.widthBar = this.widthBar - 10;
        if(this.widthBar <= 0){
          clearInterval(interval);
        }
      }, 1000);
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
</style>