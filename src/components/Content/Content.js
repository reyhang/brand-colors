import React from 'react'
import './content.scss'
import Search from '../Search/Search'
import Brand from '../Brand/Brand'

export default function Content() {

  return (    
  <main className='content'>

    <header className='header'>
        <Search/>
    </header>
        <Brand/>

  </main>

  )
}
