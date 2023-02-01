<template>
  <div class="max-w-4xl px-4 pt-10 pb-5 m-auto bg-zinc-900 sm:px-10 dark:bg-zinc-900  selection:bg-indigo-900 selection:text-white">
    <!-- Fetch and display the Markdown document from current path -->
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <!-- Slot if document is not found -->
      <template #not-found>
        
        <h1 class="prose text-4xl text-white text-center font-sans font-black pb-5">
          uhhh, oops?
        </h1>
        <p class ="text-lg text-white text-center font-sans ">
          this page doesn't exist, how have you managed that?<br>
          are you ok?<br><br>
          <a href="/" class="transition-all ease-in-out font-bold font-sans italic border-4 border-transparent leading-none hover:text-9xl hover:not-italic hover:text-black hover:border-4 hover:rounded-lg hover:px-6 duration-[2500ms] hover:bg-yellow-500 hover:shadow-[0px_0px_60px_-5px_rgba(0,0,0,1)] hover:shadow-indigo-600">back home</a>
        </p>
        <img src="https://i2.lensdump.com/i/tqu27v.jpg" alt="really_funny_whale_porn.jpg" class="my-10 mx-auto rounded-xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,1)] shadow-indigo-600 hover:shadow-indigo-600/75 transition-all ease-in-out"/>
        <img src="https://i.lensdump.com/i/tBg3D1.png" alt="tom_booth_snorts_jesus.png" class="my-10 mx-auto rounded-xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,1)] shadow-indigo-600 hover:shadow-indigo-600/75 transition-all ease-in-out"/>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="postcss">
  /* Customize headers to remove default underline */
  .prose h2 a,
  .prose h3 a {
    @apply no-underline transition-all ease-in;
    &:hover {
      @apply transition-all ease-out duration-500 px-4 py-2 font-semibold bg-white text-slate-700 dark:bg-slate-700 dark:text-white rounded-md shadow-lg shadow-blue-500/50 ring-1 ring-slate-900/5 border-indigo-500 dark:border-sky-500 border-2 border-solid;
    }
  }
  .prose h2,
  .prose h3 {
    @apply font-serif blue-text-shadow;
  }
  .prose h1 {
    @apply font-serif rgb-text after:content-[var(--content-title)] text-center;
  }
  .prose img {
    @apply my-10 mx-auto rounded-xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,1)] shadow-indigo-600 hover:shadow-indigo-600/75 transition-all ease-in-out;
  }
  .prose p:nth-child(2) {
    @apply first-letter:font-black first-letter:text-2xl first-letter:text-yellow-400 first-letter:mr-1 first-letter:pt-0.5 first-letter:float-left first-line:tracking-widest first-line:uppercase;
  }
  .prose p {
    @apply text-justify 
  }
</style>

<script setup>
  const route = useRoute();
  const { data } = await useAsyncData(`content-${route.params.slug}`, () =>
    queryContent(`/${route.params.slug}`).findOne()
  );

  const contentCssVar = useCssVar('--content-title');
  try { 
    contentCssVar.value = `'${data.value.title}'`
    console.log({ title: data.value.title });
    }
  catch { console.log("Title not found") }
  
  const isMounted = useMounted();
</script>
