import Email from '../assets/email.svg'
import Linkedin from '../assets/linkedin.svg'

function Info(){
    return(
        < div className="info">

            <div className='Profile-data'>
                <h1>Sumith Kumar</h1>
                <p>FullStack Developer</p>
                <small>smithkumar.website</small> 
            </div>

            <div className='Buttons'>
                <div className='Email' onClick={() => {
                    const email = "sumithkumar100@gmail.com";
                    const subject = "Hello";
                    const body = "I want to contact you.";
                    window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
                        subject
                    )}&body=${encodeURIComponent(body)}`,
                    "_blank"
                    );
                }}>
                    <img src={Email} alt="" />Email
                </div>
                <div className='Linkedin' onClick={()=>window.open("https://www.linkedin.com/in/sumith-kumar-0597a3270/")}>
                    <img src={Linkedin} alt="" />Linkedin
                </div>
            </div>

            <div className='content'>
                <h3>About</h3>
                <small>I am a fullstack developer with a particular 
                    interest in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, and am always 
                    looking for new things to learn.
                </small>
                <h3>Interests</h3>
                <small>Food expert. Music scholar. Reader. Internet fanatic. 
                    Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. 
                    Coffee fanatic.
                </small>
            </div>
            

        </div>
    )
}

export default Info;
