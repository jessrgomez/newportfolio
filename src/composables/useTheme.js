import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'theme'

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch (e) {
    // localStorage unavailable (private browsing, etc.)
  }
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

const theme = ref(getInitialTheme())

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  try {
    localStorage.setItem(STORAGE_KEY, theme.value)
  } catch (e) {
    // ignore write errors (private browsing, etc.)
  }
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
}
