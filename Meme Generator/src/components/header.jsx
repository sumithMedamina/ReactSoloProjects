import logo from '../images/logo.png'

export default function Header(){
    return (
        <header className='meme-header'>
            <img className='logo' src={logo} alt="" />
            <h2>Meme Generator</h2>
        </header>
    )
}