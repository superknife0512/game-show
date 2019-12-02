import Vuex from "vuex";
import Vue from 'vue';
import userData from "../assets/data/user";
import questionData from "../assets/data/questions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    turns: 0,
    userData: [...userData],
    questionData: [...questionData],
    decideChoose: null,
    questionContent: null,
    disabledQuestions: [],
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
    updateTurn(state){
      state.turns += 1;
    },

    chooseDecide(state, payload){
      const choosenDecide = state.questionData[payload.index];
      state.decideChoose = choosenDecide;
    },
    clearDecideChoice(state){
      state.decideChoose = null;
    },

    disableQuestion(state, payload){
      const question = state.questionData[payload.index];
      question.isDisable = true;
      state.disabledQuestions.push({
        ...question,
        turn: state.turns
      })
    },
    enableDisable(state,payload){
      const question = state.questionData[payload.index];
      question.isDisable = false;
      state.disabledQuestions = state.disabledQuestions.filter(ele=>{
        ele.title !== question.title
      })
    },

    joinQuestion(state){
      state.questionContent = state.decideChoose;
    },

    clearQuestionContent(state){
      state.questionContent = null;
    }
  }
})