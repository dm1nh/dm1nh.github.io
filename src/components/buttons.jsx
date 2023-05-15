import { useContext } from 'react'
import { createPortal } from 'react-dom'

import { SoundContext } from '../lib/context'

export default function Buttons() {
  const { toggle, paused } = useContext(SoundContext)

  return createPortal(
    <>
      <button
        className="fixed bottom-4 left-4 z-10 grid w-20 place-items-center rounded-md bg-primary-800/50 text-sm"
        onClick={toggle}
      >
        {paused ? 'Play' : 'Mute'}
      </button>
      <button
        className="fixed bottom-4 right-4 z-10 grid w-20 place-items-center rounded-md bg-primary-800/50 text-sm"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        Top
      </button>
    </>,
    document.getElementById('buttons')
  )
}
