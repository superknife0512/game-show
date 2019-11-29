import Vuex from "vuex";
import Vue from 'vue';
import userData from "../assets/data/user";
import questionData from "../assets/data/questions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    userData: [...userData],
    questionData: [...questionData],
    decideChoose: null,
    questionContent: null
  },

  mutations:{
    changeScore(state, payload){
      let user = state.userData.find(ele=>{
        return ele.name === payload.userName
      })
      if (payload.type === 'down'){
        user.score -= payload.amount
      } else {
        user.score += +payload.amount
      }
    },
    chooseDecide(state, payload){
      const choosenDecide = state.questionData[payload.index];
      state.decideChoose = choosenDecide
    },
    clearDecideChoice(state){
      state.decideChoose = null;
    }
  },
})