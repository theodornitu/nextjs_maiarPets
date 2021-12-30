import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>
            <Image src="/MaiarPet1.png" alt="MaiarPet #1" width={60} height={60} />
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
