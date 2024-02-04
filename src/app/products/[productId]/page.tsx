import { notFound } from "next/navigation";

const ProductDetail = ({ params }: {
  params: {
    productId: string
  }
}) => {
  if(+params.productId > 100 ){
    return notFound();
  }
  return (
    <p>Product detail with product id: {params.productId}</p>
  )
}

export default ProductDetail