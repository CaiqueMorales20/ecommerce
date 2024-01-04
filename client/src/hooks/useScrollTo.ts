export function useScrollTo(elementId: string) {
  scrollToElement(elementId)
}

function scrollToElement(elementId: string) {
  setTimeout(() => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.scrollY
      const offsetPosition = absoluteElementTop + 50

      window.scrollTo({
        top: elementId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth',
      })
    }
  }, 10)
}
