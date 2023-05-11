import { useEffect, useRef } from 'react'

import { clamp } from '../lib/helpers'

export default function AnimatedCanvas({
  id,
  width,
  height,
  src,
  frames,
  timecode,
  delay,
  scale = 1,
  loop = false,
  loopCount = 'Infinity',
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const canvas = ref.current
    const ctx = canvas.getContext('2d')

    const spritesheet = new Image()
    spritesheet.src = src
    canvas.width = width
    canvas.height = height

    let id
    let counter = 0
    const step = (timestamp) => {
      const value = Math.floor(timestamp / timecode)
      const frameIndex = clamp(value % frames, 0, frames - 1)

      ctx.clearRect(0, 0, width, height)
      ctx.drawImage(
        spritesheet,
        0,
        frameIndex * height,
        width,
        height,
        0,
        0,
        width,
        height
      )

      id = requestAnimationFrame(step)

      if (!loop && counter === 1) {
        cancelAnimationFrame(id)
      }

      if (loop && loopCount !== 'Infinity' && counter >= +loopCount) {
        cancelAnimationFrame(id)
      }

      if (frameIndex >= frames - 1) counter++
    }

    id = requestAnimationFrame(step)

    return () => cancelAnimationFrame(id)
  }, [src, frames, timecode, delay, width, height, loop, loopCount])

  return (
    <canvas
      ref={ref}
      id={id}
      {...props}
      style={{
        imageRendering: 'pixelated',
      }}
    />
  )
}
