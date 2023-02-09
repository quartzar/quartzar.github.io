<template>
  <!-- <div class="all:transition-400 "> -->
  <div class="container" id="app">
    <!-- <div md:pt-100> -->
    <!-- class="md:pt-10" -->
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />

    <!-- <div> -->
      <!-- Navbar -->
      <Navbar2 />
      <!-- class="animate-slide-in-down animate-count-1 ease-in-out"/> -->


      <!-- Rest of Page -->
      <div class="scroller min-h-screen bg-fixed bg-zinc-900">
        <!-- /* style="url('/background.png')"> */ -->

        <NuxtPage class="md:mt-28" />
        <!-- class="rounded-2xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-indigo-600 border border-indigo-600"> -->
        <!-- </NuxtPage> -->

        <!-- <div class="relative grid justify-center place-self-center pt-5">
        <a href="https://github.com/quartzar" title="GitHub">
        <i class="fa fa-github github" id="github"/>
        </a>
      </div> -->

        <!-- <div class="md:-mt-28 relative grid justify-center"> -->
        <!-- <div id="footer">
          <a href="https://github.com/quartzar" title="GitHub">
            <i class="fa fa-github github" id="github" />
          </a>
          <div bottom-5 right-0 left-0 text-center op30 text-zinc-200 >
            on-demand · instant · fully customizable
          </div>
        </div> -->
        <Footer/>
        
      <!-- </div> -->
    </div>
  </div>
</template>



<!-- <template>
  <NuxtLayout>
    <NuxtPage class="rounded-2xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-indigo-600 border border-indigo-600" />
  </NuxtLayout>
</template> -->


<style>
/* Font import */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;800&display=swap');

/* GH FontAwesome Icon Import */
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");



/* Scrollbars for everything but FireFox */
::-webkit-scrollbar-track:hover {
  background: transparent;
}

::-webkit-scrollbar-track {
  background: red;
}

/* Scrollbars for FireFox */
.scroller {
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rgb(255, 255, 255) transparent;
  scrollbar-width: auto;
}


/* ::-webkit-scrollbar {
  background: transparent;
} */

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Rubik, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* scrollbar-color: #135aa1; */
  /* margin-top: 60px; */
}
</style>
