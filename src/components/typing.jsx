import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Typing({ options, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const typed = new Typed(ref.current, options)

    return () => typed.destroy()
  }, [options])

  return (
    <div {...props}>
      <span ref={ref} />
    </div>
  )
}
