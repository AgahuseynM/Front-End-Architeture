import {RouteRecordRaw} from 'vue-router';
import Public from '@/core/layouts/public/public.component.vue';
import Home from '@/pages/home/home.component.vue';
import Download from "@/pages/download/download.component.vue";
import Services from "@/pages/services/services.component.vue";
import News from "@/pages/news/news.component.vue";
import Partners from "@/pages/partners/partners.component.vue";
import Faq from "@/pages/faq/faq.component.vue";

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
                path: '/download',
                name: 'download',
                component: Download
            },
            {
                path: '/services',
                name: 'services',
                component: Services
            },
            {
                path: '/partners',
                name: 'partners',
                component: Partners
            },
            {
                path: '/news',
                name: 'news',
                component: News
            },
            {
                path: '/faq',
                name: 'faq',
                component: Faq
            }
        ],
    },
];

export default routes;
