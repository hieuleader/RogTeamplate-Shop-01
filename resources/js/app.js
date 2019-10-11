require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import routes from './routes'
import usersStore from './store/usersStore'
import VueI18n from 'vue-i18n'
import Notifications from 'vue-notification'
import i18n from './lang/i18n'

Vue.use(VueRouter);
Vue.use(Notifications);


const router = new VueRouter({
    routes,
});
window.events = new Vue();

const app = new Vue({
    el: '#app',
    render: h => h(App),
    i18n,
    router,
    store: usersStore
});

export default app
