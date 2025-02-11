import React from 'react'
import { Link } from 'react-router-dom'

const HistoryHeading = () => {
  return (
    <div className='d-flex justify-content-between mt-5' >
        <div>
            <h1 className='fw-bold' style={{letterSpacing:'2px'}}>Watch History</h1>
        </div>
        <div>
            <Link to={'/home'} style={{color:'orange'}} className='fw-bold'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
        </div>
    </div>
  )
}

export default HistoryHeading
