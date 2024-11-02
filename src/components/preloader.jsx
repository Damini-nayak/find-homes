import React from 'react'
import Base from './Base'
import '../style/App.css'

const preloader = () => {
  return (
    <div className="preloader">
        <div className="spinner"><img src={Base.logo} alt="" /></div>
    </div>
  )
}

export default preloader