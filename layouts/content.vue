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
  <div></div>
  <div class="sm:mx-auto sm:max-w-4xl
              lg:mx-auto lg:max-w-5xl">
    <div class="transition-container article text-zinc-200 
                max-w-none flex-auto container text-justify
                ">
      <slot/>
    </div>
  </div>
</template>


<style>
  .article {
    font-size: 17px;
    line-height: 24px;
    --at-apply: font-sans
  }
  .article p {
    --at-apply: px-2
  }
  .article a {
    --at-apply: px-2
  }



  .article h1 {
    border-radius: 11px;
    background: linear-gradient(90deg, #0a001f, #130c31, #1d1245, #2a1558, #3a176b, #4c177e, #611390, #7705a1);
    backdrop-filter: blur( 5px );-webkit-backdrop-filter: blur( 5px );
    -webkit-box-shadow:0px 0px 60px 15px rgba(111,0,255,0.65);
    -moz-box-shadow: 0px 0px 60px 15px rgba(111,0,255,0.65);
    box-shadow: 0px 0px 60px 15px rgba(111,0,255,0.65);
    /* padding-left: 7px; */
    margin-bottom: 0.75em;
    padding-top: 2px;
    padding-bottom: 5px;
    
    --at-apply: text-5xl font-bold px-2
  }

  .article h2 {
    margin-top: 0.75em;
    margin-bottom: -0.25em;
    --at-apply: text-3xl font-bold 
  }

  .article h3 {
    margin-top: 0.4em;
    margin-bottom: -0.5em;
    --at-apply: text-2xl font-bold px-2
  }

  .article h3 a {
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .article hr {
    margin-top: 2em;
    margin-bottom: 2em;
    --at-apply: mx-2
    
  }

  .article p {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    --at-apply: text-justify
  }


  /* .article h2 a,
  .article h3 a {
    --at-apply: no-underline transition-all ease-in
  } */



  /* Remove header default underline */
  /* .prose h2 a,
  .prose h3 a {
    --at-apply: no-underline 
  } */
  /* Set headers to use sans font */
  /* .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
    --at-apply: font-sans 
  } */

  /* H1 options */
  /* .prose h1 {
    --at-apply: text-shadow: 
  } */
  
  /* .prose p {
    --at-apply: font-sans 
  } */
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