import React from 'react'
import Base from './Base';

export default function Header() {
  return (
    <div className="header">
      <div><img src={Base.logo} alt="" className='logo' /></div>
      <div><button><span className="change">Change</span><div className="underline"></div></button><span className='dot'></span><button><span className="optimize">Optimize</span><div className="underline"></div></button></div>
      <div><button className='menu'><div className="menuicon"></div><span>Menu</span></button></div>
    </div>
  )
}
