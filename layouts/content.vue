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
    <div class="transition-container prose text-zinc-200 
                max-w-none flex-auto container
                sm:mx-auto sm:max-w-3xl
                lg:mx-auto lg:max-w-4xl">
      <slot/>
    </div>
  </div>
</template>


<style>
  


.prose h1 {
  border-radius: 11px;
  background: linear-gradient(90deg, #0a001f, #130c31, #1d1245, #2a1558, #3a176b, #4c177e, #611390, #7705a1);
  padding-left: 12px;
  backdrop-filter: blur( 5px );-webkit-backdrop-filter: blur( 5px );
  -webkit-box-shadow:0px 0px 60px 15px rgba(111,0,255,0.65);
  -moz-box-shadow: 0px 0px 60px 15px rgba(111,0,255,0.65);
  box-shadow: 0px 0px 60px 15px rgba(111,0,255,0.65);
}

  /* .nuxt-content h1{
    --at-apply: font-center
  } */

  /* .prose h1 {
  text-align: center;
  font-family: sans-serif;
  text-shadow: 0 0 10px #FFF, 0 0 20px #FFF, 0 0 30px #00FFCC, 0 0 40px #00FFCC, 0 0 50px #00FFCC, 0 0 60px #00FFCC, 0 0 70px #00FFCC;
} */


  /* Remove header default underline */
  .prose h2 a,
  .prose h3 a {
    --at-apply: no-underline 
  }
  /* Set headers to use sans font */
  .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
    --at-apply: font-sans 
  }

  /* H1 options */
  /* .prose h1 {
    --at-apply: text-shadow: 
  } */
  
  .prose p {
    --at-apply: font-sans text-justify
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