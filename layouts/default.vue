<template>
    <div class="all:transition-400 ">
    <!-- <div md:pt-100> -->
        <!-- class="md:pt-10" -->
        <Html lang="en" />
        <Meta property="og:image" content="/cover.jpg" />
        <Meta name="twitter:card" content="summary_large_image" />
        
        <!-- Navbar -->
        <Navbar2 class='navbar-fixed-top rounded-b-[15px] border-b border-indigo-500 shadow-2xl shadow-indigo-600/50'/>

        <!-- Rest of Page -->
        <div class="md:pt-24 md:pb-16 min-h-screen bg-fixed"
            style="background-image: url('/background.png')">
            <slot />
        </div>
    </div>
</template>
