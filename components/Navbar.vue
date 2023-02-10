<template>
  <Disclosure as="nav" 
  class="navb-css-1 backdrop-blur-lg" 
  v-slot="{ open }">
    <!-- Main Navbar Div -->
    <div class="max-w-6xl mx-auto 
                px-4 sm:px-6 lg:px-8">
      <!-- Flex Container for Navbar Contents -->
      <div class="flex items-center justify-between h-12 ">

        <!-- Left-side Container -->
        <div class="flex items-center">
          <!-- Icon & Name -->
          <div class="flex-shrink-0">
            <a class="flex items-center nuxt-link-exact-active"
                href="/">
              <!-- Icon -->
              <img class="block h-9 w-auto" 
              src="/logo_small.gif" 
              alt="quartzar"/>
              <!-- Name -->
              <span class="font-rubik font-bold text-xl text-cyan-100 ml-2 glow-cyan-txt">
                Joseph Dorn
              </span>
            </a>
          </div>
          <!-- Navigation Links -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <div class="relative flex ml-0">
                <ContentNavigation v-slot="{ navigation }">
                  <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path"
                    active-class="px-2 py-2 rounded-md font-rubik text-md text-cyan-200 glow-cyan-txt underline underline-offset-6 transition duration-150 ease-in-out"
                    class="px-2 py-2 rounded-md font-rubik text-sm font-medium text-cyan-100 glow-cyan-txt no-underline hover:underline hover:underline-offset-6 transition duration-150 ease-in-out">
                    {{ link.navTitle || link.title }}
                  </NuxtLink>
                </ContentNavigation>
              </div>
            </div>
          </div>
        </div>

        <!-- Right-side Container -->
        <div class="hidden sm:ml-6 sm:block">
          <!-- Items -->
          <div class="flex items-center space-x-2">
            <!-- GitHub Icon -->
            <a href="https://github.com/quartzar" title="GitHub"
            class="p-1 border-2 border-transparent hover:text-gray-300 transition-all ease-in-out">
              <i class="fa fa-github github" id="github"/>
            </a>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
    <div class="navb-border"></div>
  </Disclosure>
  
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>