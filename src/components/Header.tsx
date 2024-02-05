import Link from "next/link"

const Header = () => {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      padding: '1em 2em'
    }}>
      Header
      <p><Link href='/products'>Products</Link></p>
    </div>
  )
}

export default Header
