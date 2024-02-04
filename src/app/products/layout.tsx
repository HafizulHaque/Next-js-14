const ProductsLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      Browse Products:
      {children}
    </div>
  )
}

export default ProductsLayout