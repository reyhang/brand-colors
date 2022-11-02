import React, { useContext } from 'react'
import './brand.scss'
import { getContrastYIQ } from '../helpers'
import MainContext from '../../MainContext'

export default function Brand({brand}) {

    const {brands,selectedBrands,setSelectedBrands} = useContext(MainContext)
    
    const toggleSelected = () => {
        if(setSelectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(b => b.slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands,brand.slug])
        }
    }
    
    return (
        <section className='brand'>

            {brands.map((item) => <div className='brand'>

                <article onClick={toggleSelected}>
                    {item.title}
                </article>
                <div className='brand-colors'>
                    {item.colors.map(color => (
                    <span style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
                        {color}
                    </span>))}
                </div>
            </div>)}

        </section>
    )
}
