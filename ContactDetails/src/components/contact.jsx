import p1 from '../assets/person.png';

export default function Contact( props){
    return(
        <div className="contact">

            <div className="contact-card">
                <img src={p1} alt="" />
                <h3>{props.name}</h3>

                <div className="info-group">
                    <p>&#9742; {props.phone}</p>
                </div>

                <div className="info-group">
                    <p><span className='email'>&#9993;</span> {props.email}</p>
                </div>

            </div>
        </div>
    )
}