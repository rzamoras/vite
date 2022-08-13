<template>
    <div class="overflow-y-hidden dark:bg-gray-900">
        <div class="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4">
            <div class="w-full flex flex-col justify-center items-center">
                <div class="flex flex-col justify-center items-center text-center space-y-4">
                    <h1
                        class="text-3xl lg:text-4xl dark:text-white font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">
                        Our Trusted Partners</h1>
                    <p class="text-base leading-6 dark:text-gray-400 text-center text-gray-600 w-full md:w-10/12">We
                        just got featured in the following magazines and it has been the most incredible journey. We
                        work with the best fashion magazines across the world</p>
                </div>

                <div
                    class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 justify-items-around gap-x-6 gap-y-6 xl:gap-x-8 mt-10">
                    <div v-for="(sponsor, idx) in sponsors" :key="idx"
                        class="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col text-center px-12 space-y-6">
                        <img class="dark:hidden object-cover" :src="sponsor.path" :alt="sponsor.alt" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    setup(){
        const sponsors = ([
            {path: '/img/brands/burjerking.png', alt: 'Burjer King'},
            {path: '/img/brands/kolgit.png', alt: 'kolgit'},
            {path: '/img/brands/malaska1.png', alt: 'malaska'},
            {path: '/img/brands/sepguard.png', alt: 'sepguard'},
            {path: '/img/brands/tanga.png', alt: 'tanga'},
            {path: '/img/brands/kipsi.png', alt: 'Kei ep see'},
        ])

        return {
            sponsors
        }
    }
}
</script>

<style>
</style>