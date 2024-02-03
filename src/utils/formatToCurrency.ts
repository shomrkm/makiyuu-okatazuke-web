export function formatToCurrency(price: number) {
  return new Intl.NumberFormat('ja-JP', {
    currency: 'JPY',
  }).format(price);
}
