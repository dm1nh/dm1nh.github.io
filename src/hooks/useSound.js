import { useRef, useState } from 'react'

function useSound(src, { loop = false, autoplay = false } = {}) {
  const [paused, setPaused] = useState(autoplay ? false : true)
  const audioRef = useRef(new Audio(src))
  audioRef.current.loop = loop
  audioRef.current.autoplay = autoplay

  const toggle = () => {
    if (paused) {
      play()
    } else {
      pause()
    }
  }

  const play = () => {
    audioRef.current.play()
    setPaused(false)
  }

  const pause = () => {
    audioRef.current.pause()
    setPaused(true)
  }

  return { toggle, play, pause, paused }
}

export { useSound }
