// React/Next libs import
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

// Icons import
import { FaTwitterSquare, FaDiscord, FaBars, FaSearch } from 'react-icons/fa';

// Styles import
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header onScroll={closeMobileMenu}>
      <nav className={navStyles['nav']}>
        {/* Logo */}
        <div className={navStyles.logo}>
          <Link href='/' onClick={closeMobileMenu}>
            <Image src="/MaiarPet1.png" alt="MaiarPet #1" width={50} height={50} />
          </Link>
        </div>
        {/* Title */}
        <div className={navStyles.pageTitle}>
          <Link href='/' onClick={closeMobileMenu}>| Maiar Pets </Link>
        </div>
        {/* Socials links */}
        <div className={navStyles.socials}>
          <li>
            <Link href='https://twitter.com/maiar_pets'>
              <FaTwitterSquare />
            </Link>
          </li>
          <li>
            <Link href='https://discord.gg/zCDqHrVEWK'>
              <FaDiscord />
            </Link>
          </li>
          <li className={navStyles['menuIcon']} onClick={handleClick}>
            <FaBars /> 
          </li>
        </div>
        {/* Nav menu */}
        <ul className={click ? navStyles['menuActive'] : navStyles['menu']}>
          <li className={navStyles['item']}>
            <Link href='/' onClick={closeMobileMenu}>story</Link>
          </li>
          <li className={navStyles['item']}>
            <Link href='/plan' onClick={closeMobileMenu}>plan</Link>
          </li>
          <li className={navStyles['item']}>
            <Link href='/traits' onClick={closeMobileMenu}>traits</Link>
          </li>
          <li className={navStyles['item']}>
            <Link href='/faq' onClick={closeMobileMenu}>faq</Link>
          </li>
          <li className={navStyles.itemMint}>
            <Link href='/' onClick={closeMobileMenu}>mint</Link>
            {/* <Link href='/dapp' onClick={closeMobileMenu}>mint</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
