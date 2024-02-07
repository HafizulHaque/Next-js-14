import { Metadata } from "next"
import ReviewPageNav from "./review-page-nav"

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

  let num = Math.floor(Math.random() * 10)
  // if(num < 5){
  //   throw new Error('Error loading page');
  // }

  return (
    <div>
      <p>Showing review #{params.reviewId} of Product #{params.productId}</p>
      <ReviewPageNav/>
    </div>
  )
}

export default ProductReviewPage