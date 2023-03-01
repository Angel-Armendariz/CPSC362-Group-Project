import React from 'react';
import './Header.css';
import logo from 'C:/Github/CPSC362-Group-Project/my-app/src/assets/logo';
import audiowave from 'C:/Github/CPSC362-Group-Project/my-app/src/assets/audiowave.png'
import {Link} from 'react-router-dom';

const Header = () => (
  <>
    <div className='headertopbar'>
      <form className='head-text'>
        <li>
          <a href='https://titanradio.org/live/'><img src={audiowave} /></a>
        </li>
        <h1>Official Site For Titan Radio Merch</h1>
      </form>

    </div>
    <div className="header">
        <Link to="/">
        <img
          src={logo}
          alt="example"
        />
      </Link>
    </div>
    <div>
            <Link to="/All"><button className='button-all'>
              All
            </button>
            </Link>
    </div>
    <div>
            <Link to="/Apparel"><button className='button-apparel'>
              Apparel
            </button>
            </Link>
    </div>
    <div>
            <Link to="/Accessories"><button className='button-accessories'>
              Accessories
            </button>
            </Link>
    </div>
    <div>
            <Link to="/Cart"><button className='button-cart'>
              Cart
            </button>
            </Link>
    </div>
    </>
)
export default Header;