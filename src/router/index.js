import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'


Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/t',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'home',
            component: home
        }
    ]
})
