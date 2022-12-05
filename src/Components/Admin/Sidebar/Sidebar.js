import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
export default function () {
  return (
    <div className='bg-light side pt-5 '>
     <Link to="/admin/news"><p className='btn btn-sm btn-primary'>Add News</p></Link> 
      <br/>
     <Link to="/admin-notice"><p className='btn btn-sm btn-primary'>Add Notice</p></Link> 
    </div>
  )
}
