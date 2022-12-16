import React, { useContext } from 'react'
import './search.scss'
import {GrSearch} from 'react-icons/gr'
import MainContext from '../../MainContext'

export default function Search() {

  const {setSearch} = useContext(MainContext)

  return (
    <div className='search'>
      <div className='icon'>
        <GrSearch />
      </div>

      <input
        type={'text'}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder='Search Brands' />
    </div>
  )
}
