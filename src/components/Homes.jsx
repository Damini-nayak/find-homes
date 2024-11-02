import React, {useState, useEffect} from 'react';
import Base from './Base'

export default function Homes({homeimg, location, brs, homeType, locatedIn, ownerName, sqft, bath, room, floor, price}) {
    // const detailpop = document.getElementsByClassName('detailpopup');

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    // Effect to add/remove no-scroll class from <body>
  useEffect(() => {
    if (isPopupVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
}
);

        return (
            <>
                <div className='homes' onClick={togglePopup}>
                    <div><img src={homeimg} alt="" /></div>
                    <div><button>{brs}</button><button>{homeType}</button></div>
                    <div><img src={location} alt="" /><p>{locatedIn}</p>
                        <span className="price">&#8377; {price}</span></div>
                    <div>
                        <div><img src={Base.sqft} alt="" /><p><span>{sqft}</span> sqft<sup>2</sup></p></div>
                        <div className="vrline"><img src={Base.bath} alt="" /><p><span>{bath}</span> Bath</p></div>
                        <div><img src={Base.bed} alt="" /><p><span>{room}</span>Room</p></div>
                    </div>
                </div>

                
                {isPopupVisible && (
                    <div className='detailpopup'>
                    <div><img className='mainimg' src={homeimg} alt="" /><img className='backbtn' src={Base.back} alt="" onClick={togglePopup} /></div>
                    <div className='detaildes'>
                        <div className='for'><button className='buy'>Buy</button><button className='rent'>Rent</button></div>
                        <div className="type"><h3 className="heading3 marginleft">{homeType}</h3></div>
                        <div className='locationprice'><div className="location"><img src={Base.location} alt="" /><p>{locatedIn}</p></div><div className="pricing"><span className="heading4">&#8377; {price}</span></div></div>
                        <div className="owner"><p><span className="bold heading5">Property Owner's Name: </span><span>{ownerName}</span></p><button><a href="tel:1234567786">Contact To Owner</a></button></div>
                        {/* <div className='des'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime totam iure fuga dolores! Aliquid cupiditate nisi recusandae hic, quos alias sit quo facilis aliquam pariatur eos vitae aspernatur doloribus.</p></div> */}
                        <div className="propertydetails">
                            <p className="heading5 bold">Property Details</p>
                            <div className='properties'>
                                <div><div><img src={Base.sqft} alt="" /><p>{sqft} sqft<sup>2</sup></p></div>
                                    <div><img src={Base.bhk} alt="" /><p>{room}BHK</p></div>
                                    <div><img src={Base.floor} alt="" /><p>{floor} Floors</p></div>
                                </div>
                                <div><div><img src={Base.bath} alt="" /><p>{bath} Bathrooms</p></div>
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
                )}
            </>
        );
    }