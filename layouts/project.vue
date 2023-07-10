<!-- <template>
  <div class="sm:mx-auto sm:px-6 
              md:mx-auto md:max-w-4xl
              lg:mx-auto lg:max-w-5xl">
    <div class="article text-zinc-200 
                max-w-none flex-auto container not-prose
                ">
      <slot/>
    </div>
  </div>
</template> -->

<script setup>
const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
)
</script>

<!-- <template>
  <main>
    <header class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-32 relative">
      <div class="text-left relative">
          <h1 class="font-rubik font-black text-yellow-200 text-3xl sm:text-4xl md:text-5xl glow-yellow-txt pb-2">
            {{ data.title }}
          </h1>
          <h2 class="font-rubik text-slate-400 text-opacity-80 text-md sm:text-xl md:text-xl glow-cyan-txt pb-20 font-medium">
            {{ data.subtitle }}
          </h2>
      </div>
    </header>
  </main>
</template> -->

<!-- <main class="pb-20 lg:pb-28 relative">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="grid gap-24" :class="($route.path === '/' || $route.path === '/index') ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'">

              <section class="col-span-2 ">
                  <a href="/projects">
                      <h2 class=" font-rubik font-black text-yellow-200 text-3xl sm:text-4xl glow-yellow-txt pb-4">
                          <slot name="heading" />
                      </h2>
                  </a>
              </section>
              </div>
  </div>
</main> -->


<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <header class="mt-10 mx-auto max-w-screen-xl px-1 sm:mt-12 md:mt-16 lg:mt-32 relative">
      <div class="text-left relative">
        <h1 class="font-rubik font-black text-cyan-200 text-3xl sm:text-4xl md:text-5xl glow-cyan-txt pb-2">
          {{ data.title }}
        </h1>
        <h2
          class="font-rubik text-slate-200 text-opacity-80 text-md sm:text-xl md:text-xl glow-cyan-txt pb-20 font-medium">
          {{ data.subtitle }}
        </h2>
      </div>
    </header>

    <main class="pb-20 lg:pb-28 px-1 pt-10 relative">
      <div class="grid gap-24 grid-cols-4">

        <section class="col-span-3 ">
              <!-- <slot/> -->
              <ContentRenderer :value="data"/>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
main :deep(h1) {
  --at-apply: font-rubik font-black text-yellow-400 text-3xl sm:text-4xl md:text-4xl glow-yellow-txt py-2;
}

main :deep(h2) {
  --at-apply: font-rubik text-lime-400 text-md sm:text-xl md:text-xl glow-cyan-txt py-2 font-medium;
}

main :deep(p) {
  --at-apply: font-ubuntu text-slate-100 text-lg glow-cyan-txt font-medium py-2;
}

main :deep(pre code) {
  --at-apply: text-base font-jbmono i;
}

/* main :deep(pre) {
  --at-apply: font-ubuntu text-slate-100 text-base glow-cyan-txt font-medium py-2 bg-gray-900 rounded-xl -inset-4  shadow-lg ;
} */


</style>