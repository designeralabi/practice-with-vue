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
    }
  }
});

app.mount('#user-goals');