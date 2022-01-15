const app = Vue.createApp({
    data() {
        return {
            data: '',
            goals: []
        };
    },
    methods: {
        updateGoal(){
            this.goals.push(this.data);
        }
    },
});