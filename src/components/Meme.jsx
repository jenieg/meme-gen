// eslint-disable-next-line no-unused-vars
import React, {useState} from "react"
import './meme.css'
import memesData from "../memesData.js"

const Meme = () => {
    const [memeImage, setMemeImage] = useState('');

    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        setMemeImage(memeArray[randomNumber].url)
    }

    

    return (
        <main>
            <div className="form">
                <div className='form__input'>
                    <label htmlFor='top-text'>Top Text</label>
                    <input  type="text"
                            placeholder="Shut up"
                            id="top-text"
                            className="form--input"/>
                    
                </div>

                <div className='form__input'>
                    <label htmlFor='bottom-text'>Bottom Text</label>
                    <input  type="text"
                            placeholder="and take my money!"
                            id="bottom-text"
                            className="form--input"/>
                    
                </div>

                <button className="form--button" onClick={getMemeImage}>Get a new image</button>
            </div>
            <img src={memeImage} alt="" className="meme--img"/>
        </main>
    );
};

export default Meme;
