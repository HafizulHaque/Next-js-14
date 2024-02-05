import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Next Application',
  description: 'A Basic Next.js Test Application'
}

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

export default RootLayout
