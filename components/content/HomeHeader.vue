<!-- This is useful if using YAML, and instead of lot, using {{ title }} -->
<!-- <script setup>
defineProps({
    title: {
        type: String,
        default: 'Default Title'
    },
    description: {
        type: String,
        default: 'Default Description'
    }
})
</script> -->

<template>
    <div>
        <header class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-32 relative">
            <div class="text-center relative">
                <h1>
                    <div  class="font-rubik font-bold text-yellow-200 text-4xl sm:text-5xl md:text-6xl glow-yellow-txt">
                        <slot name="title"/>
                    </div>
                </h1>
                <p>
                    <div class="mt-3 max-w-md mx-auto font-ubuntu text-cyan-100 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl glow-cyan-txt pb-20">
                        <slot name="description"/>
                    </div>
                </p>
            </div>
        </header>
    </div>
</template>