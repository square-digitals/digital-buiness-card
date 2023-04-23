import React from 'react'
import MyPhoto from '../img/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDrawPolygon} from '@fortawesome/free-solid-svg-icons'

const Info = () => {
  return (
    <>
      <img className='info--img' src={MyPhoto} />
      <h2 className='info--name'>Yoma Okeremeta</h2>
      <p className='info--occupation'>FrontEnd Developer</p>
      <div className='info--buttons'><button className='info--buttons__btn1'> <FontAwesomeIcon icon={faEnvelope} /> Email</button>
       <button className='info--buttons__btn2'> <FontAwesomeIcon icon={faDrawPolygon} /> Linkdein</button></div>
    </>
  )
}

export default Info