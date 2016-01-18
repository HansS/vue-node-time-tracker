import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/Home.vue';
import TimeEntries from './components/TimeEntries.vue';
import LogTime from './components/LogTime.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter();

// Filters
Vue.filter('timeFormat', (time) => moment.duration(time, 'ms').format('h[h] m[m]'));
Vue.filter('dateFormat', (date) => moment().format('MMM D, YYYY'));


// Pointing routes to the components they should use
router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries,

    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
});

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
});

router.start(App, '#app');