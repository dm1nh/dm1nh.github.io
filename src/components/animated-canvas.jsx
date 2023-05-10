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

    let start = Date.now(),
      end = start

    const animate = () => {
      const value = Math.floor((end - start) / timecode)
      const frameIndex = clamp(value, 0, frames - 1)

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

      requestAnimationFrame(animate)
      if (value > frames - 1 + Math.ceil(delay / timecode)) {
        start = Date.now()
      }

      end = Date.now()
    }

    animate()
  }, [src, frames, timecode, delay, width, height])

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
