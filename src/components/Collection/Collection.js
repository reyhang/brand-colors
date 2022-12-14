import React, { useContext } from 'react'
import { FaSpinner } from 'react-icons/fa'
import LazyLoad from 'react-lazyload'
import { useParams } from 'react-router-dom'
import MainContext from '../../MainContext'
import Brand from '../Brand/Brand'
import Download from '../Download/Download'
import Search from '../Search/Search'

export default function Collection() {

  const {slugs} = useParams()  
  const {brands, selectedBrands} = useContext(MainContext)

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
                <Search />
                <Download />

            </header>

            {
                selectedBrands.map((slug) => {
                    let brand = brands.find((brand) => brand.slug === slug)
                    return (
                        <LazyLoad once={brand.once} placeholder={loading()} overflow={true} >
                            <Brand brand={brand} />
                        </LazyLoad>
                    )

                }
                )
            }
       

  </main>
  )
}
