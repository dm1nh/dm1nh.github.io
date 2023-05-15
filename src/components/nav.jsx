import { useDispatch } from '../hooks'
import { _setMobileNavVisible } from '../lib/actions'

export default function Nav() {
  const dispatch = useDispatch()
  const setMobileNavVisible = (value) => dispatch(_setMobileNavVisible(value))

  return (
    <nav className="text-md">
      <ul className="flex flex-col items-stretch gap-0 md:flex-row md:items-center md:gap-8">
        {items.map(({ title, href }) => (
          <li key={title}>
            <a
              href={href}
              className="block p-4 text-center text-xl transition-colors delay-100 duration-200 hover:text-violet-400 md:p-0 md:text-left md:text-md"
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
  {
    title: 'Send ravens',
    href: '#ravens',
  },
]
