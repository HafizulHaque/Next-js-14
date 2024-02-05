import { notFound } from "next/navigation";
import { Metadata } from "next";

type PropTypes = {
  params: {
    productId: string
  }
}

export const generateMetadata = ({ params }: PropTypes): Metadata => {
  return (
    {
      title: `Product - ${params.productId}`,
      description: `Product Details Page for Next-14 Application`
    }
  )
}

const ProductDetail = ({ params }: PropTypes) => {
  if(+params.productId > 100 ){
    return notFound();
  }
  return (
    <p>Product detail with product id: {params.productId}</p>
  )
}

export default ProductDetail