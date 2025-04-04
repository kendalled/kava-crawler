<template>
  <div class="py-10 min-h-[45rem]">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Kava Crawler</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Plan Your Perfect Kava Crawl</h2>
              <p class="mt-1 text-sm text-gray-500">
                Discover the best kava bars in Florida and create the perfect crawl experience.
              </p>
              <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div class="flex-shrink-0">
                    <MapPinIcon class="h-10 w-10 text-gray-400" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <NuxtLink to="/plan" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="text-sm font-medium text-gray-900">Custom Planning</p>
                      <p class="text-sm text-gray-500 truncate">Select bars and customize your route</p>
                    </NuxtLink>
                  </div>
                </div>
                <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div class="flex-shrink-0">
                    <ZapIcon class="h-10 w-10 text-gray-400" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <NuxtLink to="/lucky" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="text-sm font-medium text-gray-900">I'm Feeling Lucky</p>
                      <p class="text-sm text-gray-500 truncate">Let us create the perfect crawl for you</p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h2 class="text-lg font-medium text-gray-900">How It Works</h2>
            <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="px-4 py-5 sm:p-6 text-center">
                  <ListFilterIcon class="mx-auto h-8 w-8 text-gray-400" />
                  <h3 class="mt-2 text-sm font-medium text-gray-900">1. Set Your Preferences</h3>
                  <p class="mt-1 text-sm text-gray-500">Filter bars by features, distance, and more</p>
                </div>
              </div>
              <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="px-4 py-5 sm:p-6 text-center">
                  <MapIcon class="mx-auto h-8 w-8 text-gray-400" />
                  <h3 class="mt-2 text-sm font-medium text-gray-900">2. Optimize Your Route</h3>
                  <p class="mt-1 text-sm text-gray-500">We'll find the most efficient path</p>
                </div>
              </div>
              <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="px-4 py-5 sm:p-6 text-center">
                  <ShareIcon class="mx-auto h-8 w-8 text-gray-400" />
                  <h3 class="mt-2 text-sm font-medium text-gray-900">3. Share & Enjoy</h3>
                  <p class="mt-1 text-sm text-gray-500">Get a shareable itinerary for your group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { MapPinIcon, ZapIcon, ListFilterIcon, MapIcon, ShareIcon } from 'lucide-vue-next';
</script>