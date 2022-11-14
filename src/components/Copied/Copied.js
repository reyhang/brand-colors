import React from 'react'
import { getContrastYIQ } from '../helpers'
import './copied.scss'

export default function Copied({color}) {
  return (
    <div className='copied' style={{ backgroundColor: `#${color}`, color: `${getContrastYIQ(color)}` }} >
      Copied #{color} to Clipboard
    </div>
  )
}
