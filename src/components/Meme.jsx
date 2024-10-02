import './meme.css'
import memesData from "../memesData.js"

const Meme = () => {
    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)
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
        </main>
    );
};

export default Meme;
