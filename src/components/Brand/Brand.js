import React, { useState } from 'react'
import BrandsData from '../../brands.json'
import './brand.scss'

export default function Brand() {

    //Öncelikle BrandsData'yı bir diziye çevrilmesi gerekir.

    const brandsArray = []
    Object.keys(BrandsData).map(key =>
        (brandsArray.push(BrandsData[key]))
    )

    const [brands, setBrands] = useState(brandsArray)

    return (
        <section className='brands'>

            {brands.map((item) => <div className='brand'>

                <article>
                    {item.title}
                </article>
                <div className='brand-colors'>
                    {item.colors.map(color => (
                    <span style={{'--bgColor': `#${color}`}}>
                        {color}
                    </span>))}
                </div>
            </div>)}

        </section>
    )
}
