<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2">
          <NuxtLink to="/" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Home
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <NuxtLink to="/plan" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Plan
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <NuxtLink to="/lucky" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            I'm Feeling Lucky
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <NuxtLink to="/about" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            About
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <a href="https://github.com/kendalled/kava-crawler" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            GitHub
          </a>
        </div>
      </nav>
      <p class="mt-8 text-center text-base text-gray-400 dark:text-gray-500">
        &copy; {{ new Date().getFullYear() }} KavaCrawler. All rights reserved.
      </p>
    </div>
  </footer>
</template>