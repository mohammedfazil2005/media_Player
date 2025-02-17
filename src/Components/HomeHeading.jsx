import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/AllAPI';
const HomeHeading = ({setVideoResponce}) => {

  const [video,setVideo]=useState({
      videoCaption:"",
      videoImageUrl:"",
      videoLink:""
    })

    const [error,setError]=useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   const seperateFunction=(value)=>{
    if(value.includes(".be/")){
      let split=value.split('.be/')[1]
      setVideo({...video,videoLink:split})
      setError(false)
     
    }else{
      console.error("Error")
      setError(true)
    }
      if(value==""){
        setError(false)
      }
   }

   const handleSave=async()=>{

    if(video.videoCaption&&video.videoImageUrl&&video.videoLink){
     try {
      const responce=await uploadVideo(video)
      setVideoResponce(responce)
      if(responce.status>=200&&responce.status<=300){
        alert("SuccessFully added")
        setShow(false)
        setVideo({
          videoCaption:"",
          videoImageUrl:"",
          videoLink:""
        })
      }else{
        alert("Error Occured Please ContactAdmin")
      }
     } catch (error) {
      alert("An error Occured")
     }
    
    }else{
      alert("Please fill all the fields")
    }
   }



  return (
    <>
    <div className='d-flex align-items-center gap-2 mt-4'>
      <h1 className='fw-bold' style={{letterSpacing:'2px'}}>Upload New Video</h1>
      <button className='btn btn-warning' style={{borderRadius:'50%'}} onClick={handleShow}><i class="fa-solid fa-plus"></i></button>
    </div>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>Uploading Video Details !!!</Modal.Title>
     </Modal.Header>
     <Modal.Body className='border border-1 border-warning'>
     <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Caption" onChange={(e)=>{setVideo({...video,videoCaption:e.target.value})}} className='border border-warning' />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Image url" className='border border-warning' onChange={(e)=>{setVideo({...video,videoImageUrl:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Vide youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="" className='border border-warning' onChange={(e)=>seperateFunction(e.target.value)} />
      </FloatingLabel>
      <div>
        <p className='text-danger'>{error?"Invalid url":""}</p>
      </div>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={handleSave}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>
   </>

  )
}

export default HomeHeading
