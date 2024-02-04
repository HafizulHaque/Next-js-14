export const metadata = {
  title: 'Next Application',
  description: 'A Basic Next.js Test Application'
}

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      Rootlayout
      {children}
    </div>
  )
}

export default RootLayout
