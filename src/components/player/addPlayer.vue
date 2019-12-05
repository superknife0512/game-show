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
    <button class="btn btn-primary">Add player</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      name: '',
      avatar: '',
      optionList: ['cat', 'dog', 'koala', 'coat', 'eagle', 'rabbit']
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
  }
}
</script>

<style scoped>
  option{
    text-transform: capitalize;
  }
</style>