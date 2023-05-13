import letter from '../assets/spritesheets/letter.png'
import StaticImage from './static-image'

export default function Letter() {
  return (
    <section
      id="ravens"
      className="container mt-48 flex scroll-mt-12 flex-col items-stretch gap-16 sm:mt-64"
    >
      <h3 className="text-md uppercase text-violet-400 sm:text-lg md:text-xl">
        Send me ravens
      </h3>
      <div className="relative">
        <StaticImage src={letter} alt="Letter" />
        <p className="absolute top-1/2 -translate-y-1/2 px-8 leading-8 text-primary-700">
          Bent the knee, and you will be the Warden of the North.
        </p>
      </div>
      <p>
        We need more allies. We can help each others to overcome the Long Night.
        We need to defeat the Army of the Bugs. We need to build something that
        is greater than The Wall. We need to be alive.
      </p>
      <p>Send me a raven now!</p>
      <ul className="list-inside list-disc">
        <li>
          Email:{' '}
          <a
            href={`mailto:dangminhngo.dev@gmail.com`}
            className="transition-colors delay-100 duration-200 hover:text-white hover:underline"
          >
            dangminhngo.dev@gmail.com
          </a>
        </li>
        <li>
          Github:{' '}
          <a
            href={`https://github.com/dangminhngo`}
            className="transition-colors delay-100 duration-200 hover:text-white hover:underline"
          >
            dangminhngo
          </a>
        </li>
        <li>
          Twitter:{' '}
          <a
            href={`https://twitter.com/dangminhngo`}
            className="transition-colors delay-100 duration-200 hover:text-white hover:underline"
          >
            @dangminhngo
          </a>
        </li>
      </ul>
    </section>
  )
}
