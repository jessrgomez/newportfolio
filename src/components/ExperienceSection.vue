<script setup>
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'DigiPlus Interactive Corp.',
    logo: 'DP',
    url: 'https://digiplus.com.ph/',
    period: 'November 2025 – Present',
    bullets: [
      'Delivered 20+ frontend enhancements across ArenaPlus Versions 1 and 2, improving user experience and system functionality.',
      "Shipped SABA Lite's Altenar API integration, connecting the sportsbook frontend to live odds and betting data.",
      'Implemented Loyalty Module and SOBOT message notification features for production users.',
      'Currently building the Transactions module and Altenar sportsbook bet slip experience for ArenaPlus Retail App, a new Vue 3 + TypeScript platform, alongside the frontend team.',
      'Collaborated with 10+ cross-functional teammates across Product, QA, UI/UX, and Backend.',
      'Supported multiple production deployments with minimal downtime while resolving issues and optimizing performance.',
      'Collaborated with backend developers using Spring Boot and MySQL.'
    ],
    tech: [
      'VueJS',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Pinia',
      'TailwindCSS',
      'REST APIs',
      'Git',
      'SourceTree',
      'Figma',
      'Cursor AI',
      'Claude AI'
    ],
    projects: ['Maintenance of Back Office Systems', 'ArenaPlus v1', 'ArenaPlus v2', 'APv2 SABA Lite', 'ArenaPlus Retail App']
  },
  {
    title: 'VueJS Developer',
    company: 'ThinkBIT Solutions',
    logo: 'TB',
    url: 'https://thinkbitsolutions.com/',
    period: 'July 2025 – October 2025',
    bullets: [
      'Built and maintained VueJS applications for client-facing and internal workflows.',
      'Integrated frontend features with Laravel/PHP backends through REST API collaboration.',
      'Supported testing, troubleshooting, deployment, and ongoing maintenance across multiple releases.'
    ],
    tech: ['VueJS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    projects: ['Bingo Pilipino']
  },
  {
    title: 'Frontend Developer | Project Coordinator',
    company: 'Global JD Holdings Inc.',
    logo: 'JD',
    url: 'https://www.linkedin.com/company/global-jd-holdings',
    period: 'December 2021 – June 2025',
    bullets: [
      'Led both frontend development and project coordination for Sapphire Portal and the Sapphire In-Flight Entertainment System, including their sync connection across platforms.',
      'Managed client communications, technical documentation, and project requirements from discovery through delivery.',
      'Collaborated with local and international stakeholders to align timelines, scope, and technical expectations throughout each project lifecycle.',
      'Mentored OJT students and junior developers, supporting their growth while maintaining delivery quality on production systems.',
      'Successfully delivered scalable applications across aviation and transportation industries, including Aerovault and ERP System.'
    ],
    tech: ['VueJS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'BootstrapVue', 'REST APIs', 'Git'],
    projects: ['Sapphire Portal', 'Sapphire IFE System', 'ERP System', 'Aerovault']
  },
  {
    title: 'Frontend Developer (Part-Time)',
    company: 'Sentravel Vietnam',
    logo: 'SV',
    url: '',
    period: 'September 2020 – February 2022',
    bullets: [
      'Developed booking systems and reporting portals used by travel operations teams.',
      'Designed dashboards and data visualizations with Highcharts to improve decision-making.',
      'Worked with designers and backend developers to refine usability and end-to-end workflows.'
    ],
    tech: ['VueJS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Highcharts', 'Git'],
    projects: ['Sentravel Booking System', 'Sentravel Reporting System']
  },
  {
    title: 'Programmer & Systems Analyst',
    company: 'Dornier Technology Inc.',
    logo: 'DT',
    url: 'https://dorniertechnology.com/',
    period: 'May 2018 – December 2021',
    bullets: [
      'Started developing aviation-related systems, including the Sapphire IFE platform.',
      'Started designing and developing a CMS application (Sapphire Portal) and company websites.',
      'Collaborated with backend teams for API integrations.',
      'Developed reusable frontend components to improve development efficiency.',
      'Maintained OJT records and attendance.'
    ],
    tech: ['VueJS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    projects: ['Sapphire IFE System', 'Sapphire Portal', 'Fleet Technical Management System']
  }
]

const additionalJobs = [
  {
    title: 'Data Entry Specialist',
    company: 'Upwork',
    url: 'https://www.upwork.com/',
    period: 'May 2019 – July 2019',
    bullets: ['Validated data and prepared reports for client deliverables.', 'Maintained accurate spreadsheet documentation.']
  },
  {
    title: 'Administrative Assistant',
    company: '',
    period: 'March 2018 – May 2018',
    bullets: ['Managed administrative documentation and filing.', 'Prepared reports and meeting minutes to support daily operations.']
  },
  {
    title: 'Programmer (OJT)',
    company: 'Dornier Technology',
    period: 'June 2017 – September 2017',
    bullets: ['Built hybrid mobile application features during on-the-job training.', 'Worked with Firebase and database management for app data flows.']
  }
]

const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section id="experience" ref="target" class="section experience" :class="{ 'animate-in': isVisible }">
    <h2 class="section-title"><span class="title-num">04.</span> Career</h2>
    <div class="timeline">
      <article v-for="job in jobs" :key="job.company + job.period" class="timeline-item">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div class="timeline-heading">
              <div class="company-logo" aria-hidden="true">{{ job.logo }}</div>
              <div>
                <h3>{{ job.title }}</h3>
                <a
                  v-if="job.url"
                  class="timeline-company timeline-company-link"
                  :href="job.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ job.company }}
                  <span class="company-link-icon" aria-hidden="true">↗</span>
                </a>
                <p v-else class="timeline-company">{{ job.company }}</p>
              </div>
            </div>
            <span class="timeline-period">{{ job.period }}</span>
          </div>
          <ul class="timeline-bullets">
            <li v-for="(bullet, i) in job.bullets" :key="i">{{ bullet }}</li>
          </ul>
          <div v-if="job.projects" class="timeline-projects">
            <span class="timeline-projects-label">Projects:</span>
            <span v-for="project in job.projects" :key="project" class="skill-tag">{{ project }}</span>
          </div>
          <div class="project-tech timeline-tech">
            <span v-for="tech in job.tech" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>

    <h3 class="subsection-title">Additional Experience</h3>
    <div class="additional-grid">
      <article v-for="job in additionalJobs" :key="job.title + job.period" class="additional-card">
        <div class="additional-header">
          <h4>{{ job.title }}</h4>
          <span class="timeline-period">{{ job.period }}</span>
        </div>
        <a
          v-if="job.company && job.url"
          class="timeline-company timeline-company-link"
          :href="job.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ job.company }}
          <span class="company-link-icon" aria-hidden="true">↗</span>
        </a>
        <p v-else-if="job.company" class="timeline-company">{{ job.company }}</p>
        <ul class="timeline-bullets">
          <li v-for="(bullet, i) in job.bullets" :key="i">{{ bullet }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
