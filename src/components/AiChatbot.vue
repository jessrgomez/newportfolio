<script setup>
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const inputText = ref('')
const messagesEl = ref(null)

const messages = ref([
  {
    role: 'bot',
    text: "Hi! I'm Jessica's assistant. Ask me about her experience, skills, projects, or how to get in touch."
  }
])

const suggestions = ['Experience', 'Skills', 'Projects', 'Contact']

const knowledgeBase = [
  {
    keywords: ['experience', 'years', 'background', 'work history', 'career'],
    response:
      "Jessica has 8 years of professional experience as a Frontend Developer, building responsive and scalable web applications across the Aviation, Travel, Enterprise, and Gaming industries. She's currently a Frontend Developer at DigiPlus Interactive Corp., working on the ArenaPlus platform. Check the Career section for the full timeline."
  },
  {
    keywords: ['skill', 'tech stack', 'technolog', 'stack', 'tools', 'language'],
    response:
      "Jessica's core stack includes VueJS (Vue2 & Vue3), ReactJS, JavaScript (ES6+), TypeScript, TailwindCSS, and BootstrapVue on the frontend, with REST APIs, Pinia, TanStack Query, and NodeJS on the backend/integration side. She also works with Git, GitLab, Huawei Cloud, Figma, and AI-assisted tools like Claude AI and Cursor AI. See the Technical Skills section for the complete list."
  },
  {
    keywords: ['project', 'portfolio', 'built', 'arenaplus', 'sapphire', 'atlas', 'aerovault'],
    response:
      "Jessica has worked on projects like ArenaPlus (v1, v2, Community, and Retail App) for DigiPlus, the Sapphire Portal and In-Flight Entertainment System, Atlas ERP System, and the Aerovault Tracking System for Global JD Holdings. Scroll down to the Projects section to see case studies and tech stacks for each."
  },
  {
    keywords: ['education', 'school', 'degree', 'university', 'college', 'study'],
    response:
      "Jessica holds a Bachelor of Science in Information Technology, majoring in Web Development, from Holy Angel University (2014–2018), where she was a Dean's Lister in 2018. She's also completed certifications in Data Privacy Compliance, AWS, and Advanced SEO."
  },
  {
    keywords: ['contact', 'email', 'hire', 'available', 'reach', 'get in touch'],
    response:
      "Jessica is open to new opportunities! You can reach her through the Contact form at the bottom of this page, or email her directly. Scroll down to the Contact section to send a message or copy her email."
  },
  {
    keywords: ['location', 'based', 'where', 'philippines', 'remote'],
    response: "Jessica is based in Pampanga, Philippines (UTC+8) and is open to remote and on-site opportunities."
  },
  {
    keywords: ['digiplus'],
    response:
      "At DigiPlus Interactive Corp., Jessica works on the ArenaPlus platform — delivering frontend enhancements, the Loyalty Module, SABA Lite's Altenar API integration, the Community v2 social module, and the new ArenaPlus Retail App built with Vue 3 and TypeScript."
  },
  {
    keywords: ['global jd', 'aviation'],
    response:
      "At Global JD Holdings Inc., Jessica led frontend development and project coordination for the Sapphire Portal, Sapphire In-Flight Entertainment System, Atlas ERP System, and Aerovault Tracking System, serving aviation and transportation clients."
  },
  {
    keywords: ['who are you', 'what are you', 'bot', 'chatbot'],
    response:
      "I'm a simple FAQ assistant built into this portfolio — I can answer common questions about Jessica's experience, skills, projects, and how to contact her."
  },
  {
    keywords: ['hi', 'hello', 'hey'],
    response: "Hello! Ask me about Jessica's experience, skills, projects, or how to get in touch."
  },
  {
    keywords: ['thank', 'thanks'],
    response: "You're welcome! Let me know if there's anything else you'd like to know."
  }
]

function findResponse(text) {
  const normalized = text.toLowerCase()
  const match = knowledgeBase.find(entry => entry.keywords.some(keyword => normalized.includes(keyword)))
  return match
    ? match.response
    : "I don't have a specific answer for that, but you can ask about Jessica's experience, skills, projects, or contact details — or reach her directly through the Contact section below."
}

async function scrollToBottom() {
  await nextTick()
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
}

function sendMessage(text) {
  const trimmed = text.trim()
  if (!trimmed) return
  messages.value.push({ role: 'user', text: trimmed })
  inputText.value = ''
  scrollToBottom()
  window.setTimeout(() => {
    messages.value.push({ role: 'bot', text: findResponse(trimmed) })
    scrollToBottom()
  }, 350)
}

function handleSubmit() {
  sendMessage(inputText.value)
}

function toggleChat() {
  isOpen.value = !isOpen.value
  if (isOpen.value) scrollToBottom()
}
</script>

<template>
  <div class="ai-chatbot">
    <button
      class="ai-chatbot-toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="ai-chatbot-panel"
      @click="toggleChat"
    >
      <span v-if="!isOpen" aria-hidden="true">💬</span>
      <span v-else aria-hidden="true">✕</span>
      <span class="sr-only">{{ isOpen ? 'Close chat assistant' : 'Open chat assistant' }}</span>
    </button>

    <div v-if="isOpen" id="ai-chatbot-panel" class="ai-chatbot-panel" role="dialog" aria-label="Portfolio chat assistant">
      <div class="ai-chatbot-header">
        <span>Ask about Jessica</span>
      </div>

      <div ref="messagesEl" class="ai-chatbot-messages">
        <div
          v-for="(message, i) in messages"
          :key="i"
          class="ai-chatbot-message"
          :class="`ai-chatbot-message--${message.role}`"
        >
          {{ message.text }}
        </div>
      </div>

      <div class="ai-chatbot-suggestions">
        <button
          v-for="suggestion in suggestions"
          :key="suggestion"
          type="button"
          class="ai-chatbot-chip"
          @click="sendMessage(suggestion)"
        >
          {{ suggestion }}
        </button>
      </div>

      <form class="ai-chatbot-input-row" @submit.prevent="handleSubmit">
        <label class="sr-only" for="ai-chatbot-input">Ask a question</label>
        <input
          id="ai-chatbot-input"
          v-model="inputText"
          class="ai-chatbot-input"
          type="text"
          placeholder="Ask a question…"
          autocomplete="off"
        />
        <button type="submit" class="ai-chatbot-send" aria-label="Send message">➤</button>
      </form>
    </div>
  </div>
</template>
