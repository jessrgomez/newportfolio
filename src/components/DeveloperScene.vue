<template>
  <div class="developer-scene">
    <div
      v-for="item in displayStack"
      :key="item.key"
      class="float-icon"
      :class="item.pos"
      aria-hidden="true"
    >
      <svg v-if="item.svg" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" v-html="item.svg"></svg>
      <div v-else class="float-fallback">{{ item.label.slice(0, 2) }}</div>
      <span class="float-label">{{ item.label }}</span>
    </div>

    <div class="developer-figure">
      <svg class="developer-svg" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="140" cy="195" rx="75" ry="12" fill="#1a2234" stroke="#334155" stroke-width="2"/>
        <rect x="65" y="120" width="150" height="75" rx="8" fill="#1a2234" stroke="#334155" stroke-width="2"/>
        <rect x="75" y="95" width="130" height="85" rx="4" fill="#0f172a"/>
        <rect x="80" y="100" width="120" height="75" rx="2" fill="#22d3ee" opacity="0.15"/>
        <line x1="90" y1="115" x2="140" y2="115" stroke="#22d3ee" stroke-width="2" opacity="0.6"/>
        <line x1="90" y1="130" x2="160" y2="130" stroke="#22d3ee" stroke-width="2" opacity="0.4"/>
        <line x1="90" y1="145" x2="130" y2="145" stroke="#22d3ee" stroke-width="2" opacity="0.5"/>
        <circle cx="140" cy="55" r="28" fill="#334155"/>
        <circle cx="140" cy="55" r="24" fill="#475569"/>
        <rect x="115" y="50" width="25" height="12" rx="4" fill="none" stroke="#64748b" stroke-width="2"/>
        <rect x="140" y="50" width="25" height="12" rx="4" fill="none" stroke="#64748b" stroke-width="2"/>
        <line x1="140" y1="56" x2="140" y2="58" stroke="#64748b" stroke-width="1"/>
        <path d="M100 85 Q140 95 180 85 L175 160 Q140 170 105 160 Z" fill="#475569" stroke="#334155" stroke-width="1"/>
        <path d="M105 95 L125 130 L145 125" fill="none" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
        <path d="M175 95 L155 130 L135 125" fill="none" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
        <rect x="95" y="125" width="90" height="8" rx="2" fill="#334155" opacity="0.6"/>
      </svg>
    </div>

    <div class="developer-glow" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stack: {
    type: Array,
    default: () => ['Vue', 'HTML', 'CSS', 'JS']
  }
})

const techIcons = {
  vue: {
    label: 'Vue',
    svg: '<path fill="#41b883" d="M78.8 10.2L64 35.4 49.2 10.2H0l64 110 64-110z"/><path fill="#41b883" d="M78.8 10.2L64 35.4 49.2 10.2H25.6L64 76l38.4-65.8z"/><path fill="#35495e" d="M25.6 10.2L64 76l38.4-65.8H78.8L64 35.4 49.2 10.2z"/>'
  },
  html: {
    label: 'HTML',
    svg: '<path fill="#e34f26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#ef652a" d="M64 116.8l36.378-10.086 8.559-96.053H64z"/><path fill="#ebebeb" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.263 2.969 2.693 30.225H64zm0 40.02l-.049.013-11.912-3.22-.761-8.533H39.683l1.499 16.79 21.818 6.051.047-.013z"/><path fill="#fff" d="M63.952 52.455v13.762h16.947l-1.597 17.849-15.35 4.143v14.222l27.947-7.765.208-2.333 3.293-36.833.269-2.966-2.214-.604z"/>'
  },
  css: {
    label: 'CSS',
    svg: '<path fill="#1572b6" d="M8.76 1l10.055 112.883 45.118 12.501 45.244-12.526L119.24 1z"/><path fill="#33a9dc" d="M64 116.8l36.378-10.086 8.559-96.053H64z"/><path fill="#fff" d="M64 52.455H29.499l.827 9.262H64zm0 37.02H43.972l.827 9.263H64z"/><path fill="#ebebeb" d="M64 24.599v13.762h37.59l.319-3.58.758-8.46L64 24.599zM29.499 52.455l.827 9.262H64V52.455zm19.473 37.02l.827 9.263H64v-9.263z"/><path fill="#fff" d="M64 65.997v13.762h33.689l-.285 3.19-.631 7.062L64 89.997zm0-27.398v13.762h36.756l-.285 3.19-.319 3.58H64z"/>'
  },
  js: {
    label: 'JS',
    svg: '<path fill="#f7df1e" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#000" d="M116.347 96.736c-.369-2.27-1.875-4.18-3.965-5.725 3.037-1.73 5.25-4.198 5.25-8.465 0-4.552-2.889-7.402-7.514-7.402-5.064 0-7.797 2.562-8.373 6.335l-8.064-1.036c.188-6.636 5.414-11.957 16.572-11.957 10.98 0 16.965 5.064 16.965 12.518 0 6.07-2.985 9.889-7.514 13.123-3.037 2.089-4.847 3.408-5.544 5.725-.369 1.479-.184 2.746.553 3.78 1.106 1.479 3.408 2.271 5.544 2.271 2.562 0 4.658-.738 6.07-2.089 2.271-2.089 2.271-4.847 2.271-5.064h8.064c0 .553.092 4.382-1.291 7.514-1.661 3.408-5.25 5.544-9.889 6.636-4.382 1.106-9.336.553-12.518-1.291-3.408-2.089-5.25-5.25-5.544-9.336zM68.169 82.105c.369 2.27 1.875 4.18 3.965 5.725-2.985 1.73-5.25 4.198-5.25 8.465 0 4.552 2.889 7.402 7.514 7.402 5.064 0 7.797-2.562 8.373-6.335l8.064 1.036c-.188 6.636-5.414 11.957-16.572 11.957-10.98 0-16.965-5.064-16.965-12.518 0-6.07 2.985-9.889 7.514-13.123 3.037-2.089 4.847-3.408 5.544-5.725.369-1.479.184-2.746-.553-3.78-1.106-1.479-3.408-2.271-5.544-2.271-2.562 0-4.658.738-6.07 2.089-2.271 2.089-2.271 4.847-2.271 5.064h-8.064c0-.553-.092-4.382 1.291-7.514 1.661-3.408 5.25-5.544 9.889-6.636 4.382-1.106 9.336-.553 12.518 1.291 3.408 2.089 5.25 5.25 5.544 9.336z"/>'
  },
  react: { label: 'React', svg: null },
  node: { label: 'Node', svg: null },
  typescript: { label: 'TS', svg: null },
  ionic: { label: 'Ionic', svg: null },
  api: { label: 'API', svg: null }
}

