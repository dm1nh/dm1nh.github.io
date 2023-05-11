import sigils from '../assets/spritesheets/sigils.png'
import StaticImage from './static-image'
import Typing from './typing'

export default function Alliance() {
  return (
    <section className="container mt-64 flex flex-col items-stretch justify-center gap-16">
      <h3 className="text-xl uppercase">My strong allies and their words</h3>
      <StaticImage
        src={sigils}
        alt="Sigils"
        className="aspect-[210/50] border-2 border-primary-700"
      />
      <ul className="flex flex-col items-stretch divide-y-2 divide-primary-800 text-center">
        <li className="flex flex-col items-center py-8">
          <div className="text-amber-300">House JavaScript of Sunspear</div>
          <div>Undebuggable, untypesafety, unhidable</div>
        </li>
        <li className="flex flex-col items-center py-8">
          <div className="text-red-400">House HTML5 of Caterly Rock</div>
          <div>Hear you call me a programming language</div>
        </li>
        <li className="flex flex-col items-center py-8">
          <div className="text-sky-400">House CSS3 of Storm&apos;s End</div>
          <div>Stylesheet is the fury</div>
        </li>
        <li className="flex flex-col items-center py-8">
          <div className="text-sky-300">House React of Winterfell</div>
          <div>New version is comming</div>
        </li>
        <li className="flex flex-col items-center py-8">
          <div className="text-white">House Next of Eyrie</div>
          <div>As high as new features</div>
        </li>
        <li className="flex flex-col items-center py-8">
          <div className="text-amber-600">House Git of Riverrun</div>
          <div>Branching, Merging, Conflicting</div>
        </li>
        <li className="flex flex-col items-center py-8">
          <div className="text-blue-400">House TypeScript of Highgarden</div>
          <div>Growing large codebase</div>
        </li>
      </ul>
      <Typing
        options={{
          strings: [
            'All hail Dang Minh the Fat King.',
            'Long may he reign. Long may he reign.',
          ],
          typeSpeed: 100,
          cursorChar: '█',
          backDelay: 2000,
          loop: true,
        }}
        className="max-w-screen-xl rounded-lg bg-primary-900/25 px-4 py-2 text-center text-xl leading-snug text-amber-400"
      />
    </section>
  )
}
