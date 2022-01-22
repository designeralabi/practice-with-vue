const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: []
     };
  },
  computed:{
    checker(){
      if (this.enteredGoalValue !== ''){
        return true;
      }
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeList(index){
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');