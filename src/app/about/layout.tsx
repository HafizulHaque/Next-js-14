import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'About - Next-14',
    template: 'About %s - Next-14'
  },
  description: 'About section of the application'
}

const AboutLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      AboutLayout
      {children}
    </div>
  )
}

export default AboutLayout
