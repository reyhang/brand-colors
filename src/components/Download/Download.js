import React, { useContext } from 'react'
import MainContext from '../../MainContext'
import './download.scss'
import { FiDownload,FiLink2,FiX } from 'react-icons/fi'

export default function Download() {

    const { selectedBrands, setSelectedBrands } = useContext(MainContext)



    return (
        <div className='download'>

            <div className='actions'>
                <button>
                <FiDownload  color='rgb(195, 90, 255)' size={'23px'} />
            </button>
                <a href='!#'>
                    <FiLink2 color='rgb(195, 90, 255)' size={'25px'}/>
                </a>
               
            </div>

            <div className='selected'>
                <button onClick={()=> setSelectedBrands([])}>
                    <FiX color='rgb(195, 90, 255)' size={'23px'} />
                </button>
                <p style={selectedBrands.length === 0 ? { color: 'gray' } : { color: 'rgb(195, 90, 255)' }}>
                    {' '} {selectedBrands.length}
                    {selectedBrands.length === 1 || selectedBrands.length === 0 ? ' brand' : ' brands'} collected {' '}
                </p>
            </div>

        </div>
    )
}
