export default function formatValue(value: number) {
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
  return formattedAmount
}
