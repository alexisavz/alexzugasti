import * as React from 'react'
import { Link } from 'gatsby'
import './layout.scss'

interface Props{
    children: React.ReactNode
    pageTitle: string
}

const Layout = ({ pageTitle, children } :Props) => {
  return (
    <div className='body'>
      <nav className='navbar'>
        <ul className='navbar-items'>
          <li><Link className="navbar-items-links" to="/">Home</Link></li>
          <li><Link className="navbar-items-links" to="/experience">Experience</Link></li>
          <li><Link className="navbar-items-links" to="/blog">Blog</Link></li>
          <li><Link className="navbar-items-links" to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className='content'>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout