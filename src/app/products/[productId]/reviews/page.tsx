const ReviewsPage = ({ params }: {
  params: {
    productId: string
  }
}) => {
  return (
    <div>
      <p>Showing All Reviews for product #{params.productId}</p>
    </div>
  )
}

export default ReviewsPage