import Link from 'next/link'
// import profilePic from '../public/favicon.png'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>
          <Image 
            src='/../public/MaiarPet1.png' 
            width={55}
            height={55}
          />
          </Link>
        </li>
        <li>
          <Link href='/'>story</Link>
        </li>
        <li>
          <Link href='/plan'>plan</Link>
        </li>
        <li>
          <Link href='/rarity'>rarity</Link>
        </li>
        <li>
          <Link href='/faq'>faq</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
