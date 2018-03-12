import Vue from 'vue'
import Router from 'vue-router'
import Recommond from '../components/recommond/recommond'
import Singer from '../components/singer/singer'
import Rank from '../components/rank/rank'
import Search from '../components/search/search'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/recommond',
            component: Recommond
        },
        {
            path: '/singer',
            component: Singer
        },
        {
            path: '/rank',
            component: Rank
        },
        {
            path: '/search',
            component: Search
        }
    ]
})
