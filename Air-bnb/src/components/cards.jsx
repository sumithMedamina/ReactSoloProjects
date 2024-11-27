import room1 from '../assets/room1.png'

export default function Card(){
    return(
        <div className="card">
            <img src={room1} alt="" /><br />
            <span><span className='star'>&#9733;</span > 
             5.0(6) Tokyo,Japan</span>
            <span><h4>Price: $120</h4>/night</span>
        </div>
    )
} 