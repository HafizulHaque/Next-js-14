import Link from "next/link"

const ProductsList = () => {

  const products = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Orange'},
    {id: 3, name: 'Guava'},
  ]
  return (
    <div>
      <h1>Produces</h1>
      <ul>
        {products.map(product => (
          <li key={product?.id}><Link href={`/products/${product?.id}`}>{product?.name}</Link></li>
        ))}
        <li><Link href={`/products/100`} replace>Balerion The Dread</Link></li>
      </ul>
    </div>
  )
}

export default ProductsList