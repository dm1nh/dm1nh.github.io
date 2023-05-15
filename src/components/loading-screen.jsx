import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import useSound from 'use-sound'

import gotTheme from '../assets/sounds/got.mp3'
import { loading as loadingData } from '../assets/spritesheets/data.json'
import loading from '../assets/spritesheets/loading.png'
import { useDispatch, useInterval, useSelect } from '../hooks'
import { _setLoading } from '../lib/actions'
import { clamp } from '../lib/helpers'
import AnimatedCanvas from './animated-canvas'

export default function LoadingScreen() {
  const [play] = useSound(gotTheme)
  const [percentage, setPercentage] = useState(0)
  const { isLoadingVisible } = useSelect()
  const dispatch = useDispatch()
  const setLoading = (value) => dispatch(_setLoading(value))

  useInterval(() => {
    setPercentage(
      clamp(Math.ceil(100 / loadingData.frames + percentage), 0, 100)
    )
  }, loadingData.timecode)

  return createPortal(
    <AnimatePresence>
      {isLoadingVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-primary-900"
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          onClick={() => {
            play()
            setLoading(false)
          }}
        >
          <div className="container flex max-w-4xl flex-col items-stretch gap-4">
            <AnimatedCanvas
              id="loading"
              src={loading}
              {...loadingData}
              className="aspect-[5/3]"
            />
            {percentage >= 100 ? (
              <p className="animate-pulse text-center">
                Tap the screen to start
              </p>
            ) : (
              <p className="text-center">Loading ... {percentage}%</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('loading')
  )
}
