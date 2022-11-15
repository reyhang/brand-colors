import React, { useContext } from 'react'
import MainContext from '../../MainContext'

export default function Download() {

    const { selectedBrands } = useContext(MainContext)

    return (
        <div className='download'>
            {selectedBrands.length} {selectedBrands.length === 1 ? 'brand' : 'brands'} collected.
        </div>
    )
}
