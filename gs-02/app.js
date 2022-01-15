const app = Vue.createApp({
    data() {
        return {
            about: 'Events',
            last: ''
        };
    },
    methods: {
        updateInfo(event, lastName){
            this.last = event.target.value + lastName; 
        }
    },
});