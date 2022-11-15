import React, { useContext } from 'react'
import './content.scss'
import Search from '../Search/Search'
import Brand from '../Brand/Brand'
import MainContext from '../../MainContext'
import LazyLoad from 'react-lazyload'
import { FaSpinner } from "react-icons/fa";
import Download from '../Download/Download'


export default function Content() {

const {selectedBrands,brands} = useContext(MainContext)

  const loading = () => {
    return(
      <div className='loading'>
        <span >
          <FaSpinner size={"25px"} />
        </span>                            
      </div>
      
    )
  }

  return (    
  <main className='content'>
    <header className='header'>
        <Search/>
        {
          selectedBrands.length > 0 ? <Download/> : null
        }
    </header>

    {
      brands.map((brand,index) => (
        <LazyLoad once={brand.once} key={index} placeholder={loading()} overflow={true} >
           <Brand brand={brand}/>
        </LazyLoad>
        
      ))
    }
       

  </main>

  )
}
