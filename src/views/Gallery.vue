<template>
<div>
    <!-- Header Start -->
    <div class="container-fluid bg-primary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
            <h3 class="display-3 font-weight-bold text-white">Gallery</h3>
            <div class="d-inline-flex text-white">
                <p class="m-0"><a class="text-white" href="">Home</a></p>
                <p class="m-0 px-2">/</p>
                <p class="m-0">Gallery</p>
            </div>
        </div>
    </div>
    <!-- Header End -->


    <!-- Gallery Start -->
    <div class="container-fluid pt-5 pb-3">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">Our Gallery</span></p>
                <h1 class="mb-4">Our ISCPanians Gallery</h1>
            </div>
            <div class="row">
                <div class="col-12 text-center mb-2">
                    <ul class="list-inline mb-4" id="portfolio-flters">
                        <li class="btn btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li class="btn btn-outline-primary m-1" data-filter=".first">Programs</li>
                        <li class="btn btn-outline-primary m-1" data-filter=".second">Activities</li>
                        <li class="btn btn-outline-primary m-1" data-filter=".third">Awardees</li>
                    </ul>
                </div>
            </div>
            <div class="row portfolio-container">
                <div v-for="(path, idx) in paths" :key="idx" class="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div class="position-relative overflow-hidden mb-2">
                        <div class="">
                            <img class="img-fluid w-full h-80 object-cover hover:object-scale-down" :src="path" :alt="path">
                        </div>
                        <div class="portfolio-btn d-flex align-items-center justify-content-center">
                            <a :href="path" data-lightbox="portfolio">
                                <i class="fa fa-plus text-gray" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Gallery End -->

</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const paths = ref([
            '/src/assets/img/gallery/applicants.png',
            '/src/assets/img/gallery/arf-arf.jpg',
            '/src/assets/img/gallery/canteen.jpg',
            '/src/assets/img/gallery/buwan_wika.png',
            '/src/assets/img/gallery/dj_loonyo.png',
            '/src/assets/img/gallery/free_tuition.png',
            '/src/assets/img/gallery/hafazz.jpg',
            '/src/assets/img/gallery/iscp_class-supension.png',
            '/src/assets/img/gallery/iscp_sun-campus.jpg',
            '/src/assets/img/gallery/iscpanians.png',
            '/src/assets/img/gallery/ISCP-Logo.png',
            '/src/assets/img/gallery/jovit.png',
            '/src/assets/img/gallery/lexi_lore_iscp.png',
            '/src/assets/img/gallery/libreng_sakay.jpg',
            '/src/assets/img/gallery/top90.jpg',
        ])
    
        return {
            paths
        }
    }
}
</script>

<style>

</style>