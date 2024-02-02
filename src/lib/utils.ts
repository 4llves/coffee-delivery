export function FormatCurrency(valor: number): string {
  const valueFormat = (valor / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return valueFormat
}
