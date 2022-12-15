import { createBrowserHistory } from '@remix-run/router'
import React, { useContext, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { GrLinkPrevious } from 'react-icons/gr'
import LazyLoad from 'react-lazyload'
import { Link, useParams } from 'react-router-dom'
import MainContext from '../../MainContext'
import Brand from '../Brand/Brand'
import Download from '../Download/Download'
import './collection.scss'

export default function Collection() {

  const { slugs } = useParams()
  const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext)
  const history = createBrowserHistory()

  const loading = () => {
    return (
      <div className='loading'>
        <span >
          <FaSpinner size={"25px"} />
        </span>
      </div>

    )
  }

  const clearSelectedBrands = () => {
    setSelectedBrands([])
    history.push('/')
  }

  useEffect(() => {
    setSelectedBrands(slugs.split(','))
    //eslint-disable-next-line
  }, [])

  return (
    <main className='content'>

      <header className='header'>
        <Link to="/" onClick={clearSelectedBrands}>
          <a href='!#' className="back-button">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>
        {selectedBrands.length !== 0 && <Download />}
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
