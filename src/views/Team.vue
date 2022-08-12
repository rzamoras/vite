<template>
<div>
    <!-- Header Start -->
    <div class="container-fluid bg-primary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
            <h3 class="display-3 font-weight-bold text-white">Our Teachers</h3>
            <div class="d-inline-flex text-white">
                <p class="m-0"><a class="text-white" href="">Home</a></p>
                <p class="m-0 px-2">/</p>
                <p class="m-0">Our Teachers</p>
            </div>
        </div>
    </div>
    <!-- Header End -->


    <!-- Team Start -->
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">Our Teachers</span></p>
                <h1 class="mb-4">Meet Our Teachers</h1>
            </div>
            <div class="row">
                <div v-for="(teacher, idx) in teachers" :key="idx" class="col-md-6 col-lg-3 text-center team mb-5">
                    <div class="position-relative overflow-hidden mb-4" style="border-radius: 100%;">
                        <img class="img-fluid w-100" :src="teacher.path" :alt="teacher.name" >
                        <div
                            class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                href="https://www.facebook.com/ISCPhilippines" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light text-center px-0" style="width: 38px; height: 38px;"
                                href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h4>{{ teacher.name }}</h4>
                    <i>{{ teacher.position }}</i>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->

</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const teachers = ref([
            {name: 'Prof. Ricahard Gomez', position:'Dean of College in Fine Arts', path:'/src/assets/img/teams/dean_fine-arts.png'},
            {name: 'Prof. Kim Atienza', position:'Dean in College of Education', path:'/src/assets/img/teams/prof_kim.png'},
            {name:'Dr. Farrah Agustin-Bunch, MD', position:'Dean in College of Medicine', path:'/src/assets/img/teams/dr_farrah.png'},
            {name: 'Prof. Angelica Lopez de Santibañez', position:'Dean in Mass Communication', path:'/src/assets/img/teams/prof_angelica.png'},
            {name: 'Prof. Didjay Vidjay', position:'Dean of College in Busness Add.', path:'/src/assets/img/teams/prof_didjay.png'},
            {name: 'Pro. Gabriela Annjane Umali Cruz', position:'Dean in Philippine History', path:'/src/assets/img/teams/prof_gabriela.png'},
            {name: 'Prof. Imelda Staunton', position:'Office of the Registrar - OIC', path:'/src/assets/img/teams/prof_imelda.jpg'},
            {name: 'Prof. Jodi Lyn O&#x27Keefe', position:'Dean in BA English Langauge', path:'/src/assets/img/teams/prof_jodi.png'},
        ])

        return {
            teachers
        }
    }

}
</script>

<style>

</style>