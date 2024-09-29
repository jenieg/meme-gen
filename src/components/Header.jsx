import './header.css'

const Header = () => {
    return (
        <header className='header__gradient'>
            <img src='./trollface.png' alt="Trollface Meme" className='header__img'/>
            <h1>Meme Generator</h1>
        </header>
    );
};

export default Header;
