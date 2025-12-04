import React from 'react'
import './Campus.css'
import campus1 from '../../assets/campus1.avif'
import campus2 from '../../assets/campus2.avif'
import campus3 from '../../assets/campus3.avif'
import campus4 from '../../assets/campus4.avif'
import campus5 from '../../assets/campus5.webp'
import campus6 from '../../assets/campus6.webp'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={campus1} alt="" />
            <img src={campus2} alt="" />
            <img src={campus3} alt="" />
            <img src={campus4} alt="" />
            <img src={campus5} alt="" />
            <img src={campus6} alt="" />
        </div>
    </div>
  )
}

export default Campus