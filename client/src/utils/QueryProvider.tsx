'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

// Functional Component
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())

  // Rendering
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
