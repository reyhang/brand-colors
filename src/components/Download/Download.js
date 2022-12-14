import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../MainContext'
import './download.scss'
import { FiDownload,FiLink2,FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Download() {

    const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
    const [downloadUrl,setDowloadUrl] = useState()
    const [method,setMethod] = useState('css')
    const lilac = 'rgb(195, 90, 255)'

    const getLink = () => {
        prompt('Here`s the URL to share',` http://localhost:3000/collection/${selectedBrands.join(",")}`)
    }


    useEffect(() => {
        if (selectedBrands.length > 0) {
            let output = ''
            switch (method) {

                case 'css':
					output += ':root {\n'
					selectedBrands.map(slug => {
						let brand = brands.find(brand => brand.slug === slug)
						brand.colors.map((color, key) => {
							output += `--${slug}-${key}: #${color};\n`
						})
					})
					output += '}'
					break;

				case 'scss':
					selectedBrands.map(slug => {
						let brand = brands.find(brand => brand.slug === slug)
						brand.colors.map((color, key) => {
							output += `$${slug}-${key}: #${color};\n`
						})
					})
					break;

				case 'less':
					selectedBrands.map(slug => {
						let brand = brands.find(brand => brand.slug === slug)
						brand.colors.map((color, key) => {
							output += `@${slug}-${key}: #${color};\n`
						})  
					})
                    break;
                }
                  
            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob)
            setDowloadUrl(url)
            return () => {URL.revokeObjectURL(blob)
            setDowloadUrl('')}
        }
        //eslint-disable-next-line
    }, [selectedBrands,brands])

    return (
        <div className='download'>

            <div className='actions'>
                <select onChange={(e)=>setMethod(e.target.value) }>
                        <option value={'css'}> CSS </option>
                        <option value={'scss'}> SCSS </option>
                        <option value={'less'}> LESS </option>

                    </select>
                <button>
                    <a href={downloadUrl} download={`brands.${method}`}>
                    <FiDownload color={lilac} size={'23px'}> </FiDownload>
                    </a> 
            </button>
                <a href='#!'>
                    <Link to={`collection/${selectedBrands.join(",")}`}>
                        <FiLink2 color={lilac} size={'25px'} />
                    </Link>
                </a>
               
            </div>

            <div className='selected'>
                <button onClick={()=> setSelectedBrands([])}>
                    <FiX color={lilac} size={'23px'} />
                </button>
                <p style={selectedBrands.length === 0 ? { color: 'gray' } : { color: lilac }}>
                    {' '} {selectedBrands.length}
                    {selectedBrands.length === 1 || selectedBrands.length === 0 ? ' brand' : ' brands'} collected {' '}
                </p>
            </div>

        </div>
    )
}
