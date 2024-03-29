// Components

// Reactjs & Nextjs
import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react';
import { FaTwitterSquare, FaDiscord, FaBars, FaSearch } from 'react-icons/fa';

// Config & Helpers
import { navPages } from '../routes';

// Styles
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header onScroll={closeMobileMenu}>
      <nav className={navStyles['nav']}>
        {/* Logo */}
        <div className={navStyles.logo}>
          <Link href={navPages.index} onClick={closeMobileMenu}>
            <Image src="/MaiarPet1.png" alt="MaiarPet #1" width={50} height={50} />
          </Link>
        </div>
        {/* Title */}
        <div className={navStyles.pageTitle}>
          <Link href={navPages.index} onClick={closeMobileMenu}>| Maiar Pets </Link>
        </div>
        {/* Socials links */}
        <div className={navStyles.socials}>
          <li>
            <a target="_blank" href='https://twitter.com/maiar_pets'>
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a target="_blank" href='https://discord.gg/zCDqHrVEWK'>
              <FaDiscord />
            </a>
          </li>
          <li className={navStyles['menuIcon']} onClick={handleClick}>
            <FaBars /> 
          </li>
        </div>
        {/* Nav menu */}
        <ul className={click ? navStyles['menuActive'] : navStyles['menu']}>
          <li className={navStyles['item']}>
            <Link href={navPages.index} onClick={closeMobileMenu}>story</Link>
          </li>
          <li className={navStyles['item']}>
            <Link href={navPages.plan} onClick={closeMobileMenu}>plan</Link>
          </li>
          <li className={navStyles['item']}>
            <Link href={navPages.traits} onClick={closeMobileMenu}>traits</Link>
          </li>
          <li className={navStyles['item']}>
            <Link href={navPages.faq} onClick={closeMobileMenu}>faq</Link>
          </li>
          <li className={navStyles.itemMint}>
            <Link href={navPages.home} onClick={closeMobileMenu}>mint</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
