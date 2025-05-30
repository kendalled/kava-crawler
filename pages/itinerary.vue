<template>
  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white">Your Kava Crawl Itinerary</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <!-- Itinerary Header -->
            <div class="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h2 class="text-lg font-medium text-gray-900 dark:text-white">{{ itineraryTitle }}</h2>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ formattedDate }}</p>
                </div>
                <div class="mt-3 sm:mt-0 flex space-x-3">
                  <button 
                    @click="shareItinerary" 
                    class="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  >
                    <ShareIcon class="h-4 w-4 mr-1" />
                    Share
                  </button>
                  <button 
                    @click="printItinerary" 
                    class="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  >
                    <PrinterIcon class="h-4 w-4 mr-1" />
                    Print
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Map Overview -->
            <div class="p-6 border-b border-gray-200 dark:border-gray-700">
              <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg">
                <div class="mapouter h-full w-full"><div class="gmap_canvas h-full w-full"><iframe class="gmap_iframe h-full w-full rounded-lg shadow-sm" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="`https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${encodeURIComponent(itinerary.stops[0].name)}&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"></iframe><a class="sr-only" href="https://embed-googlemap.com">google maps embed</a></div></div>
              </div>
              <div class="mt-4 flex justify-between text-sm">
                <div>
                  <span class="text-gray-500 dark:text-gray-400">Total Distance:</span>
                  <span class="ml-1 font-medium text-gray-900 dark:text-white">{{ itinerary.totalDistance }} miles</span>
                </div>
                <div>
                  <span class="text-gray-500 dark:text-gray-400">Estimated Duration:</span>
                  <span class="ml-1 font-medium text-gray-900 dark:text-white">{{ itinerary.duration }}</span>
                </div>
                <div>
                  <a 
                    :href="itinerary.googleMapsUrl" 
                    target="_blank" 
                    class="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Stops List -->
            <div class="px-6 py-4">
              <h3 class="text-base font-medium text-gray-900 dark:text-white mb-4">Your Stops</h3>
              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li v-for="(stop, index) in itinerary.stops" :key="index" class="mb-10 ml-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full -left-4 ring-4 ring-white dark:ring-gray-800">
                    <span class="text-indigo-600 dark:text-indigo-300 font-medium">{{ index + 1 }}</span>
                  </span>
                  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div class="flex justify-between items-start">
                      <div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ stop.name }}</h4>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ stop.address }}</p>
                      </div>
                      <div class="text-right text-sm">
                        <p class="text-gray-500 dark:text-gray-400">Arrival: <span class="font-medium text-gray-900 dark:text-white">{{ stop.arrivalTime }}</span></p>
                        <p class="text-gray-500 dark:text-gray-400">Stay: <span class="font-medium text-gray-900 dark:text-white">{{ stop.duration }}</span></p>
                      </div>
                    </div>
                    
                    <div class="mt-3 flex flex-wrap gap-1">
                      <span 
                        v-for="feature in stop.features" 
                        :key="feature" 
                        class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                      >
                        {{ feature }}
                      </span>
                    </div>
                    
                    <div class="mt-3 text-sm">
                      <p class="text-gray-500 dark:text-gray-400">Hours: <span class="font-medium text-gray-900 dark:text-white">{{ stop.hours }}</span></p>
                      <p v-if="stop.happyHour" class="text-gray-500 dark:text-gray-400">
                        Happy Hour: <span class="font-medium text-gray-900 dark:text-white">{{ stop.happyHour }}</span>
                      </p>
                    </div>
                    
                    <div v-if="index < itinerary.stops.length - 1" class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div class="flex items-center text-sm">
                        <ArrowRightIcon class="h-4 w-4 text-gray-400 dark:text-gray-500 mr-1" />
                        <span class="text-gray-500 dark:text-gray-400">Next stop: {{ stop.distanceToNext }} miles ({{ stop.timeToNext }})</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            
            <!-- Notes and Tips -->
            <div class="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <h3 class="text-base font-medium text-gray-900 dark:text-white mb-2">Notes & Tips</h3>
              <ul class="list-disc pl-5 text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>Remember to drink responsibly and have a designated driver.</li>
                <li>Check each bar's social media for any special events or changes in hours.</li>
                <li>Consider calling ahead for large groups.</li>
                <li>Weather may affect outdoor seating availability.</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-6 flex justify-between">
            <button 
              @click="goBack" 
              class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              <ArrowLeftIcon class="h-4 w-4 mr-1" />
              Back to Planning
            </button>
            <button 
              @click="createNewCrawl" 
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Create New Crawl
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { ShareIcon, PrinterIcon, MapIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-vue-next';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Sample data - would be replaced with real data from your API
const itinerary = ref({
  id: '12345',
  title: 'Reece\'s Annual Kava Crawl',
  date: '2023-08-15',
  startTime: '18:00',
  totalDistance: 8.7,
  duration: '4 hours 30 minutes',
  googleMapsUrl: 'https://maps.google.com',
  stops: [
    {
      name: 'Kava Cove',
      address: '123 Beach Blvd, Tampa, FL',
      features: ['Food Available', 'Outdoor Seating', 'Parking'],
      hours: '12pm - 12am',
      happyHour: '4pm - 7pm',
      arrivalTime: '6:00 PM',
      duration: '1 hour',
      distanceToNext: 2.3,
      timeToNext: '10 minutes'
    },
    {
      name: 'Tropical Kava Lounge',
      address: '321 Bayshore Blvd, Tampa, FL',
      features: ['Food Available', 'WiFi', 'Parking', 'Late Night'],
      hours: '12pm - 2am',
      happyHour: '6pm - 9pm',
      arrivalTime: '7:10 PM',
      duration: '1 hour',
      distanceToNext: 3.2,
      timeToNext: '15 minutes'
    },
    {
      name: 'Island Kava',
      address: '456 Palm Ave, St. Petersburg, FL',
      features: ['Food Available', 'Live Music', 'WiFi'],
      hours: '10am - 10pm',
      happyHour: '3pm - 6pm',
      arrivalTime: '8:25 PM',
      duration: '1 hour 30 minutes',
      distanceToNext: null,
      timeToNext: null
    }
  ]
});

const itineraryTitle = computed(() => {
  return itinerary.value.title;
});

const formattedDate = computed(() => {
  const date = new Date(itinerary.value.date);
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
});

onMounted(() => {
  // In a real app, this would fetch the itinerary data based on the route params
  console.log('Route query params:', route.query);
});

function shareItinerary() {
  // In a real app, this would generate a shareable link
  const shareUrl = `${window.location.origin}/shared/${itinerary.value.id}`;
  
  if (navigator.share) {
    navigator.share({
      title: itinerary.value.title,
      text: 'Check out my Kava Crawl itinerary!',
      url: shareUrl
    });
  } else {
    // Fallback for browsers that don't support the Web Share API
    alert(`Share this link with your friends: ${shareUrl}`);
  }
}

function printItinerary() {
  window.print();
}

function goBack() {
  router.back();
}

function createNewCrawl() {
  router.push('/');
}
</script>