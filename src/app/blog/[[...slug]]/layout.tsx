const BlogSideNavLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return(
    <div>
      <h1>Blog Side Nav</h1>
      <div>{children}</div>
    </div>
  ) 
}

export default  BlogSideNavLayout