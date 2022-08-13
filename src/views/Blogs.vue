<template>
    <div>
        <!-- Header Start -->
        <div class="container-fluid bg-primary mb-5">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-3 font-weight-bold text-white">Our Blog</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0"><a class="text-white" href="">Home</a></p>
                    <p class="m-0 px-2">/</p>
                    <p class="m-0">Our Blog</p>
                </div>
            </div>
        </div>
        <!-- Header End -->


        <!-- Blog Start -->
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="text-center pb-2">
                    <p class="section-title px-5"><span class="px-2">Latest Blog</span></p>
                    <h1 class="mb-4">Latest Articles From Blog</h1>
                </div>
                <div class="row pb-3">
                    <div v-for="(blog, idx) in blogs" :key="idx"  class="col-lg-4 mb-4">
                        <div class="card border-0 shadow-sm mb-2">
                            <img class="card-img-top mb-2 w-full object-cover" :src="blog.img" alt="">
                            <div class="card-body bg-light text-center p-4">
                                <h4 class="">{{ blog.title }}</h4>
                                <div class="d-flex justify-content-center mb-3">
                                    <small class="mr-3"><i class="fa fa-user text-primary"></i> Admin</small>
                                    <small class="mr-3"><i class="fa fa-folder text-primary"></i> Sponsor</small>
                                    <small class="mr-3"><i class="fa fa-comments text-primary"></i> 15</small>
                                </div>
                                <p>{{ blog.content }}</p>
                                <a href="" class="btn btn-primary px-4 mx-auto my-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog End -->
    </div>
</template>

<script>
export default {
    setup(){
        const blogs =([
            {
                title:'We Now Offer Cable Car Transit', 
                img: '/img/blogs/cable_car.jpg',
                content: 'ISCPanians can now avail cable car transit all over NCR, for FREE. This is an initiative of the ISCP to reduce traffic in Metro Manila and to provide affordable transportation to students.',
            },
            {
                title: 'Find a campus near you!',
                img: '/img/blogs/find_campus.png',
                content: 'Find a campus near you, or ride our highly advanced transport system. ISCP ensures all students get their education to the most inaccessible and inhospitable parts of the Philippines, the world, and the Solar System. Enroll with us today at the ISCP.',
            },
            {
                title: 'Mandatory Exercise Routine',
                img: '/img/blogs/mandatory_exercise.jpg',
                content: 'he ISCP strongly encourages everyone to do the morning routine exercises to their respective classrooms. We believe that a healthy body means death and suffering as long as possible.'
            },
            {
                title: 'LOOK: New member of UAAP',
                img: '/img/blogs/aspins.jpg',
                content: 'The Blue Barking Aspins (also known as Barking Aspins) are the collegiate varsity team of the International State College of the Philippines (ISCP) that play in the University Athletic Association of the Philippines (UAAP). The Aspin, short for asong pinoy, is the main symbol of ISCP athletic teams which symbolizes love and intelligence.'
            }
        ])

        return {
            blogs
        }
    }
}
</script>

<style>
</style>