import data from '../data.jsx'
import React from 'react'

export default function Meme(){
    const [image, setImage] = React.useState(data.data.memes[0].url);
    
    function randomImage(){
        const images = data.data.memes
        const randomNumber = Math.floor(Math.random() * images.length);
        setImage(images[randomNumber].url)
    }
 

    return(
        <div className="main">
            <div className="inputs">
                <div>
                    <p>Top text</p>
                    <input type="text" name="" id="" placeholder="Top text" />
                </div>
                <div>
                    <p>Bottom text</p>
                    <input type="text" name="" id="" placeholder="Bottom text"/>
                </div>
            </div>
            <button onClick={randomImage}>Get a new meme image 🖼️</button>
            <img className="image" src={image} alt="" />
        </div>
    )
}