import Vue from 'vue';
import Router from 'vue-router';
import CreateElement from '@/pages/CreateElement';
import ButtonDesigner from '@/components/Button/ButtonDesigner';
import AlertDesigner from '@/components/Alert/AlertDesigner';
import RadioDesigner from '@/components/Form/Radio/RadioDesigner';
import CheckboxDesigner from '@/components/Form/Checkbox/CheckboxDesigner';
import SelectDesigner from '@/components/Form/Select/SelectDesigner';
import BannerDesigner from '@/components/Banner/BannerDesigner';
import TableOfContentDesigner from '@/components/TableOfContent/TableOfContentDesigner';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: CreateElement,
    }, {
      path: '/Button',
      component: ButtonDesigner,
    }, {
      path: '/Alert',
      component: AlertDesigner,
    }, {
      path: '/Form/Radio',
      component: RadioDesigner,
    }, {
      path: '/Form/Checkbox',
      component: CheckboxDesigner,
    }, {
      path: '/Form/Select',
      component: SelectDesigner,
    }, {
      path: '/TableOfContent',
      component: TableOfContentDesigner,
    }, {
      path: '/Banner',
      component: BannerDesigner,
    },
  ],
});
