import React, { useState } from 'react';
import '../style/App.css';

export default function Searchcalegory(){

    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (button) =>{
        setActiveButton(button);
    }
    
    return (
    <div className='searchCalagory'>
        <button
        className = {`${activeButton === 1 ? 'active' : ''}`}
        onClick = {()=>handleClick(1)}>Buy</button>
        <button
        className = {`${activeButton === 2 ? 'active' : ''}`}
        onClick = {()=>handleClick(2)}>Rent</button>
        <button
        className = {`${activeButton === 3 ? 'active' : ''}`}
        onClick = {()=>handleClick(3)}>Sell</button>
    </div>
    );
}