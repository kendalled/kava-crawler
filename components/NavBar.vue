<template>
  <nav class="bg-white dark:bg-gray-900 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <NuxtLink to="/" class="flex-shrink-0 flex items-center">
            <div class="h-8 w-8 relative">
              <img src="/kava-crawler-logo-2.png" alt="KavaCrawler Logo" class="h-full w-full object-contain rounded" />
            </div>
            <span class="ml-2 text-xl font-bold text-gray-900 dark:text-white hidden sm:block">KavaCrawler</span>
          </NuxtLink>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink 
              to="/" 
              :class="[
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                currentRoute === '/' 
                  ? 'border-indigo-500 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-600'
              ]"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/plan" 
              :class="[
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                currentRoute === '/plan' 
                  ? 'border-indigo-500 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-600'
              ]"
            >
              Plan
            </NuxtLink>
            <NuxtLink 
              to="/lucky" 
              :class="[
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                currentRoute === '/lucky' 
                  ? 'border-indigo-500 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-600'
              ]"
            >
              I'm Feeling Lucky
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              :class="[
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                currentRoute === '/about' 
                  ? 'border-indigo-500 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-600'
              ]"
            >
              About
            </NuxtLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
          <ThemeToggle />
          <a 
            href="https://github.com/kendalled/kava-crawler" 
            class="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
          >
            <span class="sr-only">View GitHub</span>
            <GithubIcon class="h-6 w-6" />
          </a>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <ThemeToggle />
          <button 
            @click="isOpen = !isOpen" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-indigo-400"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!isOpen" class="block h-6 w-6" />
            <XIcon v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink 
          to="/" 
          :class="[
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
            currentRoute === '/' 
              ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-200' 
              : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
          ]"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/plan" 
          :class="[
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
            currentRoute === '/plan' 
              ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-200' 
              : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
          ]"
        >
          Plan
        </NuxtLink>
        <NuxtLink 
          to="/lucky" 
          :class="[
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
            currentRoute === '/lucky' 
              ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-200' 
              : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
          ]"
        >
          I'm Feeling Lucky
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          :class="[
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
            currentRoute === '/about' 
              ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-200' 
              : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
          ]"
        >
          About
        </NuxtLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
        <div class="flex items-center px-4">
          <a 
            href="https://github.com/kendalled/kava-crawler" 
            class="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200"
          >
            <GithubIcon class="h-6 w-6" />
            <span class="ml-2 text-base font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { MenuIcon, XIcon, GithubIcon, MapPinIcon } from 'lucide-vue-next';
import ThemeToggle from './ThemeToggle.vue';

const route = useRoute();
const isOpen = ref(false);

// Compute the current route path
const currentRoute = computed(() => route.path);
</script>