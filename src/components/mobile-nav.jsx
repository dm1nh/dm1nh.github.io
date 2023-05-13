import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'

import logo from '../assets/spritesheets/logo.png'
import { useDispatch, useSelect } from '../hooks'
import { _setMobileNavVisible } from '../lib/actions'
import Nav from './nav'
import StaticImage from './static-image'

export default function MobileNav() {
  const dispatch = useDispatch()
  const { isMobileNavVisible } = useSelect()
  const setMobileNavVisible = (value) => dispatch(_setMobileNavVisible(value))

  return createPortal(
    <AnimatePresence>
      {isMobileNavVisible && (
        <motion.div
          className="fixed inset-0 block bg-primary-950 sm:hidden"
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
        >
          <div className="border-b-2 border-primary-900">
            <div className="container flex items-center justify-between py-2 sm:py-6">
              <StaticImage
                src={logo}
                alt="Logo"
                className="aspect-[1/1] w-10"
              />
              <button
                className="px-4 py-2 uppercase text-primary-300 transition-colors duration-200 hover:text-primary-100"
                onClick={() => setMobileNavVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
          <Nav />
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('mobile-nav')
  )
}
