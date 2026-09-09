<script setup>
import { computed, ref } from 'vue'
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'
import ProjectModal from './ProjectModal.vue'
import { projects } from '../data/projects.js'

const industries = ['All', ...new Set(projects.flatMap((project) => project.industries))]
const activeIndustry = ref('All')
const expandedProject = ref(null)
const filteredProjects = computed(() =>
  activeIndustry.value === 'All'
    ? projects
    : projects.filter((project) => project.industries.includes(activeIndustry.value))
)

const selectIndustry = (industry) => {
  activeIndustry.value = industry
  expandedProject.value = null
}

const toggleProject = (title) => {
  expandedProject.value = expandedProject.value === title ? null : title
}

const activeProject = ref(null)

const openCaseStudy = (project) => {
  activeProject.value = project
}

const closeCaseStudy = () => {
  activeProject.value = null
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const tiltCard = (event) => {
  if (prefersReducedMotion) return
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5
  card.style.transform = `perspective(800px) translateY(-4px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`
}

const resetTilt = (event) => {
  event.currentTarget.style.transform = ''
}

// CSS Grid drops out-of-flow (leaving) items from its track layout, so a plain
// `position: absolute` leaves them stranded at the wrong spot. Pin each leaving
// card to its exact last on-screen position (via `position: fixed`, set in CSS)
// before Vue removes it from the grid, so it fades out where it actually was.
const pinBeforeLeave = (el) => {
  const rect = el.getBoundingClientRect()
  el.style.left = `${rect.left}px`
  el.style.top = `${rect.top}px`
  el.style.width = `${rect.width}px`
  el.style.height = `${rect.height}px`
}

const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section id="projects" ref="target" class="section projects" :class="{ 'animate-in': isVisible }">
    <h2 class="section-title"><span class="title-num">03.</span> Projects</h2>
    <div class="section-intro">
      <div>
        <p class="section-kicker">Selected work across {{ industries.length - 1 }} industries</p>
        <p>Explore the products and systems I helped deliver. Client work is described at a high level to respect confidentiality.</p>
      </div>
      <span class="project-count">{{ filteredProjects.length }} project{{ filteredProjects.length === 1 ? '' : 's' }}</span>
    </div>
    <div class="project-filters" aria-label="Filter projects by industry">
      <button
        v-for="industry in industries"
        :key="industry"
        type="button"
        :class="{ active: activeIndustry === industry }"
        :aria-pressed="activeIndustry === industry"
        @click="selectIndustry(industry)"
      >
        {{ industry }}
      </button>
    </div>
    <TransitionGroup name="project-list" tag="div" class="projects-grid" @before-leave="pinBeforeLeave">
      <article
        v-for="(project, i) in filteredProjects"
        :key="project.title"
        class="project-card"
        @mousemove="tiltCard"
        @mouseleave="resetTilt"
      >
        <button
          v-if="project.images"
          type="button"
          class="project-thumb"
          :aria-label="`View ${project.title} case study screenshots`"
          @click="openCaseStudy(project)"
        >
          <img :src="project.images[0]" :alt="`${project.title} screenshot`" loading="lazy" />
          <span class="project-thumb-badge">🔍 View case study</span>
        </button>
        <div class="project-number">{{ String(i + 1).padStart(2, '0') }}</div>
        <span class="project-industry" :class="{ 'project-industry--overlay': project.images }">{{ project.industries.join(' / ') }}</span>
        <h3>{{ project.title }}</h3>
        <p class="project-company">{{ project.company }}</p>
        <p>{{ project.description }}</p>
        <div class="project-tech">
          <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
        </div>
        <button
          class="project-details-toggle"
          type="button"
          :aria-expanded="expandedProject === project.title"
          @click="toggleProject(project.title)"
        >
          {{ expandedProject === project.title ? 'Hide contribution' : 'View contribution' }}
          <span aria-hidden="true">{{ expandedProject === project.title ? '−' : '+' }}</span>
        </button>
        <div v-if="expandedProject === project.title" class="project-details">
          <p class="project-details-label">Key contribution</p>
          <ul>
            <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </article>
    </TransitionGroup>
    <ProjectModal :project="activeProject" @close="closeCaseStudy" />
  </section>
</template>
