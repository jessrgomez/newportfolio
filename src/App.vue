<script setup>
import { ref, computed } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import AiChatbot from './components/AiChatbot.vue'

const defaultCode = `const developer = {
  role: 'Frontend Developer',
  experience: '8 years',
  stack: ['Vue', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
  available: true
};`
const codeText = ref(defaultCode)

/** Parses the hero's live code editor into the data shown in the About section. */
const developerData = computed(() => {
  const text = codeText.value
  const stackMatch = text.match(/stack:\s*\[([^\]]*)\]/)
  const availableMatch = text.match(/available:\s*(true|false)/)
  let stack = ['Vue', 'JavaScript', 'REST APIs', 'HTML', 'CSS']
  if (stackMatch) {
    const items = stackMatch[1].match(/['"]([^'"]*)['"]/g)
    stack = items ? items.map(s => s.slice(1, -1)) : stack
  }
  return {
    stack: stack.length ? stack : ['Vue', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
    available: availableMatch ? availableMatch[1] === 'true' : true
  }
})
</script>

<template>
  <div class="portfolio">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <NavBar />
    <main id="main-content">
      <HeroSection v-model:code="codeText" />
      <AboutSection :developer-data="developerData" />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
    <AppFooter />
    <AiChatbot />
  </div>
</template>
