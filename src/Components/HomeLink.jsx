import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = () => {
  return (
    <div className='mt-4'>
        <Link to={'/history'} style={{color:'orange'}} className='fw-bold'>Watch history<i class="fa-solid fa-arrow-right ms-2"></i></Link>
    </div>
  )
}

export default HomeLink
