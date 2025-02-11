import React from 'react'
import { Table } from 'react-bootstrap'


const HistoryTable = () => {
  return (
    <div style={{margin:'50px 0px'}}>
      <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <th><i class="fa-solid fa-ellipsis"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <i className="fa-solid fa-trash text-danger" style={{cursor:'pointer'}}></i>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default HistoryTable
