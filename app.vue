<template>
  <div id="app" class="bg-slate-900">
    <!-- Navbar -->
    <Navbar id="navbar" />

    <div id="page-container" class="flex flex-col min-h-screen ">
      <div id="content-wrap" class="flex-grow">
        <!-- Rest of Page -->
        <NuxtPage class="transition-container" />
      </div>
    </div>

    <!-- Footer -->
    <Footer id="footer" />
  </div>
</template>

<style>
/* Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&family=Rubik:ital,wght@0,400;0,500;0,800;1,400;1,500;1,800&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap'); */

/* GH FontAwesome Icon Import */
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");



#app {
  position: relative;
  min-height: 100vh;
}

#page-container {
  position: relative;
  min-height: calc(100vh - 3rem - 2.5rem); 

}

#content-wrap {
  padding-bottom: 1.5rem;    
}
#navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.7rem;    /* Footer height */
}






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




<!-- <template>
  <div class="app">

    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" /> -->
    <!-- <Meta name="twitter:card" content="summary_large_image" /> -->

    <!-- <div id="content-wrap"> -->
    <!-- <div class="flex flex-col min-h-screen bg-fixed bg-slate-900"> -->

      <!-- Navbar -->
      <!-- <Navbar id="navbar" class="fixed w-full top-0 transition duration-150 ease-in-out" /> -->

      <!-- Rest of Page -->
      <!-- <div class="min-h-screen bg-fixed bg-slate-900"> -->

      <!-- <div class="scroller"/> -->
      
      <!-- <NuxtPage class="mt-10 sm:mt-12 md:mt-16 lg:mt-24 transition-container flex-grow" />

    <Footer class="bg-slate-900" id="footer" />
  </div>
  </div>
</template> -->