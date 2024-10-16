/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import './meme.css'
import memesData from "../memesData.js"

const Meme = () => {
    const [memeImage, setMemeImage] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
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

                <button className="form--button" 
                        onClick={getMemeImage}
                >
                        Get a new image</button>
            </div>
            <div className="container">
                <img src={memeImage.randomImage} alt="" className="meme--img"/>
            </div>
        </main>
    );
};

export default Meme;
