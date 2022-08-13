<template>
    <div>
        <!-- Navbar Start -->
        <div class="container-fluid bg-light position-relative shadow">
            <nav
                class="fixed w-full  z-20 top-0 left-0 border-b border-gray-200  navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                <router-link to="/" class="flex items-center navbar-brand font-weight-bold text-secondary"
                    style="font-size: 50px;">
                    <!-- <i class="flaticon-043-teddy-bear"></i> -->
                    <img src="/img/iscplogo.png" class="mr-3 md:h-20 h-10" alt="ISCP Logo">
                    <span
                        class="self-center md:text-5xl text-4xl font-semibold whitespace-nowrap dark:text-white">ISCP</span>

                    <!-- <span class="text-primary">ISCP</span> -->
                </router-link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav img-weight-bold mx-auto py-0">
                        <router-link to="/" class="nav-item nav-link" :class="{ 'active': $route.path == '/' }">Home
                        </router-link>
                        <router-link to="/about" class="nav-item nav-link"
                            :class="{ 'active': $route.path == '/about' }">About</router-link>
                        <router-link to="/class" class="nav-item nav-link"
                            :class="{ 'active': $route.path == '/class' }">Classes</router-link>
                        <router-link to="/team" class="nav-item nav-link" :class="{ 'active': $route.path == '/team' }">
                            Teachers</router-link>
                        <router-link to="/gallery" class="nav-item nav-link"
                            :class="{ 'active': $route.path == '/gallery' }">Gallery</router-link>
                        <router-link to="/blogs" class="nav-item nav-link"
                            :class="{ 'active': $route.path == '/blogs' }">Blogs</router-link>
                        <!-- <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="blog.html" class="dropdown-item">Blog Grid</a>
                            <a href="single.html" class="dropdown-item">Blog Detail</a>
                        </div>
                    </div> -->
                        <router-link to="/contact" class="nav-item nav-link"
                            :class="{ 'active': $route.path == '/contact' }">Contact</router-link>
                        <router-link to="/welcome" class="nav-item nav-link"
                            :class="{ 'active': $route.path == '/welcome' }" v-if="isLoggedIn">welcome</router-link>
                    </div>
                    <!-- <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
                        class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                        type="button">
                        <span class="sr-only">Open user menu</span>
                        <img class="mr-2 w-8 h-8 rounded-full" src="/img/teams/prof_kim.png" alt="user photo">
                        Bonnie Green
                        <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button> -->
                    <div v-if="isLoggedIn" class="flex justify-center">
                        <div>
                            <div class="dropdown relative">
                                <button
                                    class="dropdown-toggle px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                                    type="button" id="dropdownMenuButton1d" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img class="mr-2 w-10 h-10 rounded-full" src="/img/teams/prof_kim.png" alt="user photo">
                                    Dropdown
                                    
                                </button>
                                <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1d">
                                    <li>
                                        <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent xt-gray-700 ver:bg-gray-100" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Something else here</a>
                                    </li>
                                    <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                                    <li>
                                        <button @click="logout" class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- <button @click="logout" v-if="isLoggedIn">logout</button> -->
                    <a v-if="!isLoggedIn" class="btn btn-primary px-4" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">Sign in</a>
                </div>
            </nav>
        </div>
        <!-- Navbar End -->

        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog relative w-auto pointer-events-none">
                <div
                    class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-body relative p-4">
                        <div
                            class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white dark:bg-gray-900 dark:text-gray-100">
                            <button type="button" data-bs-dismiss="modal"
                                class="absolute bg-red-600 top-3 right-2.5 text-gray-400 hover:bg-red-500 hover:text-gray-600 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <h1 class="text-2xl font-bold text-center">Login</h1>
                            <form novalidate="" @submit.prevent class="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div class="space-y-1 text-sm">
                                    <label for="username" class="block dark:text-gray-400">Email</label>
                                    <input v-model="email" type="email" name="username" id="username"
                                        placeholder="Username"
                                        class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
                                    <div data-lastpass-icon-root="true"
                                        style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                                    </div>
                                </div>
                                <div class="space-y-1 text-sm">
                                    <label for="password" class="block dark:text-gray-400">Password</label>
                                    <input v-model="password" type="password" name="password" id="password"
                                        placeholder="Password"
                                        class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
                                    <div class="flex justify-end text-xs dark:text-gray-400">
                                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                    </div>
                                    <div data-lastpass-icon-root="true"
                                        style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                                    </div>
                                </div>
                                <p v-if="errMsg">{{ errMsg }}</p>
                                <button @click="signIn" data-bs-dismiss="modal"
                                    class="block w-full p-3 bg-indigo-600 text-white text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign
                                    in</button>
                                <button ref="hidModal" class="hidden" data-bs-dismiss="modal">hidden</button>
                            </form>
                            <div class="flex items-center pt-4 space-x-1">
                                <div class="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                                <p class="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                                <div class="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            </div>
                            <div class="flex justify-center space-x-4">
                                <button @click="signInWithGoogle" aria-label="Log in with Google"
                                    class="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                        class="w-5 h-5 fill-current">
                                        <path
                                            d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z">
                                        </path>
                                    </svg>
                                </button>
                                <button aria-label="Log in with Twitter" class="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                        class="w-5 h-5 fill-current">
                                        <path
                                            d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z">
                                        </path>
                                    </svg>
                                </button>
                                <button aria-label="Log in with GitHub" class="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                        class="w-5 h-5 fill-current">
                                        <path
                                            d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <p class="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                                <router-link to="/enroll-now" rel="noopener noreferrer"
                                    class="underline dark:text-gray-100" data-modal-toggle="authentication-modal">Sign
                                    up</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { ref, onMounted } from 'vue';
import router from '../router';
import { notify } from "@kyvg/vue3-notification";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    })
})

const email = ref('');
const password = ref('');
const errMsg = ref();

const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            // console.log(data);
            router.push('/welcome');
            this.$refs.hidModal.click()

        })
        .catch((error) => {
            console.log(error.code);
            
            switch (error.code) {
                case "auth/invalid-email":
                    notify({
                        type: "error",
                        title: "Invalid email",
                    });
                    break;
                case "auth/user-not-found":
                    notify({
                        type: "error",
                        title: "User not found",
                    });
                    break;
                case "auth/wrong-password":
                    notify({
                        type: "error",
                        title: "Incorrect password",
                    });
                    break;
                // default:
                //     errMsg.value = "Email or Password incorrect";
                //     break;
            }
        })
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result);
            router.go('/')
        })
        .catch((error) => {
            console.log(error.code);
        })
}

const logout = () => {
    signOut(auth).then(() => {
        router.push('/');
    })
}

</script>

<style>
</style>