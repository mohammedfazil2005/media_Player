import React, { useEffect } from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addHistory, deleteVideo, getAllVideo, getCategoryById, updateCategory, uploadVideo } from '../services/AllAPI';

const AllVideos = ({videResponce,videoDeleteResponce,setCategoryDeleteResponce}) => {

       const [show, setShow] = useState(false);
       const [data,setData]=useState([])

       const [selectedVideo,setSelectedVideo]=useState(null)
    
        const handleClose = () => setShow(false);
        const handleShow = async(video) => {
          let {videoCaption,videoLink}=video
          let currentDate=new Date()
          let formatedDate=currentDate.toLocaleString('en-IN',{timeZoneName:'short'})
          let payload={videoCaption,videoLink,formatedDate}
          try {
            await addHistory(payload)
          } catch (error) {
            console.log(error)
          }

          setSelectedVideo(video)
          setShow(true)



        };


        const getVideo=async()=>{
          try {
            const responce=await getAllVideo()
            setData(responce.data)

          } catch (error) {
            alert("Error")
          }
          
        }

        const deleteVideos=async(id)=>{
          try {
            await deleteVideo(id)
            getVideo()
          } catch (error) {
           console.log(error) 
          }
        }

        const onVideoDrag=async(event,id)=>{
          console.log(event)
          event.dataTransfer.setData("videoId",id)
          
        }

        const onDragOverDiv=(e)=>{
          e.preventDefault()
        }

        const onDragFinished=async(e)=>{
          let {categoryId,video}=JSON.parse(e.dataTransfer.getData("fromCategoryVideo"))
          console.log(categoryId)
          await uploadVideo(video)
          getVideo()

          let apiResponce=await getCategoryById(categoryId)
          let currentVideos=apiResponce.data.allCategories
          let sortedVideos=currentVideos.filter((a)=>a.id!=video.id)

        console.log(sortedVideos)
        const payload={
          id:categoryId,
          category:apiResponce.data.category,
          allCategories:sortedVideos
        }
       let deleteResponce= await updateCategory(categoryId,payload)
       setCategoryDeleteResponce(deleteResponce)
        }





        useEffect(()=>{
          getVideo()
        },[videResponce,videoDeleteResponce])


  return (
    <> <div onDragOver={(e)=>onDragOverDiv(e)} onDrop={(e)=>onDragFinished(e)} className='border  p-2' style={{minHeight:'300px',minWidth:'300px'}}>
      <h1 className='fw-bold'>All vidoes</h1>
      <div className='d-flex flex-wrap gap-5 '>
      {data.map((a,key )=>(
        <Card draggable={true} onDragStart={(e)=>onVideoDrag(e,a.id)} key={key+1}  style={{ width: '220px' }} className='mb-2' >
        <Card.Img variant="top" src={a.videoImageUrl} style={{height:'200px',width:'100%'}} onClick={()=>handleShow(a)}/>
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center'>
          <Card.Title>{a.videoCaption}</Card.Title>
          <button className='btn btn-light' onClick={()=>deleteVideos(a.id)}><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
         
        </Card.Body>
      </Card>
      ))}
      </div>
    </div>
       {selectedVideo&&(
        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{selectedVideo.videoCaption}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border border-1 border-warning'>
        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${selectedVideo.videoLink}&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
       )}

    </>

  )
}

export default AllVideos
