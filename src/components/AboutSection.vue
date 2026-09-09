<script setup>
import DeveloperScene from './DeveloperScene.vue'
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'

defineProps({
  developerData: {
    type: Object,
    required: true
  }
})

const aboutParagraphs = [
  'Frontend Developer with 8 years of professional experience building responsive and scalable web applications across Aviation, Travel and Tours, Enterpriseand Gaming Industries.',

  'Experienced in delivering production-ready solutions while maintaining a strong focus on user experience, performance, and business objectives. Skilled in frontend development, API integrations, project coordination, and technical documentation throughout the software development lifecycle.',

  'Proven ability to collaborate with cross-functional teams, translate complex business requirements into reliable digital solutions, and deliver high-quality applications in fast-paced environments.',

  'Recognized for adaptability, problem-solving, and maintaining high standards of quality while balancing both technical and business priorities.'
]
 
const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section id="about" ref="target" class="section about" :class="{ 'animate-in': isVisible }">
    <h2 class="section-title"><span class="title-num">01.</span> Professional Summary</h2>
    <div class="about-grid">
      <div class="about-text">
        <p v-for="(paragraph, i) in aboutParagraphs" :key="i">{{ paragraph }}</p>
        <p class="about-availability">
          <span class="status-dot" :class="{ 'status-dot--off': !developerData.available }"></span>
          {{ developerData.available ? "Open to new opportunities" : "Currently not taking new projects" }}
        </p>
      </div>
      <div class="about-visual">
        <DeveloperScene :stack="developerData.stack" />
      </div>
    </div>
  </section>
</template>
