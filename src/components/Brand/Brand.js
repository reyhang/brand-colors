import React, { useContext } from 'react'
import './brand.scss'
import { getContrastYIQ } from '../helpers'
import MainContext from '../../MainContext'

export default function Brand({brand}) {

    const {selectedBrands,setSelectedBrands} = useContext(MainContext)
    
    const toggleSelected = () => {
		if (selectedBrands.includes(brand.slug)) {
			setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
		} else {
			setSelectedBrands([...selectedBrands, brand.slug])
		}
	}

      
    return (
        <section className='brands'>

           <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>

                <article onClick={toggleSelected} >
                    {brand.title}
                </article>
                <div className='brand-colors'>
                    {brand.colors.map((color) => (
                    <span style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
                        {color}
                    </span>))}
                </div>
            </div>

        </section>
    )
}
