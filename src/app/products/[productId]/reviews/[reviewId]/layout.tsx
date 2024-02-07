const ProductReviewLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return new Error('layout error - intentional')
  return (
    <div>
      Showing Reviews for Products:
      {children}
    </div>
  )
}

export default ProductReviewLayout
