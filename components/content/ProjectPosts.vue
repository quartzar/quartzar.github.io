<template>
    <div>
        <div v-for="post in data" :key="post._id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <NuxtLink :to="post._path">
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