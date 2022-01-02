// Components import
import { MobileMenuItems } from './MobileMenuItems';

// React/Next libs import
import React, { useState } from 'react';

// Styles import
import '../styles/Dropdown.module.css';

function Dropdown() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MobileMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
  export default Dropdown;