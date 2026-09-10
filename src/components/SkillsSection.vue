<script setup>
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['VueJS (Vue2 & Vue3)', 'ReactJS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'BootstrapVue', 'TailwindCSS', 'Material UI', 'Highcharts', 'Storybook', 'WebSocket']
  },
  {
    title: 'Backend & Integration',
    items: ['REST APIs', 'Axios', 'Pinia', 'TanStack Query', 'NodeJS', 'ExpressJS', 'PHP', 'MySQL']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Huawei Cloud', 'Swagger', 'Jira', 'Trello', 'SourceTree', 'Figma', 'Cursor AI', 'Claude AI', 'Postman', 'NPM', 'Vite', 'VS Code']
  },
  {
    title: 'Professional Skills',
    items: ['Project Coordination', 'Requirement Gathering', 'Client Communication', 'UAT Testing', 'Documentation Management', 'Agile Methodologies']
  }
]

const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section id="skills" ref="target" class="section skills" :class="{ 'animate-in': isVisible }">
    <h2 class="section-title"><span class="title-num">02.</span> Technical Skills</h2>
    <div class="skills-groups">
      <div v-for="group in skillGroups" :key="group.title" class="skill-group">
        <h3 class="skill-group-title">{{ group.title }}</h3>
        <div class="skill-tags">
          <span v-for="item in group.items" :key="item" class="skill-tag">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