const normalizeTech = (name) => {
  const n = (name || '').toLowerCase().trim()
  if (n === 'vue' || n === 'vue.js' || n === 'vuejs') return 'vue'
  if (n === 'html') return 'html'
  if (n === 'css') return 'css'
  if (n === 'js' || n === 'javascript') return 'js'
  if (n === 'react' || n === 'react.js') return 'react'
  if (n === 'ionic') return 'ionic'
  if (n === 'node' || n === 'node.js') return 'node'
  if (n === 'ts' || n === 'typescript') return 'typescript'
  if (n === 'rest apis' || n === 'rest api' || n === 'api') return 'api'
  return null
}

const displayStack = computed(() => {
  const positions = ['pos-0', 'pos-1', 'pos-2', 'pos-3', 'pos-4', 'pos-5']
  return (props.stack || []).slice(0, 6).map((name, i) => {
    const key = normalizeTech(name)
    const tech = key ? techIcons[key] : null
    return {
      key: `${name}-${i}`,
      label: tech ? tech.label : name,
      svg: tech ? tech.svg : null,
      pos: positions[i] || 'pos-0'
    }
  })
})
</script>

<style scoped>
.developer-scene {
  position: relative;
  width: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.developer-figure {
  position: relative;
  z-index: 2;
  animation: developerFloat 4s ease-in-out infinite;
}

.developer-svg {
  width: 100%;
  max-width: 280px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(34, 211, 238, 0.15));
}

.developer-glow {
  position: absolute;
  inset: 50% 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  animation: glowPulse 3s ease-in-out infinite;
}

.float-icon {
  position: absolute;
  width: 48px;
  height: 48px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
  animation: floatOrbit 6s ease-in-out infinite;
}

.float-icon:nth-child(1) { animation-delay: 0s; }
.float-icon:nth-child(2) { animation-delay: 0.5s; }
.float-icon:nth-child(3) { animation-delay: 1s; }
.float-icon:nth-child(4) { animation-delay: 0.3s; }
.float-icon:nth-child(5) { animation-delay: 0.8s; }
.float-icon:nth-child(6) { animation-delay: 0.2s; }

.float-icon:hover {
  transform: scale(1.15);
}

.float-icon svg {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: var(--bg-card);
  padding: 6px;
  box-sizing: border-box;
}

.float-fallback {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--accent);
}

.float-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.pos-0 { top: 8%; left: 12%; }
.pos-1 { top: 5%; right: 15%; }
.pos-2 { bottom: 15%; left: 8%; }
.pos-3 { bottom: 12%; right: 10%; }
.pos-4 { top: 50%; left: 0; transform: translateY(-50%); }
.pos-5 { top: 50%; right: 0; transform: translateY(-50%); }

@keyframes developerFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
}

@keyframes floatOrbit {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(8px, -10px) rotate(3deg); }
  50% { transform: translate(-6px, -6px) rotate(-2deg); }
  75% { transform: translate(-8px, 8px) rotate(2deg); }
}

@media (max-width: 768px) {
  .developer-scene {
    min-height: 280px;
  }

  .float-icon {
    width: 40px;
    height: 40px;
  }

  .pos-0 { top: 5%; left: 5%; }
  .pos-1 { top: 3%; right: 5%; }
  .pos-2 { bottom: 10%; left: 3%; }
  .pos-3 { bottom: 8%; right: 5%; }
}
</style>
