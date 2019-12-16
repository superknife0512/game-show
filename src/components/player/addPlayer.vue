<template>
  <form @submit.prevent="onSubmit()">
    <hr>
    <h3>Let's add some player</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="name" class="form-control">
    </div>
    <div class="form-group">
      <label for="avatar">Select your avatar</label>
      <select class="form-control" v-model="avatar">
        <option v-for="(option, index) in optionList" :key="index">{{ option }}</option>
      </select>
    </div>
    <div class="alert alert-primary" v-if="avatar">
      <h3>Ability</h3>
      <p>
        {{abilityComputing}}
      </p>
    </div>
    <button class="btn btn-primary">Add player</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      name: '',
      avatar: '',
      optionList: ['coat', 'cat', 'rabbit', 'dog', 'koala','eagle', ]
    }
  },
  methods:{
    onSubmit(){
      this.$store.commit('addUser', {
        name: this.name,
        img: this.avatar
      })
      this.name = '';
      this.avatar = '';
    }
  },
  computed: {
    abilityComputing(){
      let sentence;  
      switch (this.avatar) {
        case 'cat':
        case 'dog':
          sentence = 'You can receive more than 20% score when you win'
          break;
        case 'coat':
        case 'koala':
          sentence = 'You will be deducted less than 20% score if you lose'
          break;
        case 'eagle':
        case 'rabbit':
          sentence = 'You start the game with 75 score'
          break;
      }
      return sentence
    }
  }
}
</script>

<style scoped>
  option{
    text-transform: capitalize;
  }
</style>