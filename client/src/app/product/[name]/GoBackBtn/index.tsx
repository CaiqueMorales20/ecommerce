'use client'

import { useRouter } from 'next/navigation'

// Functional Component
export default function GoBackBtn() {
  const router = useRouter()

  // Rendering
  return (
    <button className="mb-[56px]" onClick={() => router.back()}>
      Go back
    </button>
  )
}
