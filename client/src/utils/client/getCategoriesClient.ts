// getCategoriesClient.ts
export async function getCategoriesClient() {
  const response = await fetch('http://localhost:3333/categories')

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()
  return data
}
