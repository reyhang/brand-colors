import React, { useState } from 'react'
import BrandsData from '../../brands.json'

export default function Brand() {

    //Öncelikle BrandsData'yı bir diziye çevrilmesi gerekir.

    const brandsArray = []
    Object.keys(BrandsData).map(key =>
        (brandsArray.push(BrandsData[key]))
    )

    const [brands,setBrands] = useState(brandsArray)

    return (
        <section className='brands'>
         
         {brands.map((item)=> <div> {item.title} </div> )}

        </section>
    )
}
