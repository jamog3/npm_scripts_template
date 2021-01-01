import { createApp, reactive } from 'vue';
import VueSmoothScroll from 'vue3-smooth-scroll';

const app = createApp({
  setup() {
    // data
    const state = reactive({
      isShowMenu: false,
    });

    // method
    const toggleMenu = (): void => {
      state.isShowMenu = !state.isShowMenu;
    };

    return {
      state,
      toggleMenu,
    };
  },
});

app.use(VueSmoothScroll, {
  duration: 300,
  updateHistory: false,
  easingFunction: 'easeInOutQuint',
});

app.mount('#app');
