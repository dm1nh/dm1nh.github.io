import logo from '../assets/spritesheets/logo.png'
import { useDispatch } from '../hooks'
import { _setMobileNavVisible } from '../lib/actions'
import MobileNav from './mobile-nav'
import Nav from './nav'
import StaticImage from './static-image'

export default function Header() {
  const dispatch = useDispatch()
  const setMobileNavVisible = (value) => dispatch(_setMobileNavVisible(value))

  return (
    <>
      <header className="border-b-2 border-primary-800">
        <div className="container flex items-center justify-between py-2 sm:py-6">
          <StaticImage src={logo} alt="Logo" className="aspect-[1/1] w-10" />
          <div className="hidden sm:block">
            <Nav />
          </div>
          <button
            className="block px-4 py-2 uppercase text-primary-300 transition-colors duration-200 hover:text-primary-100 sm:hidden"
            onClick={() => setMobileNavVisible(true)}
          >
            Menu
          </button>
        </div>
      </header>
      <MobileNav />
    </>
  )
}
