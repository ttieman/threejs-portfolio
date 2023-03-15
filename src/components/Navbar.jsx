import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');  // initialized use state to empty 
  const [toggle, setToggle] = useState(false);  // this is the use state function that switches the assets for the hamburer button between menu and close
  return (
    <nav className={`  ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => { //  on click scroll to top of page and set active to none
            setActive('');
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt='logo'  // this handles the logo section as well as title of the page
            className="w-10 h-9 object-contain rounded-md" />
          <p className='text-white text-[18px]
            font-bold cursor-pointer flex'>
              ODD ONE DESIGNS &nbsp;
            <span className='md:block hidden'>| Tanner Tieman</span>
            </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (  // this maps and displays the nav elements
            <li
              key={Link.id}
              className={`${    // applies styles and uses a ternary operator to check for hover over and active
                active === Link.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] 
              font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)} /* set active function on click to set the clicked nav item as active and highlight it*/
            >
              <a href={`#${Link.id}`}>{Link.title}</a>   {/* links to elements on the page and sends user to section when clicked */}
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items- center'> {/* this div handles the mobile navigation bar  */}
          <img src={toggle ? close : menu} // this is the ternary statment to handle toggle swapping the open and close menu button 
            alt="menu"           /* this image tag is setting up hamburger button to appear when the screen size small */
            className='w-[28px] h-[28p] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}  // this is the on click handler for the hamburger button 
          />
          <div className={`${!toggle ? 'hidden'            //this dive is the contatiner for the container of the toggle menu button
            : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 
                 my-2 min-w-[140px] z-10 rounded-xl`}>

            <ul className='list-none flex justify-end items-start flex-col gap-4'>   {/* this the list that will be populated when the menu button is active and instead of display hidden initially it will be displayed flex */}
              {navLinks.map((Link) => (  // this maps and displays the nav elements
                <li
                  key={Link.id}
                  className={`${    // applies styles and uses a ternary operator to check for hover over and active
                    active === Link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle);  // this will close the toggle menu after a link is clicked
                    setActive(Link.title);
                  }} /* set active function on click to set the clicked nav item as active and highlight it*/
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>   {/* links to elements on the page and sends user to section when clicked */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar