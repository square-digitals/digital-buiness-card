import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDrawPolygon} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <FontAwesomeIcon className='icons' icon={faDrawPolygon} />
      <FontAwesomeIcon className='icons' icon={faDrawPolygon} />
      <FontAwesomeIcon className='icons' icon={faDrawPolygon} />
      <FontAwesomeIcon className='icons' icon={faDrawPolygon} />

    </div>
  )
}

export default Footer