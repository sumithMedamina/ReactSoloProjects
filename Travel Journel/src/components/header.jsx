import globe from '../images/globe.png'

export default function Header(){
    return(
        <div >
            <header className="journel-header">
                <img className='globe' src={globe} alt="" />
                <p>my travel journel.</p>
            </header>
        </div>
    )
}