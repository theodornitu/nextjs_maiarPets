
import Link from 'next/link'
import React, { useState } from 'react';

// Icons import
import { FaTwitterSquare, FaDiscord, FaTimes, FaBars } from 'react-icons/fa';

// Styles import
import navStyles from '../styles/Nav.module.css'
import welcomeStyles from '../styles/Welcome.module.css'

const Welcome = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <h1 className={welcomeStyles.title}>
      The website is currently <span>under construction</span>!
      </h1>
      {/* <h3 className={welcomeStyles.description}>
        The website is currently under construction! 
      </h3> */}
      <p className={welcomeStyles.link}>
        Follow us on <Link  href = "https://twitter.com/maiar_pets">twitter</Link> to stay up to date with the progress.
      </p>
    </div>
  )
}

export default Welcome
