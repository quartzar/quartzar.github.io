<template>
  <div class="md">
    <!-- class="md:pt-10" -->
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar2 class = 'navbar-fixed rounded-b-[15px] border-b border-indigo-500 shadow-2xl shadow-indigo-600/50'/>
    <div class="md:pt-24 md:pb-16 min-h-screen transition-all ease-in bg-fixed" style="background-image: url('/background.png')">
      <NuxtPage class = "rounded-2xl shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-indigo-600 border border-indigo-600"/>
    </div>
    
  </div>
</template>

<style lang="postcss">
body {
  @apply transition-all ease-in-out bg-indigo-50 dark:bg-zinc-940;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0.1;
}
</style>
<!-- @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Recursive:wght@300;400;500;600;700;800;900&display=swap'); -->