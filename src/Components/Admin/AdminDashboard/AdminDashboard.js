import React from 'react'
import AddNew from '../AddNew/AddNew'
import Sidebar from '../Sidebar/Sidebar'

export default function AdminDashboard() {
  return (
    <div className='row'>
      
        <div className='col-md-2'>
            <Sidebar/> 
        </div>
        <div className='col-md-8 bg-secondary ml-5 pl-5'>
            <AddNew/>
        </div>
      
    </div>
  )
}
