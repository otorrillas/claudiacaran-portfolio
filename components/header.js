import React from 'react'
import './header.css'
import Link from 'next/link'

function Header() {
  return (
    <div className='Header'>
      <h4>
        <Link href='/'>
          <a>Studio</a>
        </Link>
      </h4>
      <h4>
        <Link href='/'>
          <a>Claudia Aran</a>
        </Link>
      </h4>

      <h4>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </h4>
    </div>
  )
}

export default Header
