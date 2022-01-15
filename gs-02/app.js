const app = Vue.createApp({
  data() {
    return {
      about: "Events",
      last: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.last;
    },
    updateInfo(event, lastName) {
      this.last = event.target.value + lastName;
    },
  },
});