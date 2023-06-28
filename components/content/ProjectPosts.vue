# automatic slug generation
<template>
    <div>
        <div class="relative">
            <main class="pt-8 pb-20 lg:pt-12 lg:pb-28 relative">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div class="grid gap-24 grid-cols-1 md:grid-cols-3">

                            <section class="col-span-2 ">
                                <a href="/projects">
                                    <h2 class=" font-rubik font-bold text-yellow-200 text-3xl sm:text-4xl glow-yellow-txt">
                                        <slot name="heading" />
                                    </h2>
                                </a>

                                <div class="block pt-6 ">
                                    <!-- <article class="block mt-12"> -->
                                    <div class="project-container group relative block" v-for="post in data"
                                        :key="post._id">
                            
                                            <NuxtLink :to="post._path" class="hover:animate-spin">
                                                <div class="relative z-10 read-more-container hover:scale-101 transition ease-in-out delay-50 duration-400">
                                                <small
                                                    class="text-yellow-400 font-ubuntu uppercase tracking-widest text-sm glow-yellow-sm-txt">
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
                                                    class="text-indigo-200 font-rubik font-bold mb-3 mt-4 text-lg flex items-center glow-indigo-txt">
                                                    <span class="read-more-container">
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
                                                <div class="absolute -inset-4 bottom-2 bg-indigo-500 opacity-0 group-hover:opacity-5  rounded-xl shadow-lg shadow-blue-500/50 transition-opacity duration-400 ease-in-out"></div>

                                            </NuxtLink>

                                        <!-- <NuxtLink :to="post._path" class="hover:animate-spin">
                                                Read more
                                            </NuxtLink> -->
                                    </div>
                                    <!-- </article> -->
                                </div>

                            </section>

                            <section class="flex flex-col col-span-1">
                                placeholder text
                            </section>

                        </div>
                    </div>
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
    /* position: relative; */
    /* justify-content: center; */
    /* display: flex; */
    /* align-items: center; */
    /* -ms-align-items: center; */
    border-radius: 12px;
    padding-bottom: 12px;
    padding-top: -20px;
    margin-top: 30px;
    margin-bottom: 30px;
    /* background: linear-gradient(90deg, #0a001f, #130c31, #1d1245, #2a1558, #3a176b, #4c177e, #611390, #7705a1);   */
    /* overflow: hidden;
    background: linear-gradient(145deg, #22222C, #0f0f1f);
box-shadow: 9.91px 9.91px 15px #0F0F13, -9.91px -9.91px 15px #2C2C38; */
}
</style>

# automatic slug generation
<script setup>
const { data } = await useAsyncData(async () => {
    return queryContent('/projects/').find()
})
</script>

/* .project-container::after h3 {
    z-index: 3;
} */

/* .engraved {
    font-size: 100px;
    font-family: Futura;
    background-color: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(245,245,245,0.5) 3px 5px 1px;
 } */

/* .project-container {
   
    
    border-radius: 12px;
    padding-bottom: 12px;
    padding-top: -20px;
    margin-top: 30px;
    margin-bottom: 30px;
    
    overflow: hidden;
    background: linear-gradient(145deg, #22222C, #0f0f1f);

box-shadow: 9.91px 9.91px 15px #0F0F13, -9.91px -9.91px 15px #2C2C38;
    
    
} */
/* z-index: 2; */
    /* border-radius: 15%; */
    /* background: linear-gradient(90deg, #0a001f, #130c31, #1d1245, #2a1558, #3a176b, #4c177e, #611390, #7705a1);   */
    /* -ms-align-items: center; */
     /* position: relative; */
    /* justify-content: center; */
    /* display: flex; */
    /* align-items: center; */



/* .project-container a {
    z-index: 2;
} */

/* .project-container::before {
    content: '';
    position: absolute;
    height: 40%;
    background: linear-gradient(#00ccff, #d500f9);
    animation: rotate 6s linear infinite ;
    --at-apply: px-50% my-15
} */

/* .project-container::after {
    content: '';
    position: absolute;
    background: #18181b;
    inset: 5px;
    border-radius: 9px;
} */

/* @keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
} */




/* Naming this as '.container' leads to a hella beautiful result! */
/* .container {
    border-radius: 12px;
    padding-bottom: 12px;
    padding-top: 3px;
    margin-top: 30px;
    margin-bottom: 30px;
    background: linear-gradient(90deg, #0a001f, #130c31, #1d1245, #2a1558, #3a176b, #4c177e, #611390, #7705a1);
} */
