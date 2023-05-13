import letter from '../assets/spritesheets/letter.png'
import siteConfig from '../config/site'
import StaticImage from './static-image'

export default function Letter() {
  return (
    <section
      id="ravens"
      className="container mt-48 flex scroll-mt-24 flex-col items-stretch gap-16 sm:mt-64 sm:scroll-mt-4"
    >
      <h3 className="text-md uppercase text-violet-400 sm:text-lg md:text-xl">
        Send me ravens
      </h3>
      <div className="relative">
        <StaticImage src={letter} alt="Letter" />
        <p className="absolute top-1/2 -translate-y-1/2 px-8 leading-8 text-primary-700 sm:px-16">
          Bent the knee!
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
            href={`mailto:${siteConfig.links.email.href}`}
            className="transition-colors delay-100 duration-200 hover:text-white hover:underline"
          >
            {siteConfig.links.email.title}
          </a>
        </li>
        <li>
          Github:{' '}
          <a
            href={siteConfig.links.github.href}
            className="transition-colors delay-100 duration-200 hover:text-white hover:underline"
          >
            {siteConfig.links.github.title}
          </a>
        </li>
        <li>
          Twitter:{' '}
          <a
            href={siteConfig.links.twitter.href}
            className="transition-colors delay-100 duration-200 hover:text-white hover:underline"
          >
            {siteConfig.links.twitter.title}
          </a>
        </li>
      </ul>
    </section>
  )
}
