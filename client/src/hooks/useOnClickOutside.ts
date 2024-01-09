import { RefObject } from 'react'

import { useEventListener } from './useEventListener'

type Handler = (event: MouseEvent) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
  condition = true, // Add a condition parameter
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return
    }

    if (condition) handler(event)
  })
}
