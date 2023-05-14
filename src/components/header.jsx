import logo from '../assets/spritesheets/logo.png'
import MobileNav from './mobile-nav'
import Nav from './nav'
import StaticImage from './static-image'

export default function Header() {
  return (
    <>
      <header className="border-b-2 border-primary-800">
        <div className="container flex h-16 items-center justify-between sm:h-20">
          <StaticImage src={logo} alt="Logo" className="aspect-[1/1] w-10" />
          <div className="hidden md:block">
            <Nav />
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  )
}
