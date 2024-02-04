import { notFound } from "next/navigation"

const ProductReviewPage = ({ params }: {
  params: {
    productId: string,
    reviewId: string
  }
}) => {
  if(+params.reviewId > 100){
    return notFound();
  }
  return (
    <div>
      <p>Showing review #{params.reviewId} of Product #{params.productId}</p>
    </div>
  )
}

export default ProductReviewPage