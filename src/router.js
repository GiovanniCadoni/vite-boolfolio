import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import SinglePost from "./pages/SinglePost.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: "/post/:slug",
            name: 'single-post',
            component: SinglePost,
        }
    ],
});

export { router };