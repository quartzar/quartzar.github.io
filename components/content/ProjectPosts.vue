# automatic slug generation
<script setup>

// import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
// import { useAsyncData } from 'nuxt3'

const { data } = await useAsyncData(async () => {
    return queryContent('/projects/').find()
})

</script>


<template>
    <div>
        <div class="relative">
            <!-- <main class="pt-8 pb-20 lg:pt-12 lg:pb-28 relative"> -->
            <main class="pb-20 lg:pb-28 relative">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- <div>Current route name: {{ $route.path }} -->
                        <!-- <div class="grid gap-24 grid-cols-1 md:grid-cols-3"> -->
                            <div class="grid gap-24" :class="($route.path === '/' || $route.path === '/index') ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'">

                            <section class="col-span-2 ">
                                <a href="/projects">
                                    <h2 class=" font-rubik font-bold text-yellow-200 text-3xl sm:text-4xl glow-yellow-txt pb-4">
                                        <slot name="heading" />
                                    </h2>
                                </a>

                                <div class="block">
                                    <!-- <article class="block mt-12"> -->
                                    <div class="project-container group relative block" v-for="post in data"
                                        :key="post._id">
                            
                                            <NuxtLink :to="post._path" class="hover:animate-spin">
                                                <div class="relative z-10 read-more-container hover:scale-101 transition ease-in-out delay-50 duration-400">
                                                <small
                                                    class="text-yellow-400 font-ubuntu uppercase tracking-widest text-sm glow-yellow-sm-txt group-hover:text-yellow-300 transition ease-in-out duration-600">
                                                    {{ post.tag }}
                                                </small>
                                                <h3
                                                    class="text-2xl font-rubik font-bold text-indigo-200 glow-indigo-txt mt-3">
                                                    {{ post.title }}
                                                </h3>
                                                <p class="text-slate-300 font-rubik font-bold mb-3 mt-1 text-lg">
                                                    {{ post.date }}
                                                </p>
                                                <p class="text-indigo-200 font-ubuntu text-lg">
                                                    {{ post.description }}
                                                </p>
                                                <div
                                                    class="text-indigo-200 font-rubik font-bold mb-3 mt-4 text-lg flex items-center glow-indigo-txt group-hover:text-indigo-100 transition ease-in-out duration-600">
                                                    <span class="read-more-container ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-6 h-6 mr-2 fill-current text-indigo-200 gear">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                                        </svg>


                                                        Read more
                                                    </span>

                                                </div>
                                            </div>
                                                <div class="absolute -inset-4 bottom-2 bg-indigo-500 opacity-0 group-hover:opacity-5 rounded-xl shadow-lg shadow-blue-500/50 transition-opacity duration-400 ease-in-out"></div>

                                            </NuxtLink>

                                        <!-- <NuxtLink :to="post._path" class="hover:animate-spin">
                                                Read more
                                            </NuxtLink> -->
                                    </div>
                                    <!-- </article> -->
                                </div>

                            </section>

                            <section v-if="$route.path === '/' || $route.path === '/index'" class="flex flex-col col-span-1">
                                placeholder text
                            </section>

                        </div>
                    <!-- </div> -->
                </div>
            </main>
        </div>
    </div>
</template>


<style>
.gear {
    transition: transform 0.75s ease;
}

.read-more-container svg {
    display: inline-block;
    margin-top: -4px;
}

.read-more-container:hover .gear {
    transform: rotate(360deg);
    
}

.project-container {
    border-radius: 12px;
    padding-bottom: 12px;
    padding-top: -20px;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>