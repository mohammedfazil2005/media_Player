import React from 'react'
import HistoryHeading from '../Components/HistoryHeading'
import HistoryTable from '../Components/HistoryTable'

const History = () => {
  return (
    <div className='container'>
      <div>
        <HistoryHeading/>
      </div>
      <div>
        <HistoryTable/>
      </div>
    </div>
  )
}

export default History
