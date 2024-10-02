import './meme.css'

const Meme = () => {
    return (
        <main>
            <form className="form">
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

                <button className="form--button">Get a new image</button>
            </form>
        </main>
    );
};

export default Meme;
