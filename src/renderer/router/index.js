import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import MarkPage from '../components/MarkPage';
import KPIAnalysis from '../components/KPIAnalysis';
import AnalysisPerson from '../components/children/AnalysisPerson';
import AnalysisGroup from '../components/children/AnalysisGroup';
import GroupTotal from '../components/children/part/GroupTotal';
import PersonTotal from '../components/children/part/PersonTotal';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/markpage',
      name: 'markpage',
      component: MarkPage,
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: KPIAnalysis,
      children: [
        {
          path: 'analysisGroup',
          name: 'analysisGroup',
          component: AnalysisGroup,
          children: [
            {
              path: 'groupTotal',
              name: 'groupTotal',
              component: GroupTotal,
            },
          ],
        },
        {
          path: 'analysisPerson',
          name: 'analysisPerson',
          component: AnalysisPerson,
          children: [
            {
              path: 'personTotal',
              name: 'personTotal',
              component: PersonTotal,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
