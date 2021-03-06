import Vuex from "vuex";
import Vue from 'vue';
import userData from "../assets/data/user";
import questionData from "../assets/data/questions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    turns: 0,
    userData: [],
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
      console.log(question);
      state.disabledQuestions = state.disabledQuestions.filter(ele=>{
        return ele.title !== question.title
      })
    },

    joinQuestion(state){
      state.questionContent = state.decideChoose;
    },

    clearQuestionContent(state){
      state.questionContent = null;
    },

    updateScore(state, payload) { // user name, score, type
      const player = state.userData.find(ele => ele.name === payload.name);
      if(payload.type === 'plus') {
        if(payload.img === 'cat' || payload.img === 'dog'){
          const score = payload.score + Math.floor(payload.score * 0.2);
          player.score += score
        } else {
          player.score += payload.score          
        }
      } else if(payload.type = 'minus') {
        if(payload.img === 'coat' || payload.img === 'koala'){
          const score = payload.score - Math.floor(payload.score * 0.2);
          player.score -= score
        } else {
          player.score -= payload.score          
        }
      }
    },

    addUser(state, payload){
      state.userData.push({
        ...payload,
        score: payload.img === 'eagle' || payload.img === 'rabbit' ? 75 : 51,
      });
    },

    saveGame(state){
      localStorage.setItem('questionData', JSON.stringify([...state.questionData]))
      localStorage.setItem('userData', JSON.stringify([...state.userData]))
      console.log('Has saved game');
    },

    setGame(state){
      const questionData = localStorage.getItem('questionData')
      const userData = localStorage.getItem('userData')
      console.log(questionData, userData);
      if(questionData && userData.length ){
        state.questionData = JSON.parse(questionData);
        state.userData = JSON.parse(userData)
      }
    }
  }
})