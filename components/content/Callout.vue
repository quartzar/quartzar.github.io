<script setup>
defineProps({
    icon: String
})
</script>

<template>
    <div class="border-2 border-green-400 rounded p-4 flex items-center mb-4">
        <div class="mr-4 bg-green-400 rounded-full p-2">
            <img :src="icon"/>
        </div>
        <ContentSlot :use="$slots.default"/>
    </div>
</template>