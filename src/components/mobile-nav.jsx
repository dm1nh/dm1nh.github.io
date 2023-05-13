import { useEffect, useRef } from 'react'
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

  const originalStyleRef = useRef(
    window.getComputedStyle(document.body).overflow
  )

  useEffect(() => {
    if (isMobileNavVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalStyleRef.current
    }
  }, [isMobileNavVisible])

  return createPortal(
    <>
      <button
        className="fixed right-4 top-2 block rounded bg-primary-900/60 p-2 uppercase text-primary-300 transition-colors duration-200 hover:text-primary-100 sm:top-4 sm:hidden"
        onClick={() => setMobileNavVisible(true)}
      >
        Menu
      </button>
      <AnimatePresence>
        {isMobileNavVisible && (
          <motion.div
            className="fixed inset-0 block bg-primary-950 sm:hidden"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
          >
            <div className="border-b-2 border-primary-900">
              <div className="container flex h-16 items-center justify-between sm:h-20">
                <StaticImage
                  src={logo}
                  alt="Logo"
                  className="aspect-[1/1] w-10"
                />
                <button
                  className="p-2 uppercase text-primary-300 transition-colors duration-200 hover:text-primary-100"
                  onClick={() => setMobileNavVisible(false)}
                >
                  Close
                </button>
              </div>
            </div>
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.getElementById('mobile-nav')
  )
}
