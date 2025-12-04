import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import program4 from '../../assets/program4.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
         <img src={program1} alt="" />
         <div className="caption">
            <p>B.Tech</p>
         </div>
        </div>
        <div className="program">
         <img src={program2} alt="" />
         <div className="caption">
            <p>M.Tech</p>
         </div>
        </div>
        <div className="program">
         <img src={program3} alt="" />
         <div className="caption">
            <p>BCA</p>
         </div>
        </div>
        <div className="program">
         <img src={program4} alt="" />
         <div className="caption">
            <p>BBA</p>
         </div>
        </div>
    </div>
  )
}

export default Programs