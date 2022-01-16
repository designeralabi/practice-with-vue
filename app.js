const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset(){
      this.name = '';
    }
  },
  watch:{
    counter(value){
        if (value > 50){
          this.counter = 0;
        }else{

        }
    }
  },
  computed:{
    fullName(){
      // prints how many time code runs
      console.log('running.....');
      //if the name is empty reset fullName to empty
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'DOE';
    }
  }
});

app.mount('#events');
