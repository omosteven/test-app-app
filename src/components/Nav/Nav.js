import React from 'react';
import logo from '../Images/instagram1.png';
import './Nav.css';
function Nav() {
        return (
            <div className='nav'>
                
                <button className='logo'>
                    <img src={logo} alt='' />
                </button>
                <input type='search' className="searchInput" placeholder='search'/>

                <span className='linksIcon'>
                    <button>
                        <i className='fas fa-home' />
                    </button>
                      <button>
                        <i className='fas fa-comment-alt' />
                    </button>
                      <button>
                        <i className='fas fa-compass' />
                    </button>
                      <button>
                        <i className='fas fa-heart' />
                    </button>
                </span>
            </div>
        );
    
}

export default Nav;
