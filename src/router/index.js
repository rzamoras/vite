import { createRouter, createWebHistory } from "vue-router";

import Home from "./../views/Home.vue";
import About from "./../views/About.vue";
import Class from './../views/Class.vue';
import Team from './../views/Team.vue';
import Gallery from './../views/Gallery.vue';
import Blogs from './../views/Blogs.vue';
import Contact from './../views/Contact.vue';
import Enrollnow from './../views/Enrollnow.vue';
import Welcome from './../views/user/Welcome.vue';

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
    },
    {
        path: "/enroll-now",
        name: "enroll-now",
        component: Enrollnow
    },

    {
        path: "/welcome",
        name: "welcome",
        component: Welcome,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const getCurrentuser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}

import { getAuth, onAuthStateChanged } from 'firebase/auth';
router.beforeEach(async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)){
        if(await getCurrentuser()){
            next();
        }else{
            alert("You are not authorized to access this page");
            next("/");
        }
    }else{
        next();
    }
})

export default router