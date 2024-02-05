import { notFound } from "next/navigation"
import { Metadata } from "next"

type PropTypes = {
  params: {
    productId: string,
    reviewId: string
  }
}

export const generateMetadata = async ({ params }: PropTypes): Promise<Metadata> => {

  const reviewText = await new Promise((resolve) => {
    setTimeout(()=>{
      resolve(+params.productId*1000+params.reviewId)
    }, 2000)
  })
  return(
    {
      title: `Review - ${reviewText}`,
      description: `Showing Review for Product with id: ${params.productId}`
    }
  )
}

const ProductReviewPage = ({ params }: PropTypes) => {
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