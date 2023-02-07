<!-- dark:bg-indigo-900/50 bg-gray-900/50-->
<template>
<div class="navbar-fixed-top ">
  <Disclosure as="nav" class="navb-css-1 backdrop-blur-lg" v-slot="{ open }">
    
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-[3.7rem]">
      <!-- <div class="relative flex items-center justify-between h-[3.7rem]"> -->
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <DisclosureButton
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
          <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
        </DisclosureButton>
      </div>
      <!--  -->
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block md:hidden h-8 w-auto" src="/logo_small.gif" alt="quartzar" />
          <img class="hidden md:block lg:ml-10/12 md:ml-3.5/12 h-[1.9rem] w-auto" src="/logo_full.gif" alt="quartzar" />
        </div>
        <div class="hidden sm:block sm:ml-7.5/12 md:ml-6.25/12 lg:ml-7.4/12 h-0">
          <div class="flex justify-between px-9 mx-auto text-gray-200 font-sans text-base">
            <ContentNavigation v-slot="{ navigation }">
              <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path"
                active-class="font-bold font-sans px-2 py-1 rounded-md bg-slate-900/25 shadow-sm shadow-slate-900 transition-all ease-in-out"
                class="mr-4 font-sans py-1 hover:px-2 hover:rounded-md hover:bg-slate-800/25 hover:shadow-sm hover:shadow-slate-900 transition-all ease-in-out">
                {{ link.navTitle || link.title }}
              </NuxtLink>
            </ContentNavigation>
          </div>
          <!-- </div> -->
        </div>

        <!-- Social Icons & Colour Mode -->
      </div>
      <div class="transition">
        <!-- <div class="space-x-3 text-gray-500 transition ease-in-out"></div> -->
        <a href="https://twitter.com/quartzar32" title="Twitter">
          <!-- class="hover:text-gray-300 transition-all ease-in-out"> -->
        </a>
        <a href="https://github.com/quartzar" title="GitHub"
            class="hover:text-gray-300 transition-all ease-in-out">

            <i class="fa fa-github github" id="github"></i>


          <!-- class="hover:text-gray-300 transition-all ease-in-out"> -->
          <!-- <div class="nav-i-container"> -->
            <!-- <div class="nav-icon">
              <FaGithub/>

            </div> -->
          <!-- </div> -->

          <!-- <Icon name="fa6-brands:github" class="nav-icon"/> -->
        </a>
        <!-- <ColorModeSwitch class="hover:text-gray-300 transition-all ease-in-out" /> -->
        <!-- <Icon name="fa-brands:github" before the </a> /> -->
        <!-- <Icon name="fa-brands:twitter" /> -->
        <!-- </div> -->
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <ContentNavigation v-slot="{ navigation }">
          <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path"
            active-class="font-serif bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-bold"
            class="mr-4 font-serif bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm">
            {{ link.navTitle || link.title }}
          </NuxtLink>
        </ContentNavigation>
      </div>
    </DisclosurePanel>
  <!-- </div> -->
  </Disclosure>
  <div class="navb-border"></div>
</div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
// import FaGithub from '~icons/fa/github'
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
</style>