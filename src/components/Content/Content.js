import React, { useContext } from 'react'
import './content.scss'
import Search from '../Search/Search'
import Brand from '../Brand/Brand'
import MainContext from '../../MainContext'

export default function Content() {

const {brands} = useContext(MainContext)

  return (    
  <main className='content'>

    <header className='header'>
        <Search/>
    </header>
    {
      brands.map((brand) => (
         <Brand brand={brand}/>
      ))
    }
       

  </main>

  )
}
