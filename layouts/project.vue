<!-- <script setup>



const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
)

const contentRenderer = ref(null);
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.isIntersecting) {
        currentlyActiveToc.value = id;
      }
    });
  }, observerOptions);

  contentRenderer.value.$el
    .querySelectorAll('h2[id], h3[id]')
    .forEach((section) => {
      observer.observe(section);
    });
});


</script> -->

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

let currentlyActiveToc = ref("");
let observer = ref(null);
let observerOptions = ref({
  root: null, // This should be set to the actual element you want to observe.
  threshold: 0,
})

const route = useRoute();

// remove trailing slash from path
const actualPath = route.path.replace(/\/$/, '');

const { data } = await useAsyncData(`content-${actualPath}`, () =>
  queryContent().where({ _path: actualPath }).findOne()
)

// console.log(data.value.body.toc);
console.log(data.value.body);


onMounted(() => {
  // observerOptions.value.root = $refs.contentRenderer;
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        currentlyActiveToc.value = id;
      }
    });
  }, observerOptions);

  // Track all sections that have an `id` applied
  document
  .querySelectorAll('.contentRenderer h2[id], .contentRenderer h3[id], .contentRenderer h4[id]')
  .forEach((section) => {
    observer.observe(section);
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});


</script>
<!-- 
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

// remove trailing slash from path
const actualPath = route.path.replace(/\/$/, '');

const { data } = await useAsyncData(`content-${actualPath}`, () =>
  queryContent().where({ _path: actualPath }).findOne()
)
</script> -->


<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <header class="mt-10 mx-auto max-w-screen-xl px-1 sm:mt-12 md:mt-16 lg:mt-32 relative">
      <div class="text-left relative">
        <h1 class="font-rubik font-black text-cyan-200 text-3xl sm:text-4xl md:text-5xl glow-cyan-txt "><!--pb-2 -->
          {{ data.title }}
        </h1>
        <h2
          class="font-rubik text-slate-200 text-opacity-80 text-md sm:text-xl md:text-xl glow-cyan-txt pb-20 font-medium">
          {{ data.subtitle }}
        </h2>
      </div>
    </header>

    <main class="pb-20 lg:pb-28 px-1 pt-3 relative ">
      <div class="grid gap-16 grid-cols-4">
        <!-- Main Content -->
        <section class="col-span-3">
          <ContentRenderer ref="contentRenderer" class="contentRenderer" :value="data" />
          <!-- <nuxt-content ref="nuxtContent" :document="data" /> -->
        </section>

        <!--Table of Contents -->
        <!-- <aside class="col-span-1 pt-7 mt-3.5 text-yellow-200">
          <nav class="mt-4">
            <ul>
              <li v-for="link in data.body.toc.links.filter(link => link.depth === 2)" :key="link.id"
                :class="{ 'pl-4': link.depth === 3 }" class="toc-list">
                <a role="button" class="transition-all ease-in-out duration-100 text-base mb-2 block" :href="`#${link.id}`">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </nav>
        </aside> -->
        <aside ref="toc" class="col-span-1 lg:flex lg:flex-col">
          <div class="sticky top-16">
            <header class="uppercase text-cyan-200 glow-cyan-txt font-rubik font-medium text-lg lg:mt-9 tracking-wider">
              Table of Contents
            </header>
              <nav class="mt-4 ">
                <ul>
                  <li 
                    @click="tableOfContentsHeadingClick(link)"
                    :class="{ 'pl-4': link.depth === 3 }"
                    class="toc-list"
                    v-for="link of data.body.toc.links"
                    :key="link.id"
                  >
                    <a 
                      :class="{ 
                        'text-lime-300 hover:text-lime-400 font-black toc-item': link.id === currentlyActiveToc,
                        'text-cyan-200 hover:text-cyan-300 toc-item': link.id !== currentlyActiveToc 
                      }"
                      role="button"
                      class="transition-colors duration-75 font-jbmono transition hover:scale-101 hover:duration-200 hover:font-black hover:transition ease-in-out duration-900 text-15px mb-2 block"
                      :href="`#${link.id}`"
                    >
                      {{ link.text }}
                    </a>
                    <ul v-if="link.children">
                      <li
                        @click.stop="tableOfContentsHeadingClick(childLink)"
                        class=" ml-0"
                        v-for="childLink of link.children"
                        :key="childLink.id"
                      >
                        <a
                          :class="{ 
                            'text-lime-300 hover:text-lime-400 font-black toc-item': childLink.id === currentlyActiveToc,
                            'text-cyan-200 hover:text-cyan-300 toc-item': childLink.id !== currentlyActiveToc 
                          }"
                          role="button"
                          class="toc-item-link transition-colors duration-75 font-jbmono transition hover:scale-101 hover:duration-200 hover:font-black hover:transition ease-in-out duration-900 text-15px mt--2 block"
                          :href="`#${childLink.id}`"
                        >
                          <span class="vertical-line">&#x251c;</span> <!-- Wrap the vertical line in a span -->
                          <span class="child-text border-left border-white ">{{ childLink.text }}</span> <!-- Wrap the text in a span -->
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
      </div>
    </main>
  </div>
</template>



<style scoped>
main :deep(h2) {
  --at-apply: font-rubik text-yellow-400 text-3xl sm:text-4xl md:text-4xl glow-yellow-txt font-bold pt-7 pb-1;
}

main :deep(h3) {
  --at-apply: font-rubik text-lime-400 text-2xl sm:text-3xl md:text-3xl pt-7 pb-2 font-bold;
}

main :deep(h4) {
  --at-apply: font-rubik text-lime-400 text-xl sm:text-2xl md:text-2xl pt-7 pb-2 font-medium;
}

main :deep(li::marker) {
  --at-apply: font-ubuntu text-gray-400 glow-cyan-txt font-bold text-18.5px;
}

main :deep(li) {
  --at-apply: font-ubuntu text-cyan-100 text-18.5px;
}

main :deep(p) {
  --at-apply: font-ubuntu text-slate-100 text-18.5px glow-cyan-txt font-medium py-2 leading-relaxed;
}

main :deep(a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):not(.toc-item)) {
  --at-apply: font-black text-blue-300 glow-cyan-txt underline decoration-1;
}

main :deep(pre code) {
  --at-apply: text-17px font-jbmono;
}

.toc-item-link {
  display: flex; /* Use flexbox to align the children of the link */
}

.vertical-line {
  margin-right: 8px; /* You can adjust this to control the space between the vertical line and the text */
}

.child-text {
  align-self: flex-start; /* Aligns the text with the top of the container when it overflows to a new line */
}

</style>