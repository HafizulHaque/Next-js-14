const layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <h2>With Auth Layout</h2>
      {children}
    </div>
  )
}

export default layout
