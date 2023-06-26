
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import Calculator from './Calculator.vue';


const app = createApp({});

app.component('calculator-component', Calculator);

app.mount("#app");
