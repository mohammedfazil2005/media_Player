import React, { useState } from 'react'
import HomeHeading from '../Components/HomeHeading'
import HomeLink from '../Components/HomeLink'
import AllVideos from '../Components/AllVideos'
import AllCategories from '../Components/AllCategories'

const Home = () => {
  const [videResponce,setVideoResponce]=useState("")
  const [videoDeleteResponce,setVideoDeleteResponce]=useState("")
  return (
    <div className='container mt-4 '>
     <div className='d-flex justify-content-between'>
      <div>
        <HomeHeading setVideoResponce={setVideoResponce}/>
      </div>
      <div>
        <HomeLink/>
      </div>
     </div>
     <div className='d-flex justify-content-between mt-5'>
      <div>
        <AllVideos videResponce={videResponce} videoDeleteResponce={videoDeleteResponce}/>
      </div>
      <div>
        <AllCategories  setVideoDeleteResponce={setVideoDeleteResponce}/>
      </div>
     </div>
    </div>
  )
}

export default Home
