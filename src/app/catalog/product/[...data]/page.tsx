'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  console.log(params)

  async function addToCard() {
    console.log('Adicionado')
  }
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCard}>Adicionar ao carrinho</button>
    </div>
  )
}
