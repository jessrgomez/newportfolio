<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const activeImage = ref(0)

watch(
  () => props.project,
  () => {
    activeImage.value = 0
  }
)

const showImage = (i) => {
  activeImage.value = i
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') emit('close')
}

watch(
  () => !!props.project,
  (open) => {
    document.body.classList.toggle('modal-open', open)
    if (open) {
      window.addEventListener('keydown', handleKeydown)
    } else {
      window.removeEventListener('keydown', handleKeydown)
    }
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('modal-open')
})
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="project" class="project-modal-backdrop" @click.self="$emit('close')">
      <div class="project-modal" role="dialog" aria-modal="true" :aria-label="`${project.title} case study`">
        <button type="button" class="project-modal-close" aria-label="Close case study" @click="$emit('close')">✕</button>
        <div class="project-modal-media">
          <img :src="project.images[activeImage]" :alt="`${project.title} screenshot`" loading="lazy" />
          <div v-if="project.images.length > 1" class="project-modal-thumbs">
            <button
              v-for="(img, i) in project.images"
              :key="img"
              type="button"
              class="project-modal-thumb"
              :class="{ active: i === activeImage }"
              :aria-label="`Show screenshot ${i + 1}`"
              @click="showImage(i)"
            >
              <img :src="img" alt="" loading="lazy" />
            </button>
          </div>
        </div>
        <div class="project-modal-body">
          <span class="project-industry project-modal-industry">{{ project.industry }}</span>
          <h3>{{ project.title }}</h3>
          <p class="project-company">{{ project.company }}</p>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
          <p class="project-details-label">Key contribution</p>
          <div class="project-details">
            <ul>
              <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
