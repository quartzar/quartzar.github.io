# automatic slug generation
<template>
    <div>
        <div class="relative">
            <main class="pt-8 pb-20 lg:pt-12 lg:pb-28 relative">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div class="grid gap-24 grid-cols-1 md:grid-cols-3">

                            <section class="col-span-2">
                                <a href="/projects">
                                    <h2 class=" font-rubik font-bold text-yellow-200 text-3xl sm:text-4xl glow-yellow-txt">
                                        <slot name="heading" />
                                    </h2>
                                </a>

                                <div class="block pt-6">
                                    <!-- <article class="block mt-12"> -->
                                    <div class="block project-container" v-for="post in data" :key="post._id">
                                        <NuxtLink :to="post._path" class="hover:animate-spin">
                                            <small
                                                class="text-yellow-400 font-ubuntu uppercase tracking-widest text-sm glow-yellow-sm-txt">
                                                {{ post.tag }}
                                            </small>
                                            <h3 class="text-2xl font-rubik font-bold text-indigo-200 glow-indigo-txt mt-3">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="w-6 h-6 mr-2 fill-current text-indigo-200 gear">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751-.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                    Read more
                                                </span>
                                                
                                            </div>

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
    transition: transform 0.5s ease;
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
