import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Login';
import MarkPage from '../components/MarkPage';
import KPIAnalysis from '../components/KPIAnalysis';
import AnalysisPerson from '../components/children/AnalysisPerson';
import AnalysisGroup from '../components/children/AnalysisGroup';
import GroupTotal from '../components/children/Groups/GroupTotal';
import PersonTotal from '../components/children/Persons/PersonTotal';
import GroupLaw from '../components/children/Groups/GroupLaw';
import GroupWork from '../components/children/Groups/GroupWork';
import GroupPotential from '../components/children/Groups/GroupPotential';
import GroupAttitude from '../components/children/Groups/GroupAttitude';
import GroupContribution from '../components/children/Groups/GroupContribution';
import PersonWork from '../components/children/Persons/PersonWork';
import PersonContribution from '../components/children/Persons/PersonContribution';
import PersonAttitude from '../components/children/Persons/PersonAttitude';
import PersonLaw from '../components/children/Persons/PersonLaw';
import PersonPotential from '../components/children/Persons/PersonPotential';

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
            {
              path: 'groupContribution',
              name: 'groupContribution',
              component: GroupContribution,
            },
            {
              path: 'groupAttitude',
              name: 'groupAttitude',
              component: GroupAttitude,
            },
            {
              path: 'groupPotential',
              name: 'groupPotential',
              component: GroupPotential,
            },
            {
              path: 'groupWork',
              name: 'groupWork',
              component: GroupWork,
            },
            {
              path: 'groupLaw',
              name: 'groupLaw',
              component: GroupLaw,
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
            {
              path: 'personWork',
              name: 'personWork',
              component: PersonWork,
            },
            {
              path: 'personContribution',
              name: 'personContribution',
              component: PersonContribution,
            },
            {
              path: 'personAttitude',
              name: 'personAttitude',
              component: PersonAttitude,
            },
            {
              path: 'personLaw',
              name: 'personLaw',
              component: PersonLaw,
            },
            {
              path: 'personPotential',
              name: 'personPotential',
              component: PersonPotential,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'defaultLogin',
      component: require('@/components/Login').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
