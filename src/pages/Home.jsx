import react from 'react';
import { Link } from 'react-router-dom';
import Base from '../components/Base';
import BRS from '../components/BRS';
import Homes from '../components/Homes';
import Searchcategory from '../components/searchcalegory';

function Home() {
    return (
        <>
            <div className='divmargin grid50 main'>
                <div>
                    <div className='div1'><img src={Base.outward} alt="" /></div>
                    <div className="div2">
                        <div><p><span>Power Stations</span> for a <span>Green Planet</span></p></div>
                        <h1 className='heading1'>Next Generation.</h1>
                        <h1 className='heading1'>Vehicle Charger.</h1>
                        <p>Say hello to the next-gen ai-based electric vehicle charging stations</p>
                        <div className='mainbtns'>
                            <button className="btn1 primaryclr"><img src={Base.direction} alt="" className="direction" />Direction</button>
                            <button className="btn2 lightclr">Browse electric grid<img src={Base.right} alt="" className="rightarrow" /></button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='main2'>
                <BRS
                    name="Lorem ipsum "
                    description="Lorem ipsum dolor sit amet"
                    btname="BUY"
                    imgsrc={Base.buy}
                />
                <BRS
                    name="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet"
                    btname="RENT"
                    imgsrc={Base.rent}
                />
                <BRS
                    name="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet"
                    btname="SELL"
                    imgsrc={Base.sell}
                />
            </div>

            <div className='divmargin'>
                <h2 className="heading2 textcenter">Search</h2>
                <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum dolorum quasi corrupti reprehenderit earum inventore quia blanditiis nobis nemo dolor expedita aspernatur, ullam ducimus ut, repudiandae praesentium debitis est excepturi?</p>
                <div className='searchsec'>
                    <Searchcategory/>
                    <div className='searchinput'><input type="search" placeholder='Search' /><button><img src={Base.search} alt="" /></button></div>
                </div>
            </div>

            <h2 className='heading2 textcenter'>Featured Property</h2>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus minus, ipsum quo dolores, expedita laborum reiciendis rerum labore officiis natus iste ea. Dolore, nam officiis accusantium eligendi dolorem quae.</p>
            <div className='main3'>
                <Homes
                    homeimg={Base.buy}
                    location={Base.location}
                    locatedIn="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    brs="Buy"
                    homeType="Home"
                    ownerName="Sangam Nayak"
                    sqft="7500"
                    bath="2"
                    room="3"
                    floor="2"
                    price="7,00,000"/>
                

                <Homes
                    homeimg={Base.sell}
                    location={Base.location}
                    locatedIn="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    brs="Buy"
                    homeType="shop"
                    ownerName="Damini Nayak"
                    sqft="2000"
                    bath="2"
                    room="3"
                    floor="1"
                    price="2,00,000" />
                

                <Homes
                    homeimg={Base.rent}
                    location={Base.location}
                    locatedIn="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    brs="Rent"
                    homeType="resort"
                    ownerName="Shraddha Nayak"
                    sqft="5000"
                    bath="3"
                    room="4"
                    floor="2"
                    price="5,00,000"/>
                

                <Homes
                    homeimg={Base.buy}
                    location={Base.location}
                    locatedIn="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    brs="Buy"
                    homeType="Home Type"
                    ownerName="Nidhi Parganiha"
                    sqft="5000"
                    bath="2"
                    room="4"
                    floor="1"
                    price="5,00,000" />
                

                <Homes
                    homeimg={Base.sell}
                    location={Base.location}
                    locatedIn="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    brs="Buy"
                    homeType="Home Type"
                    ownerName="Manisha Parganiha"
                    sqft="3000"
                    bath="2"
                    room="2"
                    floor="1"
                    price="3,00,000" />
                

                <Homes
                    homeimg={Base.rent}
                    location={Base.location}
                    locatedIn="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    brs="Rent"
                    homeType="Home Type"
                    ownerName="Disha parganiha"
                    sqft="1000"
                    bath="1"
                    room="2"
                    floor="1" 
                    price="1,00,000"/>
            </div>

            <div className='divmargin'>
                <h2 className='heading2 textcenter'>Become Part Of Us</h2>
                <div className="grid50 sharesection">
                    <div><div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ea natus. Quae, laboriosam ab libero culpa distinctio nesciunt. Dolorem suscipit similique commodi alias nobis eveniet iusto culpa nemo necessitatibus ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat esse vero illo ab unde. Repellat sit fugiat, accusamus perferendis magni optio quidem quisquam reprehenderit atque animi suscipit, minima corporis?</p><button className='btn2 primaryclr'>Share<img src={Base.right} alt="" className="rightarrow" /></button></div></div>
                    <div><img src={Base.image} alt="" /></div>
                </div>
            </div>

            <div className="divmargin">
                <h2 className="heading2 textcenter">Contact With Us</h2>
                <div className="contactUs">
                    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam maiores accusamus blanditiis alias? Expedita, cupiditate consequatur! Aut cum ipsam nesciunt delectus sapiente iure accusamus optio enim! Voluptates, doloremque illum!</p></div>
                    <div><button className='btn2 primaryclr'>Connect<img src={Base.right} alt="" className="rightarrow"/></button></div>
                </div>
            </div>

        </>
    );
}

export default Home;