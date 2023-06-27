<template>
    <div class="mt-10">
        <div class="project-container" 
            v-for="post in data" :key="post._id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <NuxtLink :to="post._path" class="hover:animate-spin">
                Read more...
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { data } = await useAsyncData(async () => {
    return queryContent('/projects/').find()
})
</script>

<style>

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
    overflow: hidden;
    background: linear-gradient(145deg, #22222C, #0f0f1f);
/* border-radius: 15%; */
box-shadow: 9.91px 9.91px 15px #0F0F13, -9.91px -9.91px 15px #2C2C38;
    
    /* z-index: 2; */
}

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
</style>