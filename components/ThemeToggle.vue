<template>
  <div class="flex items-center">
    <button
      @click="toggleTheme"
      class="rounded-full p-1 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <SunIcon v-if="isDark" class="h-6 w-6" />
      <MoonIcon v-else class="h-6 w-6" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { SunIcon, MoonIcon } from 'lucide-vue-next';

const isDark = ref(false);
const theme = ref('system');

// Apply the theme to the document
const applyTheme = (newTheme) => {
  if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDark.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    isDark.value = false;
  }
};

// Toggle between light and dark
const toggleTheme = () => {
  theme.value = isDark.value ? 'light' : 'dark';
  localStorage.setItem('theme', theme.value);
  applyTheme(theme.value);
};

// Watch for system preference changes
onMounted(() => {
  // Get saved theme from localStorage or default to system
  const savedTheme = localStorage.getItem('theme') || 'system';
  theme.value = savedTheme;
  
  // Apply the initial theme
  applyTheme(theme.value);
  
  // Listen for system preference changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    if (theme.value === 'system') {
      applyTheme('system');
    }
  });
});
</script>