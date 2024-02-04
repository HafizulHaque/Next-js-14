export const metadata = {
  title: 'Next Application',
  description: 'A Basic Next.js Test Application'
}

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        Rootlayout
        {children}
      </body>
    </html>
  )
}

export default RootLayout
