<script setup>
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'

const certifications = [
  'Data Privacy Compliance',
  'AWS Summit Online',
  'AWS Data, Database and Analytics',
  'Advanced SEO',
  'CSS Processor and Web Security Measures'
]

const languages = ['English', 'Filipino']

const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section id="education" ref="target" class="section education" :class="{ 'animate-in': isVisible }">
    <h2 class="section-title"><span class="title-num">05.</span> Education</h2>
    <div class="education-grid">
      <div class="education-card">
        <h3>Bachelor of Science in Information Technology</h3>
        <p class="education-major">Major in Web Development</p>
        <p class="timeline-company">Holy Angel University</p>
        <div class="timeline-header">
          <span class="timeline-period">2014 - 2018</span>
          <span class="skill-tag">Dean's Lister (2018)</span>
        </div>
      </div>

      <div class="education-card">
        <h3 class="subsection-title subsection-title--tight">Certifications</h3>
        <ul class="plain-list">
          <li v-for="cert in certifications" :key="cert">{{ cert }}</li>
        </ul>
      </div>

      <div class="education-card">
        <h3 class="subsection-title subsection-title--tight">Languages</h3>
        <div class="skill-tags">
          <span v-for="lang in languages" :key="lang" class="skill-tag">{{ lang }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
