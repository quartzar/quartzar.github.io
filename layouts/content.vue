<!-- <template>
    <div>
        <div>
            <slot/>
        </div>
    </div>
</template> -->


<!-- <template>
    <div class="rounded-2xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-indigo-600 border border-indigo-600 max-w-4xl px-4 pt-10 pb-5 m-auto bg-zinc-900 sm:px-10 dark:bg-zinc-900 selection:bg-indigo-900 selection:text-white">
            <div class="transition-container prose prose-gray dark:prose-invert max-w-none">
                <slot />
            </div>
    </div>
</template> -->

<template>
  <div>
    <div class="transition-container prose text-zinc-200 text-justify 
                max-w-none md:container md:mx-auto md:w-9/12">
      <slot/>
    </div>
  </div>
</template>


<style>
  /* Customize headers to remove default underline */
  .prose h2 a,
  .prose h3 a {
    --at-apply: no-underline 
  }
  .prose h1 {
    --at-apply: font-sans
  }
  .prose p {
    --at-apply: no-underline font-serif
  }
  h1 {
    --at-apply: animate-bounce-alt animate-count-infinite
  }
</style>

<!-- <style>
  /* Customize headers to remove default underline */
  .prose h2 a,
  .prose h3 a {
    --at-apply: no-underline transition-all ease-in
    &:hover {
        --at-apply: transition-all ease-out duration-500 px-4 py-2 font-semibold bg-white text-slate-700 dark:bg-slate-700 dark:text-white rounded-md shadow-lg shadow-blue-500/50 ring-1 ring-slate-900/5 border-indigo-500 dark:border-sky-500 border-2 border-solid;
    }
  }
  .prose h2,
  .prose h3 {
    --at-apply: font-serif blue-text-shadow;
  } 
  .prose h1 {
    --at-apply: animate-bounce-alt animate-count-infinite animate-duration-1 font-serif after:content-[var(--content-title)] text-center;
  }
  .prose img {
    --at-apply: my-10 mx-auto rounded-xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,1)] shadow-indigo-600 hover:shadow-indigo-600/75 transition-all ease-in-out;
  }
  .prose p:nth-child(2) {
    --at-apply: first-letter:font-black first-letter:text-2xl first-letter:text-yellow-400 first-letter:mr-1 first-letter:pt-0.5 first-letter:float-left first-line:tracking-widest first-line:uppercase;
  }
  .prose p {
    text-align: justify;
  }
</style> -->