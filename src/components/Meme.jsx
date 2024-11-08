/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./meme.css";
import memesData from "../memesData.js";

const Meme = () => {
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;
        setMemeImage((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
            };
        });
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMemeImage => {
            return {
                ...prevMemeImage,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <label htmlFor="top-text">Top Text</label>
                <input
                    type="text"
                    placeholder="Shut up"
                    onChange={handleChange}
                    name="topText"
                    value={memeImage.topText}
                    id="top-text"
                    className="form--input"
                />

                <label htmlFor="bottom-text">Bottom Text</label>
                <input
                    type="text"
                    placeholder="and take my money!"
                    onChange={handleChange}
                    name="bottomText"
                    value={memeImage.bottomText}
                    id="bottom-text"
                    className="form--input"
                />

                <button className="form--button" onClick={getMemeImage}>
                    Get a new image
                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} alt="" className="meme--img" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;
