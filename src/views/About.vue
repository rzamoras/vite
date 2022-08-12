<template>
<div>

    <!-- Header Start -->
    <div class="container-fluid bg-primary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
            <h3 class="display-3 font-weight-bold text-white">About Us</h3>
            <div class="d-inline-flex text-white">
                <p class="m-0"><a class="text-white" href="">Home</a></p>
                <p class="m-0 px-2">/</p>
                <p class="m-0">About Us</p>
            </div>
        </div>
    </div>
    <!-- Header End -->


    <!-- About Start -->
    <About/>
    <!-- About End -->


    <!-- Sponsors Start -->
    <Sponsors/> 
    <!-- Sponsors Start -->


    <!-- Team Start -->
    <Professors/>
    <!-- Team End -->
</div>
</template>

<script>
import About from '../components/About.vue';
import Sponsors from '../components/Sponsors.vue';
import Professors from '../components/Professors.vue';
export default {
    components: { About, Sponsors, Professors }
}
</script>

<style>

</style>