import {RouteRecordRaw} from 'vue-router';
import Public from '@/core/layouts/public/public.component.vue';
import Home from '@/pages/home/home.component.vue';
import AuthComponent from '@/core/layouts/auth/auth.component.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'public',
        component: Public,
        meta: {
            breadcrumb: 'Public',
        },
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: {
                    breadcrumb: 'Home',
                },
            },
            {
                path: 'about',
                name: 'about',
                meta: {
                    breadcrumb: 'About',
                },
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../pages/about/about.component.vue'),
            },
        ],
    },
    {
        path: '/auth',
        name: 'auth',
        component: AuthComponent,
        redirect: {name: 'login'},
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../pages/login/login.component.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../pages/register/register.component.vue'),
            },
        ],
    },
    {
        path: '/not-found',
        name: '404',
        component: () => import(/* webpackChunkName: "about" */ '../pages/not-found/not-found.component.vue'),
    },
    // {
    //     path: '/:catchAll(.*)',
    //     redirect: '/not-found'
    // }

];

export default routes;
