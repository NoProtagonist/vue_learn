import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//
// import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        }
        // {

        //     path: '/head',
        //     name: 'Header',
        //     component: Header
        // }
    ]
})