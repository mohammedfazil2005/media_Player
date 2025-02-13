import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const AllCategories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <>
    <div className='d-flex justify-content-between align-items-center gap-3'>
      <h1>All Categories</h1>
      <button className='btn btn-warning' style={{borderRadius:'50%'}} onClick={handleShow}><i class="fa-solid fa-plus"></i></button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category name"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Category name"  className='border border-warning'/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>

  )
}

export default AllCategories
