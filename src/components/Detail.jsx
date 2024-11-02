import React from 'react';
import Base from './Base'

export default function Detail() {
  return (
    <div className='detailpopup'>
      <div><img className='mainimg' src={Base.buy} alt="" /><img className='backbtn' src={Base.back} alt="" /></div>
      <div className='detaildes'>
        <div className='for'><button className='buy'>Buy</button><button className='rent'>Rent</button></div>
        <div className="type"><h3 className="heading3 marginleft">Home Type</h3></div>
        <div className='locationprice'><div className="location"><img src={Base.location} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores reiciendis perferendis cupiditate. Maxime, repellendu</p></div><div className="pricing"><span className="heading4">&#8377; 3,00,000</span></div></div>
        <div className="owner"><p><span  className="bold heading5">Property Owner's Name: </span><span>Fullname</span></p><button><a href="tel:1234567786">Contact To Owner</a></button></div>
        {/* <div className='des'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime totam iure fuga dolores! Aliquid cupiditate nisi recusandae hic, quos alias sit quo facilis aliquam pariatur eos vitae aspernatur doloribus.</p></div> */}
        <div className="propertydetails">
        <p className="heading5 bold">Property Details</p>
        <div className='properties'>
          <div><div><img src={Base.sqft} alt="" /><p>1700 sqft<sup>2</sup></p></div>
              <div><img src={Base.bhk} alt="" /><p>6BHK</p></div>
              <div><img src={Base.floor} alt="" /><p>2 Floors</p></div>
          </div>
          <div><div><img src={Base.bath} alt="" /><p>4 Bathrooms</p></div>
              <div><img src={Base.sqft} alt="" /><p>1700 sqft<sup>2</sup></p></div>
              <div><img src={Base.sqft} alt="" /><p>1700 sqft<sup>2</sup></p></div>
          </div>
          <div><div><img src={Base.sqft} alt="" /><p>1700 sqft<sup>2</sup></p></div>
              <div><img src={Base.sqft} alt="" /><p>1700 sqft<sup>2</sup></p></div>
              <div><img src={Base.sqft} alt="" /><p>1700 sqft<sup>2</sup></p></div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}