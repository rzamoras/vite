<template>
    <div>
        <!-- Navbar Start -->
        <div class="container-fluid bg-light position-relative shadow">
            <nav
                class="fixed w-full  z-20 top-0 left-0 border-b border-gray-200  navbar navbar-expand-lg bg-light navbar-light py-0 py-lg-0 px-0 px-lg-5">
                <router-link to="/" class="flex items-center navbar-brand font-weight-bold text-secondary" style="font-size: 50px;">
                    <!-- <i class="flaticon-043-teddy-bear"></i> -->
                        <img src="/img/iscplogo.png" class="mr-3 h-20"
                            alt="ISCP Logo">
                        <span
                            class="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">ISCP</span>

                    <!-- <span class="text-primary">ISCP</span> -->
                </router-link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav img-weight-bold mx-auto py-0">
                        <router-link to="/" class="nav-item nav-link" :class="{'active' : $route.path == '/'}">Home
                        </router-link>
                        <router-link to="/about" class="nav-item nav-link"
                            :class="{'active' : $route.path == '/about'}">About</router-link>
                        <router-link to="/class" class="nav-item nav-link"
                            :class="{'active' : $route.path == '/class'}">Classes</router-link>
                        <router-link to="/team" class="nav-item nav-link" :class="{'active' : $route.path == '/team'}">
                            Teachers</router-link>
                        <router-link to="/gallery" class="nav-item nav-link"
                            :class="{'active' : $route.path == '/gallery'}">Gallery</router-link>
                        <router-link to="/blogs" class="nav-item nav-link"
                            :class="{'active' : $route.path == '/blogs'}">Blogs</router-link>
                        <!-- <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="blog.html" class="dropdown-item">Blog Grid</a>
                            <a href="single.html" class="dropdown-item">Blog Detail</a>
                        </div>
                    </div> -->
                        <router-link to="/contact" class="nav-item nav-link"
                            :class="{'active' : $route.path == '/contact'}">Contact</router-link>
                    </div>
                    <a href="" class="btn btn-primary px-4">Enroll Now</a>
                </div>
            </nav>
        </div>
        <!-- Navbar End -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>