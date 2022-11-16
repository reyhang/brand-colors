import React, { useContext } from 'react'
import './brand.scss'
import { getContrastYIQ } from '../helpers'
import MainContext from '../../MainContext'
import ClipboardButton from 'react-clipboard.js'
import { MdContentCopy } from "react-icons/md";

export default function Brand({brand}) {

    const {selectedBrands,setSelectedBrands,setCopied} = useContext(MainContext)
    
    const toggleSelected = () => {
		if (selectedBrands.includes(brand.slug)) {
			setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
		} else {
			setSelectedBrands([...selectedBrands, brand.slug])
		}
	}

    const setColor = (color) => {
        setCopied(color)
    }

      
    return (
        <section className='brands'>

           <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>

                <article onClick={toggleSelected} >
                    {brand.title}
                </article>
                <div className='brand-colors'>
                    {brand.colors.map((color) => ( <>
                            <ClipboardButton 
                            component='span' 
                            data-clipboard-text={color} 
                            onSuccess={()=> setColor(color)}
                            style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
                            <MdContentCopy />
                             {' '} {color}  
                            </ClipboardButton>                            
  </>
                    ))}
                </div>
            </div>

        </section>
    )
}
