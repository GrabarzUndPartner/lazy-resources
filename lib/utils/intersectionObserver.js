
const listeners = new Map()

function createObserver (rootMargin = '0%', threshold = [0]) {
  if (typeof IntersectionObserver === 'undefined') { return null }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0
      if (!isIntersecting) { return }
      const el = entry.target
      trigger(el)
      observer.unobserve(el)
    })
  }, { rootMargin, threshold })
  return observer
}

const intersectionObserver = createObserver(process.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET)

function trigger (el) {
  listeners.get(el)()
  listeners.delete(el)
}

export function registerIntersecting (el, cb) {
  if (intersectionObserver) {
    listeners.set(el, cb)
    intersectionObserver.observe(el)
  }
}

export function unregisterIntersecting (el) {
  listeners.delete(el)
}