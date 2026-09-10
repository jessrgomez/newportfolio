import sapphireIfeImg from '../assets/projects/sapphire-ife.jpg'
import sapphireAdminImg from '../assets/projects/sapphire-admin.jpg'
import sentravelBookingImg from '../assets/projects/sentravel-booking.jpg'
import sentravelAdminImg from '../assets/projects/sentravel-admin.jpg'
import atlasImg from '../assets/projects/atlas.png'
import aerovaultImg from '../assets/projects/aerovault.png'
import sapphireWebsiteImg from '../assets/projects/sapphire-website.jpg'
import aerostrategiesImg from '../assets/projects/aerostrategies-timesheet.jpg'
import sapphireCityImg from '../assets/projects/sapphire-city.jpg'

export const projects = [
  {
    title: 'ArenaPlus (v1 & v2)',
    company: 'DigiPlus Interactive Corp.',
    industries: ['Gaming'],
    description: 'Delivered frontend enhancements across two major versions of ArenaPlus — including its LaroPlus-branded mobile app for v1 — covering the Loyalty Club, SOBOT customer messaging, and more.',
    tech: ['VueJS', 'TypeScript', 'JavaScript', 'Pinia', 'Vuex', 'Axios', 'Vant', 'REST APIs', 'Spring Boot', 'MySQL'],
    highlights: [
      'Built the Loyalty Club end-to-end across desktop and mobile, including tier progression, rank-up UI, and refer-a-friend statistics via the Loyalty API',
      'Delivered SOBOT customer message notification features across web and the LaroPlus (ArenaPlus v1) mobile app',
      'Brand partnership updates (e.g. NBA) and PAGCOR compliance/betting rules updates on the mobile app',
      'Login and verification code fixes across iOS and Android'
    ]
  },
  {
    title: 'SABA Lite & Sportsbook (Altenar)',
    company: 'DigiPlus Interactive Corp.',
    industries: ['Gaming'],
    description: "Delivered SABA Lite's Altenar API integration and grew it into ArenaPlus's broader sportsbook experience, covering horse and greyhound racing, live-streamed races, and parlay/singles wagering.",
    tech: ['VueJS', 'REST APIs', 'Altenar API', 'Git'],
    highlights: [
      'Altenar API integration connecting the sportsbook frontend to live odds and betting data',
      'Horse and greyhound racing API integration with live-streamed race widgets',
      'Parlay and singles wagering flows for sportsbook betting',
      'Cross-functional delivery with product and QA'
    ]
  },
  {
    title: 'ArenaPlus Community (v2)',
    company: 'DigiPlus Interactive Corp.',
    industries: ['Gaming'],
    description: 'Contributed to the Community v2 module of ArenaPlus, a social feed feature within the platform supporting posts, hashtags, and follower interactions.',
    tech: ['VueJS', 'TypeScript', 'Pinia', 'TanStack Query', 'TailwindCSS'],
    highlights: [
      'Built the community post binding and hashtag page for desktop view',
      'Implemented Fans and Following functionality on user profiles',
      'Built the community profile UI for mobile view, including dark mode fixes',
      'Fixed forum tab layout and follower-related issues across the module'
    ]
  },
  {
    title: 'ArenaPlus Retail App',
    company: 'DigiPlus Interactive Corp.',
    industries: ['Gaming'],
    description: 'Currently building the transaction history and sportsbook betting experience for a new retail-focused version of the ArenaPlus platform, working alongside a small frontend team.',
    tech: ['VueJS', 'TypeScript', 'Pinia', 'TanStack Query', 'TailwindCSS', 'Altenar API'],
    highlights: [
      'Building the Transactions module (Casino, Sports, and Promotions history) with status badges, filters, pagination, and detail drawers',
      'Integrating Altenar sportsbook bet slip widgets with selection-count and login-prompt composables',
      'Implementing dark/light theme-aware iconography across the transactions UI'
    ]
  },
  {
    title: 'VueJS Client Applications',
    company: 'ThinkBIT Solutions',
    industries: ['Enterprise'],
    description: 'Developed and maintained VueJS applications integrated with Laravel/PHP backends, from testing through deployment.',
    tech: ['VueJS', 'JavaScript', 'PHP', 'Laravel'],
    highlights: ['Laravel/PHP backend collaboration', 'Testing, deployment, and maintenance']
  },
  {
    title: 'Atlas System',
    company: 'Global JD Holdings Inc.',
    industries: ['Aviation', 'Enterprise'],
    description: 'Built the frontend for an aviation-focused ERP platform integrating core business processes for airlines, MRO providers, aircraft manufacturers, and airport operators.',
    tech: ['ReactJS', 'Redux', 'Axios', 'NodeJS', 'Material UI', 'Storybook'],
    highlights: ['Enterprise resource planning workflows for aviation businesses', 'Reusable component library built with Storybook'],
    images: [atlasImg]
  },
  {
    title: 'Aerovault Tracking System (ATS)',
    company: 'Global JD Holdings Inc.',
    industries: ['Aviation'],
    description: 'Built the frontend for an aviation asset-tracking system that streamlines leased aircraft documentation between airlines and lessors, covering both records management and project management workflows.',
    tech: ['ReactJS', 'Redux', 'Axios', 'NodeJS', 'Material UI', 'Storybook'],
    highlights: [
      'Records Management module for organizing, searching, and transferring compliance documents',
      'Project Management module with interactive dashboards and real-time documentation checklists'
    ],
    images: [aerovaultImg]
  },
  {
    title: 'Sapphire Website',
    company: 'Global JD Holdings Inc.',
    industries: ['Aviation'],
    description: 'Built a marketing website showcasing the Sapphire platform, its features, and its airline clients and partners.',
    tech: ['HTML5', 'CSS3', 'jQuery', 'JavaScript', 'Bootstrap'],
    highlights: ['Company and product overview site for the Sapphire ecosystem'],
    images: [sapphireWebsiteImg]
  },
  {
    title: 'Aerostrategies Timesheet Portal',
    company: 'Global JD Holdings Inc.',
    industries: ['Aviation', 'Enterprise'],
    description: 'Built a timesheet portal with role-based access for admins, employees, and clients to track and manage task time and priorities.',
    tech: ['VueJS', 'BootstrapVue', 'HTML', 'CSS', 'NodeJS'],
    highlights: ['Role-based access for Admins, Employees, and Clients', 'Task time-tracking to help prioritize urgent work'],
    images: [aerostrategiesImg]
  },
  {
    title: 'Sapphire City Website',
    company: 'Global JD Holdings Inc.',
    industries: ['Enterprise'],
    description: 'Built the frontend for a blockchain-based real estate membership platform under the Sapphire brand.',
    tech: ['VueJS', 'Bootstrap', 'HTML', 'CSS', 'NodeJS'],
    highlights: ['Membership platform frontend for a blockchain real estate concept'],
    images: [sapphireCityImg]
  },
  {
    title: 'Sapphire Portal',
    company: 'Dornier Technology Inc. → Global JD Holdings Inc.',
    industries: ['Aviation', 'Transportation'],
    description: 'Led frontend development and project coordination for an enterprise portal, managing requirements and stakeholder communication end-to-end.',
    tech: ['VueJS', 'BootstrapVue', 'REST APIs', 'MySQL'],
    highlights: ['Frontend development and project coordination', 'Requirements and stakeholder management'],
    images: [sapphireAdminImg]
  },
  {
    title: 'Sapphire In-Flight Entertainment System',
    company: 'Dornier Technology Inc. → Global JD Holdings Inc.',
    industries: ['Aviation', 'Transportation'],
    description: 'Built and maintained the frontend for an in-flight entertainment system, coordinating delivery across local and international stakeholders.',
    tech: ['VueJS', 'JavaScript', 'BootstrapVue'],
    highlights: ['In-flight entertainment frontend', 'Local and international stakeholder coordination'],
    images: [sapphireIfeImg]
  },
  {
    title: 'Fleet Technical Management System',
    company: 'Dornier Technology Inc.',
    industries: ['Aviation'],
    description: 'Developed frontend features for a fleet technical management platform used to track maintenance and operational data.',
    tech: ['VueJS', 'REST APIs', 'MySQL'],
    highlights: ['Maintenance tracking features', 'Operational data workflows']
  },
  {
    title: 'Hybrid Mobile Application',
    company: 'Dornier Technology (OJT)',
    industries: ['Enterprise'],
    description: 'Built a hybrid mobile application as part of an OJT programmer role, working with Firebase and database management.',
    tech: ['Ionic', 'Cordova', 'Firebase'],
    highlights: ['Hybrid mobile development', 'Firebase and database integration']
  },
  {
    title: 'Sentravel: Booking System and Ancillary Revenue Portal',
    company: 'Vietnam',
    industries: ['Travel'],
    description: 'Developed booking systems and reporting portals, designing dashboards and data visualizations to improve user experience.',
    tech: ['VueJS', 'Highcharts', 'JavaScript'],
    highlights: ['Booking and reporting workflows', 'Dashboards and data visualization'],
    images: [sentravelBookingImg, sentravelAdminImg]
  }
]
