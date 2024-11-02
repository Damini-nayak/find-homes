import react from 'react';

export default function BRS({imgsrc, name, description, btname,}){
    return(
        <div className='BRS'>
            <div><img src={imgsrc} alt="" /></div>
            <div></div>
            <div>
                <p className='brsname'>{name}</p>
                <p className="brsdes">{description}</p>
            </div>
            <button>{btname}</button>
        </div>
    );
}