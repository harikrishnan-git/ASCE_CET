import './Testimonials.css'
import nextbtn from '../../assets/nextbtn.png'
import backbtn from '../../assets/backbtn.png'
import testimonial1 from '../../assets/testimonial1.jpg'
import program4 from '../../assets/program4.jpg'
import program1 from '../../assets/program1.jpg'
import { useRef } from 'react'



const Testimonials = () => {
    const slider =useRef();
    let tx=0;
  
  const slideForward=()=>{
    if(tx>-50)
      tx-=25  
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx<0)
      tx+=25
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
        <img src={backbtn} alt="" className='backbtn' onClick={slideBackward}/>
        <img src={nextbtn} alt="" className='nextbtn' onClick={slideForward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={testimonial1} alt="" />
                  <div>
                   <h3>Rohan</h3>
                   <span>Sonipat,Haryana</span>
                  </div>
                  <div>
                    <p>"This institute gave me an incredible number of resources, guidance along with academic knowledge to pursue my career"</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={program4} alt="" />
                  <div>
                   <h3>Diksha</h3>
                   <span>Safidon,Haryana</span>
                  </div>
                  <div>
                    <p>"I thank my passionate and supportive professors for their constant guidance. I am grateful for the experiences.</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={program1} alt="" />
                  <div>
                   <h3>Milli</h3>
                   <span>Delhi</span>
                  </div>
                  <div>
                    <p>"This institute gave me an incredible number of resources, guidance along with academic knowledge to pursue my career"</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={testimonial1} alt="" />
                  <div>
                   <h3>Aditya</h3>
                   <span>Haryana</span>
                  </div>
                  <div>
                    <p>I developed leadership and communication skills, and learned to be a good leader</p>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
    </div>
  )
}

export default Testimonials