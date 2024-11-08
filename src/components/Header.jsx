import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <img src='./trollface.png' alt="Trollface Meme" className='header--image'/>
            <h1 className='header--title'>Meme Generator</h1>
        </header>
    );
};

export default Header;
