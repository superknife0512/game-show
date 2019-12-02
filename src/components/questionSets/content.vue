<template>
  <full-window :isActive="isActive" @onClose="clearQuestionContent()">
    <div class="content">
      <div class="content__group">
        <h2 class="content__title">Question Title</h2>
        <div class="progress">
          <div 
            class="progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" 
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="120" style="width: 75%">75</div>
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
            class="content__arena--2">
              <figure v-for="ele in array2" :key="ele.name">{{ele.name}}</figure>
          </draggable>
        </div>
        <draggable 
          v-model="originalArr" 
          group="people" 
          @start="drag=true" 
          @end="drag=true" 
          class="content__arena--3">
          <figure v-for="ele in originalArr" :key="ele.name">{{ele.name}}</figure>
        </draggable>
        <button class="btn btn-primary mt-4">START</button>
      </div>
      <hr>
      <div class="content__area">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo ad aut quasi illum architecto, ab asperiores! Consequuntur autem in nihil totam aliquid, error, eligendi quia itaque nulla corporis quasi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde. Ratione quisquam mollitia aperiam fugiat, voluptate veniam deleniti accusantium assumenda amet voluptatem ipsum ad quae eum ex dolores exercitationem cupiditate.</p>
        <div class="content__block"></div>
      </div>
      <hr>
      <h3 class="mb-4">Who win?</h3>
      <div class="btn-group">
        <button class="btn btn-success">We win</button>
        <button class="btn btn-danger">Competitor win</button>
      </div>
    </div>
  </full-window>
</template>
<script>
import fullWindow from '../UIs/fullWindow'
import draggable from 'vuedraggable';
export default {
  mounted(){
    this.originalArr = this.$store.state.userData;
    this.questionContent = this.$store.state.questionContent
  },
  data(){
    return {
      originalArr: [],
      array1: [],
      array2: [],
      questionContent: null
    }
  },
  components:{
    fullWindow,
    draggable
  },
  methods:{
    clearQuestionContent() {
      this.$store.commit('clearQuestionContent')
    }
  },
  computed: {
    isActive(){
      return this.$store.state.questionContent ? true : false
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
      cursor: pointer;
      transition: all .2s;
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
    }
  }
</style>