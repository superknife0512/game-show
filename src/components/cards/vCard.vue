<template>
  <figure class="vCard">
    <div class="vCard__avatar">
     <img :src="imgs" :alt="imgName">
     <h5>{{ userName }}</h5>
    </div>
    <div class="vCard__info">
        <div class="progress mb-2">
          <div 
            class="progress-bar" 
            :style="styleWidth" 
            :class="bgComputing"
            aria-valuemin="0" 
            :aria-valuemax="score">
            {{score}}
          </div>
        </div>

        <input type="number" class="form-control mb-2" placeholder="Score" v-model="amount">

        <div class="btn-group">
          <button 
            class="btn btn-danger" 
            @click="changeScore('down')"
            :disabled="canSubtract">-</button>
          <button 
            class="btn btn-success"
            @click="changeScore('up')"
            :disabled="score >= 100">+</button>
        </div>
    </div>
  </figure>
</template>

<script>
import catImg from 'Image/cat.jpg';
import dogImg from 'Image/dog.jpg';
import koalaImg from 'Image/koala.jpg';
import coatImg from 'Image/coat.jpg';
import eagleImg from 'Image/eagle.jpg';
import rabbitImg from 'Image/rabbit.jpg';
export default {
  data(){
    return {
      amount: 0
    }
  },

  props:{
    imgName: {
      type: String
    },
    userName: {
      type: String
    },
    score: {
      type: Number
    }
  },

  methods:{
    changeScore(type){
      this.$store.commit('changeScore', {
        userName: this.userName,
        amount: this.amount,
        type,
      })
      this.amount = 0
    },
  },

  computed: {
    imgs(){
      switch (this.imgName) {
        case 'dog':
          return dogImg
        case 'cat':
          return catImg
        case 'koala':
          return koalaImg
        case 'coat':
          return coatImg
        case 'eagle':
          return eagleImg
        case 'rabbit':
          return rabbitImg
      }
    },

    bgComputing(){
      if(this.score <= 50 && this.score > 25){
        return { 'bg-warning': true }
      } else if (this.score <= 25){
        return { 'bg-danger': true }
      }
    },  

    canSubtract(){
      if(this.score > this.amount){
        return false
      } else return true
    },

    styleWidth(){
      return {'width': this.score+'%'}
    }
  }
}
</script>

<style lang="scss">
  @import 'globalStyle';
  .vCard{
    padding: 2rem;
    @include boxShadow(2px, .2);
    display: flex;
    flex-direction: column;
    align-items: center;

    &__info{
      text-align: center;
    }

    &__avatar{
      margin-right: 1rem;
      text-align: center;
      img{
        height: 6rem;
        width: 6rem;
        object-fit: cover;
        border-radius: 50%;
      }
      h5{
        color: rgb(6, 143, 255);
        text-transform: capitalize;
        font-style: italic;
        margin-top: 0.3rem;
      }
    }
  }
</style>