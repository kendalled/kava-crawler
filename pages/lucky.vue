<template>
  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white">I'm Feeling Lucky</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Form Section (2/3 width) -->
            <div class="w-full lg:w-2/3">
              <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Let us plan the perfect crawl for you</h2>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Tell us a bit about what you're looking for, and we'll create an optimized kava crawl itinerary.
                </p>
                
                <div class="space-y-6">
                  <div>
                    <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Starting Location</label>
                    <div class="mt-1 flex rounded-md">
                      <input 
                        type="text" 
                        id="location" 
                        v-model="preferences.location" 
                        placeholder="Enter address or use current location" 
                        class="flex-1 min-w-0 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                      />
                      <button 
                        @click="useCurrentLocation" 
                        class="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                      >
                        <MapPinIcon class="h-4 w-4 mr-1" />
                        Current
                      </button>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label for="stops" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Number of Stops</label>
                      <select 
                        id="stops" 
                        v-model="preferences.stops" 
                        class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                      >
                        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label for="maxDistance" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Maximum Distance (miles)</label>
                      <select 
                        id="maxDistance" 
                        v-model="preferences.maxDistance" 
                        class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                      >
                        <option value="5">5 miles</option>
                        <option value="10">10 miles</option>
                        <option value="15">15 miles</option>
                        <option value="25">25 miles</option>
                        <option value="50">50 miles</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label for="date" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        v-model="preferences.date" 
                        class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                      />
                    </div>
                    
                    <div>
                      <label for="startTime" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Time</label>
                      <input 
                        type="time" 
                        id="startTime" 
                        v-model="preferences.startTime" 
                        class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label for="transportation" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Transportation Method</label>
                    <select 
                      id="transportation" 
                      v-model="preferences.transportation" 
                      class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                    >
                      <option value="driving">Driving</option>
                      <option value="walking">Walking</option>
                      <option value="bicycling">Bicycling</option>
                      <option value="transit">Public Transit</option>
                      <option value="rideshare">Rideshare (Uber/Lyft)</option>
                    </select>
                  </div>
                  
                  <div>
                    <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Must-Have Features</span>
                    <div class="mt-2 grid grid-cols-2 gap-2">
                      <div v-for="feature in features" :key="feature.id" class="flex items-center">
                        <input 
                          :id="`feature-${feature.id}`" 
                          type="checkbox" 
                          v-model="preferences.features" 
                          :value="feature.id" 
                          class="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700"
                        />
                        <label :for="`feature-${feature.id}`" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          {{ feature.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Optimization Priority</span>
                    <div class="mt-2">
                      <div class="flex items-center">
                        <input 
                          id="priority-distance" 
                          type="radio" 
                          v-model="preferences.priority" 
                          value="distance" 
                          class="h-4 w-4 border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700"
                        />
                        <label for="priority-distance" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Minimize Distance (save gas)
                        </label>
                      </div>
                      <div class="flex items-center mt-2">
                        <input 
                          id="priority-time" 
                          type="radio" 
                          v-model="preferences.priority" 
                          value="time" 
                          class="h-4 w-4 border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700"
                        />
                        <label for="priority-time" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Minimize Time (faster crawl)
                        </label>
                      </div>
                      <div class="flex items-center mt-2">
                        <input 
                          id="priority-experience" 
                          type="radio" 
                          v-model="preferences.priority" 
                          value="experience" 
                          class="h-4 w-4 border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700"
                        />
                        <label for="priority-experience" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Best Experience (highest rated bars)
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div class="pt-5">
                    <div class="flex justify-end">
                      <button 
                        @click="generateItinerary" 
                        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                      >
                        Generate Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Summary Section (1/3 width) -->
            <div class="w-full lg:w-1/3">
              <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 h-full">
                <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Kava Crawl</h2>
                
                <div class="flex items-center justify-center mb-6">
                  <div class="relative w-32 h-32 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <div class="text-center">
                      <span class="block text-3xl font-bold text-indigo-600 dark:text-indigo-400">{{ preferences.stops }}</span>
                      <span class="text-sm text-indigo-600 dark:text-indigo-400">Stops</span>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Duration:</span>
                    <span class="text-sm font-bold text-gray-900 dark:text-white">{{ estimatedDuration }}</span>
                  </div>
                  
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Happy Hours:</span>
                    <span class="text-sm font-bold text-gray-900 dark:text-white">{{ estimatedHappyHours }}</span>
                  </div>
                  
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Max Distance:</span>
                    <span class="text-sm font-bold text-gray-900 dark:text-white">{{ preferences.maxDistance }} miles</span>
                  </div>
                  
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Transportation:</span>
                    <span class="text-sm font-bold text-gray-900 dark:text-white capitalize">{{ preferences.transportation }}</span>
                  </div>
                  
                  <div v-if="preferences.features.length > 0">
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Features:</span>
                    <div class="mt-2 flex flex-wrap gap-1">
                      <span 
                        v-for="featureId in preferences.features" 
                        :key="featureId" 
                        class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300"
                      >
                        {{ getFeatureName(featureId) }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 hidden">
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Timeline</h3>
                  <div class="relative">
                    <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>
                    <div v-for="(stop, index) in timelineStops" :key="index" class="relative pl-10 pb-6">
                      <div class="absolute left-0 top-1 w-8 h-8 rounded-full bg-indigo-500 dark:bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                        {{ index + 1 }}
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900 dark:text-white">Stop {{ index + 1 }}</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ stop.time }}</p>
                      </div>
                    </div>
                  </div>
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
import { ref, computed } from 'vue';
import { MapPinIcon } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

const features = [
  { id: 1, name: 'Food Available' },
  { id: 2, name: 'Live Music' },
  { id: 3, name: 'Outdoor Seating' },
  { id: 4, name: 'WiFi' },
  { id: 5, name: 'Parking' },
  { id: 6, name: 'Late Night' }
];

const preferences = ref({
  location: '',
  stops: 3,
  maxDistance: 10,
  date: new Date().toISOString().split('T')[0],
  startTime: '18:00',
  transportation: 'driving',
  features: [],
  priority: 'distance'
});

// Computed properties for the summary section
const estimatedDuration = computed(() => {
  // Estimate 1 hour per stop plus 15 minutes travel time between stops
  const hours = preferences.value.stops;
  const travelTime = (preferences.value.stops - 1) * 0.25;
  const totalHours = hours + travelTime;
  
  return `${totalHours.toFixed(1)} hours`;
});

const estimatedHappyHours = computed(() => {
  // Estimate that about 60% of stops will have happy hour
  return Math.ceil(preferences.value.stops * 0.6);
});

const timelineStops = computed(() => {
  const stops = [];
  const startTime = new Date(`2023-01-01T${preferences.value.startTime}`);
  
  for (let i = 0; i < preferences.value.stops; i++) {
    const stopTime = new Date(startTime);
    // Add 1 hour and 15 minutes for each previous stop
    stopTime.setMinutes(stopTime.getMinutes() + (i * 75));
    
    stops.push({
      time: stopTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  }
  
  return stops;
});

function getFeatureName(featureId) {
  const feature = features.find(f => f.id === parseInt(featureId));
  return feature ? feature.name : '';
}

function useCurrentLocation() {
  // In a real app, this would use the Geolocation API
  preferences.value.location = 'Current Location';
}

function generateItinerary() {
  // In a real app, this would generate the itinerary based on preferences
  router.push({
    path: '/itinerary',
    query: { 
      mode: 'lucky',
      stops: preferences.value.stops,
      priority: preferences.value.priority
    }
  });
}
</script>