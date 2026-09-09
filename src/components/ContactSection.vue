<script setup>
import { reactive, ref } from 'vue'
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

const WEB3FORMS_ACCESS_KEY = '7144ebf2-152d-472d-a4f9-26751bc2805b'

const form = reactive({ name: '', email: '', message: '' })
const formStatus = ref('idle') // idle | sending | success | error

const submitForm = async () => {
  formStatus.value = 'sending'
  try {
    // Sent as FormData (not JSON) so the request stays a CORS "simple request" —
    // Web3Forms doesn't return CORS headers on the JSON preflight, which makes a
    // JSON fetch fail with a CORS error in the browser regardless of the access key.
    const formData = new FormData()
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', `Portfolio contact from ${form.name}`)
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('message', form.message)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    if (data.success) {
      formStatus.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      formStatus.value = 'error'
    }
  } catch {
    formStatus.value = 'error'
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
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="contact-form-row">
          <label class="sr-only" for="contact-name">Your name</label>
          <input
            id="contact-name"
            v-model="form.name"
            class="form-input"
            type="text"
            placeholder="Your name"
            autocomplete="name"
            required
          />
          <label class="sr-only" for="contact-email">Your email</label>
          <input
            id="contact-email"
            v-model="form.email"
            class="form-input"
            type="email"
            placeholder="Your email"
            autocomplete="email"
            required
          />
        </div>
        <label class="sr-only" for="contact-message">Your message</label>
        <textarea
          id="contact-message"
          v-model="form.message"
          class="form-input form-textarea"
          placeholder="Tell me about your team or the problem you're solving."
          rows="4"
          required
        ></textarea>
        <div class="contact-actions">
          <button type="submit" class="btn btn-primary btn-lg" :disabled="formStatus === 'sending'">
            {{ formStatus === 'sending' ? 'Sending…' : 'Send message' }}
          </button>
          <button type="button" class="btn btn-outline btn-lg" @click="copyEmail">
            {{ copied ? 'Email copied!' : 'Copy email' }}
          </button>
        </div>
        <p v-if="formStatus === 'success'" class="form-status form-status--success" role="status">
          Thanks! Your message has been sent — I'll get back to you soon.
        </p>
        <p v-if="formStatus === 'error'" class="form-status form-status--error" role="alert">
          Something went wrong sending that. Please try again or email me directly at {{ email }}.
        </p>
      </form>
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
