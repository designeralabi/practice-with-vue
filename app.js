const app = Vue.createApp({
    data() {
        return {
          isVisible: false,
        };
    },
    methods: {
        toggleBtn(){
            this.isVisible = !this.isVisible;
        }
    },
});

app.component("first-component", {
  template: `
        <li>
          <h2>Tanuel Lorenz</h2>
          <button @click="toggleBtn">Show Details</button>
          <ul v-if="isVisible">
            <li><strong>Phone:</strong> 01234 5678 991</li>
            <li><strong>Email:</strong> manuel@localhost.com</li>
          </ul>
        </li>
    `,
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleBtn() {
      this.isVisible = !this.isVisible;
    },
  },
});


app.mount("#app");
