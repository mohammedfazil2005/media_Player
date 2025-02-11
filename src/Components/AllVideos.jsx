import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const AllVideos = () => {
    const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  return (
    <>    <div>
      <h1>All vidoes</h1>
      <div className='d-flex flex-wrap gap-2'>
      <Card style={{ width: '18rem' }} className='mb-2' onClick={handleShow}>
      <Card.Img variant="top" src="https://images.news18.com/ibnlive/uploads/2024/11/img-2-2024-11-06t165628.469-2024-11-32c40ee904cdd3c9b16f8defcd586616.jpg" />
      <Card.Body>
        <div className='d-flex justify-content-between align-items-center'>
        <Card.Title>Card Title</Card.Title>
        <button className='btn btn-light' ><i className="fa-solid fa-trash text-danger"></i></button>
        </div>
       
      </Card.Body>
    </Card>
      </div>
    </div>
      <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Caption</Modal.Title>
      </Modal.Header>
      <Modal.Body className='border border-1 border-warning'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/GqjBS2vdjlg?si=RW9truZHNHcuqENe&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Modal.Body>
      
    </Modal>
    </>

  )
}

export default AllVideos
