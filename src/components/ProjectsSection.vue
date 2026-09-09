<script setup>
import { computed, ref } from 'vue'
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'

const projects = [
  {
    title: 'ArenaPlus (v1 & v2)',
    company: 'DigiPlus Interactive Corp.',
    industry: 'Gaming',
    description: 'Delivered frontend enhancements across two major versions of ArenaPlus, including a Loyalty Module and SOBOT message notification features.',
    tech: ['VueJS', 'JavaScript', 'REST APIs', 'Spring Boot', 'MySQL'],
    highlights: ['Frontend enhancements for Version 1 and Version 2', 'Loyalty and customer notification features']
  },
  {
    title: 'SABA Lite',
    company: 'DigiPlus Interactive Corp.',
    industry: 'Gaming',
    description: "Successfully delivered SABA Lite's Altenar API integration, connecting the sportsbook platform to real-time odds and betting data.",
    tech: ['VueJS', 'REST APIs', 'Altenar API', 'Git'],
    highlights: ['Altenar API integration', 'Cross-functional delivery with product and QA']
  },
  {
    title: 'Sapphire Portal',
    company: 'Global JD Holdings Inc.',
    industry: 'Aviation',
    description: 'Led frontend development and project coordination for an enterprise portal, managing requirements and stakeholder communication end-to-end.',
    tech: ['VueJS', 'BootstrapVue', 'REST APIs', 'MySQL'],
    highlights: ['Frontend development and project coordination', 'Requirements and stakeholder management']
  },
  {
    title: 'Sapphire In-Flight Entertainment System',
    company: 'Global JD Holdings Inc.',
    industry: 'Aviation',
    description: 'Built and maintained the frontend for an in-flight entertainment system, coordinating delivery across local and international stakeholders.',
    tech: ['VueJS', 'JavaScript', 'BootstrapVue'],
    highlights: ['In-flight entertainment frontend', 'Local and international stakeholder coordination']
  },
  {
    title: 'ERP System',
    company: 'Global JD Holdings Inc.',
    industry: 'Enterprise',
    description: 'Contributed to an enterprise resource planning system supporting internal business operations and reporting.',
    tech: ['VueJS', 'JavaScript', 'MySQL'],
    highlights: ['Internal business operations', 'Enterprise reporting workflows']
  },
  {
    title: 'Fleet Technical Management System',
    company: 'Global JD Holdings Inc.',
    industry: 'Transportation',
    description: 'Developed frontend features for a fleet technical management platform used to track maintenance and operational data.',
    tech: ['VueJS', 'REST APIs', 'MySQL'],
    highlights: ['Maintenance tracking features', 'Operational data workflows']
  },
  {
    title: 'Booking & Reporting Portal',
    company: 'Sentravel Vietnam',
    industry: 'Travel',
    description: 'Developed booking systems and reporting portals, designing dashboards and data visualizations to improve user experience.',
    tech: ['VueJS', 'Highcharts', 'JavaScript'],
    highlights: ['Booking and reporting workflows', 'Dashboards and data visualization']
  },
  {
    title: 'VueJS Client Applications',
    company: 'ThinkBIT Solutions',
    industry: 'Enterprise',
    description: 'Developed and maintained VueJS applications integrated with Laravel/PHP backends, from testing through deployment.',
    tech: ['VueJS', 'JavaScript', 'PHP', 'Laravel'],
    highlights: ['Laravel/PHP backend collaboration', 'Testing, deployment, and maintenance']
  },
  {
    title: 'Hybrid Mobile Application',
    company: 'Dornier Technology (OJT)',
    industry: 'Enterprise',
    description: 'Built a hybrid mobile application as part of an OJT programmer role, working with Firebase and database management.',
    tech: ['Ionic', 'Cordova', 'Firebase'],
    highlights: ['Hybrid mobile development', 'Firebase and database integration']
  }
]

const industries = ['All', ...new Set(projects.map((project) => project.industry))]
const activeIndustry = ref('All')
const expandedProject = ref(null)
const filteredProjects = computed(() =>
  activeIndustry.value === 'All'
    ? projects
    : projects.filter((project) => project.industry === activeIndustry.value)
)

const selectIndustry = (industry) => {
  activeIndustry.value = industry
  expandedProject.value = null
}

const toggleProject = (title) => {
  expandedProject.value = expandedProject.value === title ? null : title
}

const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section id="projects" ref="target" class="section projects" :class="{ 'animate-in': isVisible }">
    <h2 class="section-title"><span class="title-num">03.</span> Projects</h2>
    <div class="section-intro">
      <div>
        <p class="section-kicker">Selected work across four industries</p>
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
    <TransitionGroup name="project-list" tag="div" class="projects-grid">
      <article v-for="(project, i) in filteredProjects" :key="project.title" class="project-card">
        <div class="project-number">{{ String(i + 1).padStart(2, '0') }}</div>
        <span class="project-industry">{{ project.industry }}</span>
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
  </section>
</template>
