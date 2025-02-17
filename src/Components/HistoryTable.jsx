import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getAllHistory } from '../services/AllAPI'
import { Link } from 'react-router-dom'


const HistoryTable = () => {
  const [history,setHistory]=useState([])

  const fetchHistory=async()=>{
    try {
      const serverResponce=await getAllHistory()
      setHistory(serverResponce.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchHistory()
  },[])

  console.log(history)


  return (
    <div style={{margin:'50px 0px'}}>
      <Table  bordered hover className='text-center'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {history.length>0?history.map((a,index)=>(
          <>
          <tr key={index}>
          <td>{index+1}</td>
          <td>{a.videoCaption}</td>
          <Link to={`https://youtu.be/${a.videoLink}`} target='__blank'>{`https://youtu.be/${a.videoLink}`}</Link>
          <td>{a.formatedDate}</td>
         <td> <button className='btn btn-danger'>Delete</button></td>
        </tr>
          </>
        )):"nothing"}
      </tbody>
    </Table>
    </div>
  )
}

export default HistoryTable
