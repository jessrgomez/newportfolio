<script setup>
import { ref } from 'vue'
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll'

const email = 'jessicargomez.work@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    window.location.href = `mailto:${email}`
  }
}

const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section id="contact" ref="target" class="section contact" :class="{ 'animate-in': isVisible }">
    <h2 class="section-title"><span class="title-num">06.</span> Contact</h2>
    <div class="contact-content">
      <p class="section-kicker">Let’s build something reliable and useful.</p>
      <h3>Looking for a frontend developer who understands both product and delivery?</h3>
      <p>
        I’m open to frontend development, project coordination, and collaborative opportunities.
        Tell me about your team or the problem you’re solving.
      </p>
      <div class="contact-actions">
        <a :href="`mailto:${email}`" class="btn btn-primary btn-lg">Start a conversation</a>
        <button type="button" class="btn btn-outline btn-lg" @click="copyEmail">
          {{ copied ? 'Email copied!' : 'Copy email' }}
        </button>
      </div>
      <div class="contact-meta">
        <span><span class="status-dot"></span> Open to opportunities</span>
        <span>Pampanga, Philippines · UTC+8</span>
      </div>
      <div class="contact-links">
        <a href="https://github.com/jessrgomez" target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a :href="`mailto:${email}`">Email <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
</template>
