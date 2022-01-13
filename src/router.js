import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import TypeName from './views/type-name'
import Repetitionrepetitionrepetitionrepetition from './views/repetitionrepetitionrepetitionrepetition'
import About from './views/about'
import LandingPage from './views/landing-page'
import Collage from './views/collage'
import Gif from './views/gif'
import AbstractColor from './views/abstract-color'
import Typeface from './views/typeface'
import Victorian from './views/victorian'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Type Name',
      path: '/type-name',
      component: TypeName,
    },
    {
      name: 'repetitionrepetitionrepetitionrepetition',
      path: '/repetitionrepetitionrepetitionrepetition',
      component: Repetitionrepetitionrepetitionrepetition,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: 'Landing Page',
      path: '/',
      component: LandingPage,
    },
    {
      name: 'Collage',
      path: '/collage',
      component: Collage,
    },
    {
      name: 'gif',
      path: '/gif',
      component: Gif,
    },
    {
      name: 'Abstract Color',
      path: '/abstract-color',
      component: AbstractColor,
    },
    {
      name: 'Typeface',
      path: '/typeface',
      component: Typeface,
    },
    {
      name: 'Victorian',
      path: '/victorian',
      component: Victorian,
    },
  ],
})
