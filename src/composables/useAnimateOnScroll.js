import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Reveals a section (via `target` ref) with an `animate-in`-style flag once it
 * scrolls into view. Pass `immediate: true` for content that should already
 * be visible on load (e.g. the hero).
 */
export function useAnimateOnScroll({ immediate = false } = {}) {
  const target = ref(null)
  const isVisible = ref(immediate)
  let observer

  onMounted(() => {
    if (immediate || !target.value) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) isVisible.value = true
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, isVisible }
}
