import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  // This code only runs on the client
  if (process.client) {
    const savedTheme = localStorage.getItem('theme') || 'system';
    
    if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});