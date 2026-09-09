<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { scrollToSection } from '../utils/scroll'

const activeSection = ref('hero')
const menuOpen = ref(false)

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Career' },
  { id: 'education', label: 'Credentials' },
  { id: 'contact', label: 'Contact' }
]

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const goToSection = (id) => {
  scrollToSection(id)
  closeMenu()
}

const handleScroll = () => {
  const scrollPos = window.scrollY + 150
  if (window.scrollY < 100) {
    activeSection.value = 'hero'
    return
  }
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i].id)
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = sections[i].id
      break
    }
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen)
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <nav class="nav" :class="{ scrolled: activeSection !== 'hero' }" aria-label="Primary navigation">
    <a href="#" class="logo" @click.prevent="goToSection('hero')">
      <span class="logo-bracket">&lt;</span>JG<span class="logo-bracket">/&gt;</span>
      <span class="logo-name">Jessica Gomez</span>
    </a>
    <button
      v-if="menuOpen"
      class="nav-backdrop"
      type="button"
      aria-label="Close navigation"
      @click="closeMenu"
    ></button>
    <ul id="primary-menu" class="nav-links" :class="{ open: menuOpen }">
      <li v-for="section in sections" :key="section.id">
        <a
          :href="`#${section.id}`"
          :class="{ active: activeSection === section.id }"
          :aria-current="activeSection === section.id ? 'page' : undefined"
          @click.prevent="goToSection(section.id)"
        >
          {{ section.label }}
        </a>
      </li>
    </ul>
    <button
      class="nav-toggle"
      :class="{ open: menuOpen }"
      type="button"
      aria-label="Toggle navigation menu"
      aria-controls="primary-menu"
      :aria-expanded="menuOpen"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>
