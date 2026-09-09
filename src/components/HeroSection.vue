<script setup>
import { onMounted, ref } from 'vue'
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'
import { scrollToSection } from '../utils/scroll'
import { projects } from '../data/projects.js'

const code = defineModel('code', { required: true })
const initialCode = `const developer = {
  role: 'Frontend Developer',
  experience: '8 years',
  stack: ['Vue', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
  available: true
};`

const { target, isVisible } = useAnimateOnScroll({ immediate: true })

const industryCount = new Set(projects.flatMap((project) => project.industries)).size

const stats = [
  { value: 8, label: 'Years of experience' },
  { value: industryCount, label: 'Industries served' },
  { value: projects.length, label: 'Projects featured' }
]
const displayValues = ref(stats.map(() => 0))
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  if (prefersReducedMotion) {
    displayValues.value = stats.map((stat) => stat.value)
    return
  }
  const duration = 900
  const start = performance.now()
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValues.value = stats.map((stat) => Math.round(stat.value * eased))
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})
</script>

<template>
  <section id="hero" ref="target" class="section hero" :class="{ 'animate-in': isVisible }">
    <div class="hero-content">
      <p class="hero-greeting"><span class="status-dot"></span> Open to meaningful opportunities</p>
      <h1 class="hero-name">Jessica Gomez</h1>
      <p class="hero-title">Frontend Developer with 8 years of experience building scalable web applications.</p>
      <p class="hero-desc">
        I build reliable, responsive web experiences and help cross-functional teams turn business
        requirements into production-ready products.
      </p>
      <div class="hero-specialties" aria-label="Professional specialties">
        <span>Vue &amp; React</span>
        <span>API Integration</span>
        <span>Project Coordination</span>
      </div>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary" @click.prevent="scrollToSection('projects')">View Projects</a>
        <a href="#contact" class="btn btn-outline" @click.prevent="scrollToSection('contact')">Get in Touch</a>
      </div>
      <dl class="hero-stats" aria-label="Career highlights">
        <div v-for="(stat, i) in stats" :key="stat.label">
          <dt>{{ displayValues[i] }}</dt>
          <dd>{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
    <div class="hero-visual">
      <div class="code-block code-block-below" aria-label="Interactive developer profile">
        <div class="code-window-header">
          <div class="code-window-dots" aria-hidden="true"><span></span><span></span><span></span></div>
          <span>jessica.profile.js</span>
          <button type="button" @click="code = initialCode">Reset</button>
        </div>
        <label class="sr-only" for="developer-profile-code">Edit Jessica's developer profile code</label>
        <textarea
          id="developer-profile-code"
          v-model="code"
          class="code-editable"
          spellcheck="false"
          rows="6"
        ></textarea>
        <p class="hero-code-hint">Try changing the stack or availability—the About section updates live.</p>
      </div>
    </div>
  </section>
</template>
