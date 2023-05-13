import { useDispatch } from '../hooks'
import { _setMobileNavVisible } from '../lib/actions'

export default function Nav() {
  const dispatch = useDispatch()
  const setMobileNavVisible = (value) => dispatch(_setMobileNavVisible(value))

  return (
    <nav className="text-md">
      <ul className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center sm:gap-12">
        {items.map(({ title, href }) => (
          <li key={title}>
            <a
              href={href}
              className="block px-4 py-4 text-center text-xl transition-colors delay-100 duration-200 hover:text-violet-400 sm:px-0 sm:py-0 sm:text-left sm:text-md"
              onClick={() => setMobileNavVisible(false)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const items = [
  {
    title: 'Allies',
    href: '#allies',
  },
  {
    title: 'Citadel',
    href: '#citadel',
  },
  {
    title: 'Winter is coming',
    href: '#winter',
  },
  {
    title: 'Blog',
    href: '#blog',
  },
]
