<template>
  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white">Custom Planning</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Filters Section -->
            <div class="w-full lg:w-1/3">
              <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Filters</h2>
                
                <div class="mb-4">
                  <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Starting Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    v-model="filters.location" 
                    placeholder="Enter address or use current location" 
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                  />
                  <button 
                    @click="useCurrentLocation" 
                    class="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  >
                    <MapPinIcon class="h-4 w-4 mr-1" />
                    Use Current Location
                  </button>
                </div>
                
                <div class="mb-4">
                  <label for="radius" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Maximum Distance (miles)</label>
                  <input 
                    type="range" 
                    id="radius" 
                    v-model="filters.radius" 
                    min="1" 
                    max="50" 
                    class="mt-1 block w-full accent-indigo-600 dark:accent-indigo-400"
                  />
                  <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{{ filters.radius }} miles</span>
                    <span>50 miles</span>
                  </div>
                </div>
                
                <div class="mb-4">
                  <label for="stops" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Number of Stops</label>
                  <select 
                    id="stops" 
                    v-model="filters.stops" 
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                  >
                    <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                  </select>
                </div>
                
                <div class="mb-4">
                  <span class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Features</span>
                  <div class="space-y-2">
                    <div v-for="feature in features" :key="feature.id" class="flex items-center">
                      <input 
                        :id="`feature-${feature.id}`" 
                        type="checkbox" 
                        v-model="filters.features" 
                        :value="feature.id" 
                        class="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700"
                      />
                      <label :for="`feature-${feature.id}`" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        {{ feature.name }}
                      </label>
                    </div>
                  </div>
                </div>
                
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Time of Visit</label>
                  <div class="mt-1 grid grid-cols-2 gap-2">
                    <div>
                      <label for="date" class="block text-xs text-gray-500 dark:text-gray-400">Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        v-model="filters.date" 
                        class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                      />
                    </div>
                    <div>
                      <label for="time" class="block text-xs text-gray-500 dark:text-gray-400">Start Time</label>
                      <input 
                        type="time" 
                        id="time" 
                        v-model="filters.time" 
                        class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <button 
                  @click="applyFilters" 
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                  Apply Filters
                </button>
              </div>
            </div>
            
            <!-- Map and Results Section -->
            <div class="w-full lg:w-2/3">
              <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
                <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <div class="mapouter h-full w-full"><div class="gmap_canvas h-full w-full"><iframe class="gmap_iframe h-full w-full rounded-lg shadow-sm" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=NovelTea Kava Bar&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a class="sr-only" href="https://embed-googlemap.com">google maps embed</a></div></div>
                  <!-- <MapIcon class="h-12 w-12 text-gray-400 dark:text-gray-500" />
                  <span class="ml-2 text-gray-500 dark:text-gray-400">Map will be displayed here</span> -->
                </div>
              </div>
              
              <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                  <h2 class="text-lg font-medium text-gray-900 dark:text-white">Available Kava Bars</h2>
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{ filteredBars.length }} results</span>
                </div>
                
                <div v-if="filteredBars.length === 0" class="text-center py-8">
                  <SearchXIcon class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                  <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No bars found</h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Try adjusting your filters to see more results.</p>
                </div>
                
                <div v-else class="space-y-4">
                  <div 
                    v-for="bar in filteredBars" 
                    :key="bar.id" 
                    class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div class="flex justify-between">
                      <div>
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ bar.name }}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ bar.address }}</p>
                        <div class="mt-2 flex flex-wrap gap-1">
                          <span 
                            v-for="feature in bar.features" 
                            :key="feature" 
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                          >
                            {{ getFeatureName(feature) }}
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-col items-end">
                        <span class="text-xs text-gray-500 dark:text-gray-400">{{ bar.distance }} miles away</span>
                        <div class="mt-auto">
                          <button 
                            @click="toggleBarSelection(bar)" 
                            class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            :class="{ 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700': selectedBars.includes(bar.id) }"
                          >
                            {{ selectedBars.includes(bar.id) ? 'Selected' : 'Select' }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-6 flex justify-end">
                  <button 
                    @click="createItinerary" 
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    :disabled="selectedBars.length === 0"
                    :class="{ 'opacity-50 cursor-not-allowed': selectedBars.length === 0 }"
                  >
                    Create Itinerary
                  </button>
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
import { MapPinIcon, MapIcon, SearchXIcon } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sample data - would be replaced with your JSON data
const kavaBars = ref([
  {
    id: 1,
    name: 'Kava Cove',
    address: '123 Beach Blvd, Tampa, FL',
    features: [1, 3, 5],
    hours: '12pm - 12am',
    happyHour: '4pm - 7pm',
    distance: 2.3
  },
  {
    id: 2,
    name: 'Island Kava',
    address: '456 Palm Ave, St. Petersburg, FL',
    features: [1, 2, 4],
    hours: '10am - 10pm',
    happyHour: '3pm - 6pm',
    distance: 4.1
  },
  {
    id: 3,
    name: 'Kava Paradise',
    address: '789 Gulf Dr, Clearwater, FL',
    features: [2, 3, 6],
    hours: '11am - 11pm',
    happyHour: '5pm - 8pm',
    distance: 5.7
  },
  {
    id: 4,
    name: 'Tropical Kava Lounge',
    address: '321 Bayshore Blvd, Tampa, FL',
    features: [1, 4, 5, 6],
    hours: '12pm - 2am',
    happyHour: '6pm - 9pm',
    distance: 3.2
  },
  {
    id: 5,
    name: 'Sunset Kava Bar',
    address: '654 Central Ave, St. Petersburg, FL',
    features: [2, 3, 5],
    hours: '2pm - 2am',
    happyHour: '4pm - 7pm',
    distance: 6.8
  }
]);

const features = [
  { id: 1, name: 'Food Available' },
  { id: 2, name: 'Live Music' },
  { id: 3, name: 'Outdoor Seating' },
  { id: 4, name: 'WiFi' },
  { id: 5, name: 'Parking' },
  { id: 6, name: 'Late Night' }
];

const filters = ref({
  location: '',
  radius: 10,
  stops: 3,
  features: [],
  date: new Date().toISOString().split('T')[0],
  time: '18:00'
});

const selectedBars = ref([]);

const filteredBars = computed(() => {
  return kavaBars.value.filter(bar => {
    // Filter by distance
    if (bar.distance > filters.value.radius) return false;
    
    // Filter by features
    if (filters.value.features.length > 0) {
      const hasAllFeatures = filters.value.features.every(f => bar.features.includes(parseInt(f)));
      if (!hasAllFeatures) return false;
    }
    
    return true;
  });
});

function getFeatureName(featureId) {
  const feature = features.find(f => f.id === featureId);
  return feature ? feature.name : '';
}

function useCurrentLocation() {
  // In a real app, this would use the Geolocation API
  filters.value.location = 'Current Location';
}

function applyFilters() {
  // In a real app, this would trigger API calls or filtering logic
  console.log('Applying filters:', filters.value);
}

function toggleBarSelection(bar) {
  const index = selectedBars.value.indexOf(bar.id);
  if (index === -1) {
    if (selectedBars.value.length < filters.value.stops) {
      selectedBars.value.push(bar.id);
    }
  } else {
    selectedBars.value.splice(index, 1);
  }
}

function createItinerary() {
  // In a real app, this would generate the itinerary and navigate to it
  router.push({
    path: '/itinerary',
    query: { bars: selectedBars.value.join(',') }
  });
}
</script>