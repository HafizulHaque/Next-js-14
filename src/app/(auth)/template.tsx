"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const AuthTemplate = ({ children }: {
  children: React.ReactNode
}) => {

  const pathName = usePathname()
  const [input, setInput] = useState("")

  const navLinks = [
    {id: 1, label: 'Sign In', path: '/login'},
    {id: 1, label: 'Register', path: '/register'},
    {id: 1, label: 'Forgot Password', path: '/forgot-password'}
  ]

  const defaultNavLinkStyle = {
    textDecoration: 'none',
    display: 'inline-block',
    paddingBottom: '.5em'
  }

  const activeNavLinkStyle = {
    ...defaultNavLinkStyle,
    fontWeight: 'bold',
    borderBottom: '1px solid gray'
  }

  return (
    <main>
      <nav style={{
        display: 'flex',
        gap: '1em'
      }}>
        {navLinks?.map(navLink => {
          const isActive = pathName.startsWith(navLink?.path);
          return (
            <Link 
              key={navLink?.id} 
              href={navLink?.path}
              style={isActive ? activeNavLinkStyle : defaultNavLinkStyle}
              replace>
                {navLink?.label}
            </Link>
          )
        })}
      </nav>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      {children}
    </main>
  )
}

export default AuthTemplate