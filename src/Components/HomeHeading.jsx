import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const HomeHeading = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
        <Form.Control type="text" placeholder="Video Caption" className='border border-warning' />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Image url" className='border border-warning' />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Vide youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="" className='border border-warning' />
      </FloatingLabel>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={handleClose}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>
   </>

  )
}

export default HomeHeading
