<template>
  <div class="app">

    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <!-- <Meta name="twitter:card" content="summary_large_image" /> -->

    <!-- <div id="content-wrap"> -->
    <div class="min-h-screen bg-fixed bg-slate-900 pb-14">

      <!-- Navbar -->
      <Navbar id="navbar transition duration-150 ease-in-out" />

      <!-- Rest of Page -->
      <!-- <div class="min-h-screen bg-fixed bg-slate-900"> -->


      <!-- <div class="scroller"/> -->
      <NuxtPage class="mt-10 sm:mt-12 md:mt-16 lg:mt-24 transition-container" />



      <!-- </div> -->
      
    </div>
    <Footer class="bg-slate-900" id="footer" />
  </div>
</template>
    

      <!-- Navbar -->
      <!-- <Navbar class="navbar-fixed-top"/> -->
      <!-- class="animate-slide-in-down animate-count-1 ease-in-out"/> -->


      <!-- Rest of Page -->
      <!-- <div class="scroller min-h-screen bg-fixed bg-slate-900"> -->
        <!-- /* style="url('/background.png')"> */ -->
        <!-- <NuxtPage class="md:mt-28" /> -->
        <!-- <Footer/> -->
    <!-- </div> -->




<!-- <template>
  <NuxtLayout>
    <NuxtPage class="rounded-2xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-indigo-600 border border-indigo-600" />
  </NuxtLayout>
</template> -->


<style>
/* Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&family=Rubik:ital,wght@0,400;0,500;0,800;1,400;1,500;1,800&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap'); */

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

/* #app-old { */
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: Rubik, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* scrollbar-color: #135aa1; */
  /* margin-top: 60px; */
/* } */
</style>
