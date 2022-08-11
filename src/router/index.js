import { createRouter, createWebHistory } from "vue-router";

import Home from "./../views/Home.vue";
import About from "./../views/About.vue";
import Class from './../views/Class.vue';
import Team from './../views/Team.vue';
import Gallery from './../views/Gallery.vue';
import Blogs from './../views/Blogs.vue';
import Contact from './../views/Contact.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/class",
        name: "class",
        component: Class
    },
    {
        path: "/team",
        name: "team",
        component: Team
    },
    {
        path: "/gallery",
        name: "gallery",
        component: Gallery
    },
    {
        path: "/blogs",
        name: "blogs",
        component: Blogs
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router