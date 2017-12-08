import Vue from 'vue';
import Router from 'vue-router';
import ButtonDesigner from '@/components/Button/ButtonDesigner';
import AlertDesigner from '@/components/Alert/AlertDesigner';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Button',
      component: ButtonDesigner,
    }, {
      path: '/Alert',
      component: AlertDesigner,
    },
  ],
});
