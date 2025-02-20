import { Button, Card, Modal } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCatgeory, deleteVideo, getCategory, singleVideo, updateCategory } from '../services/AllAPI';



const AllCategories = ({setVideoDeleteResponce}) => {
  const [show, setShow] = useState(false);
  const [category,setCategory]=useState("")
  const [data,setData]=useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCatgories=async()=>{
    if(category){
      try {
        const payload={category,allCategories:[]}
        await addCategory(payload)
        setShow(false)
        getAllCatgeory()
      } catch (error) {
        console.log(error)
      }

    }else{
      alert("Please enter category name!")
    }
  }

  const getAllCatgeory=async()=>{
    try {
      const serverResponce=await getCategory()
      console.log(serverResponce.data)
      setData(serverResponce.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onDeleteClick=async(id)=>{
    try {
      await deleteCatgeory(id)
      getAllCatgeory()
    } catch (error) {
      console.log(error)
    }
  }

  const onDragFinished=async(event,details)=>{
    let videoId=event.dataTransfer.getData("videoId")
    try {
    const serverResponce= await singleVideo(videoId)
    console.log(serverResponce.data)
   
    if(serverResponce.status>=200&&serverResponce.status<=300){
     details.allCategories.push(serverResponce.data)
     await updateCategory(details.id,details)
     getAllCatgeory()

     let deleteResponce= await deleteVideo(videoId)

     setVideoDeleteResponce(deleteResponce)
    }
    } catch (error) {
      console.log(error)
    }
  }
  const onDragOver=(e)=>{
    e.preventDefault()
  }

  useEffect(()=>{
    getAllCatgeory()
  },[])
    
  return (
    <>
    <div className='d-flex justify-content-between align-items-center gap-3 '>
      <h1> all Categories</h1>
      <button  className='btn btn-warning' style={{borderRadius:'50%'}} onClick={handleShow}><i className="fa-solid fa-plus"></i></button>
    </div>
    {data.length>0?data.map((a)=>(
      <div onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>onDragFinished(e,a)}  className='container border border-2 m-2' style={{width:'700px',minHeight:'200px'}} key={a.id}>
      <div className=" d-flex justify-content-between p-3 align-items-center">
        <h1>{a.category}</h1>
        <button className='btn btn-danger' onClick={()=>onDeleteClick(a.id)}>Delete</button>
      </div>
      <div className='row'>
        {a.allCategories.map((eachVideo)=>(
           <div className="col-6">
           <Card  style={{ width: '220px' }} className='mb-2' >
           <Card.Img variant="top" src={eachVideo.videoImageUrl} style={{height:'200px',width:'100%'}} />
           <Card.Body>
             <div className='d-flex justify-content-between align-items-center'>
             <Card.Title>{eachVideo.videoCaption}</Card.Title>
             {/* <button className='btn btn-light'><i className="fa-solid fa-trash text-danger"></i></button> */}
             </div>
            
           </Card.Body>
         </Card>
           </div>
        ))}
       
     
      </div>
    </div>
    )):''}
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
        <Form.Control type="email" placeholder="Category name" onChange={(e)=>setCategory(e.target.value)}  className='border border-warning'/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCatgories}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>

  )
}

export default AllCategories
