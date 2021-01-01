import { createApp, ref } from 'vue';

createApp({
  setup() {
    const message = ref('Hello World');
    return {
      text: message,
    };
  },
}).mount('#app');
