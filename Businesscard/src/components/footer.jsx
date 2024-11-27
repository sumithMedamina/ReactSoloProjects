import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import git from '../assets/git.png'
function Footer(){
return(
    <div className='footer'>
        <img src={twitter} alt="" onClick={() => window.open("https://x.com/i/flow/login") }  />
        <img src={facebook} alt="" onClick={() => window.open("https://www.facebook.com/") }/>
        <img src={insta} alt="" onClick={()=> window.open("https://www.instagram.com/sumith_55/profilecard/?igsh=MTk0cTlhYnJ6anJ0aw==")}/>
        <img src={git} alt=""  onClick={() => window.open("https://github.com/codesumith") }/>
    </div>
)
}

export default Footer;