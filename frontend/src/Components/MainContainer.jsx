import React from 'react'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'

const MainContainer = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '25%' }}>
        <Sidebar />
      </div>
      <div style={{ width: '75%' }}>
        <WorkArea />
      </div>
    </div>
  )
}

export default MainContainer
