import bugs from '../assets/spritesheets/bugs.png'
import {
  bugs as bugsData,
  theWall as theWallData,
} from '../assets/spritesheets/data.json'
import theWall from '../assets/spritesheets/the-wall.png'
import AnimatedCanvas from './animated-canvas'

export default function TheWall() {
  return (
    <section className="container mt-64 flex flex-col items-stretch gap-16">
      <h3 className="text-xl uppercase">But the Great Winter is coming...</h3>
      <AnimatedCanvas
        id="wall"
        src={theWall}
        {...theWallData}
        className="aspect-[2/1]"
      />
      <div className="space-y-16">
        <p>
          The Night&apos;s Watch is a military order dedicated to holding the
          Wall, the immense fortification on the northern border of the Seven
          Kingdoms, defending the realms of men from{' '}
          <strong className="text-amber-400">what lies beyond the Wall</strong>.
        </p>
        <p>
          The men of Night&apos;s Watch wear only black, and they are known as{' '}
          <strong className="text-violet-400">black brothers</strong>. They take
          the black and protect the people of the Seven Kingdoms from an evil
          side of humanoid beings that exist in the north beyond the Wall,{' '}
          <strong className="text-red-300">
            the Bugs, also known as White Deaths{' '}
          </strong>
          and their leaders,{' '}
          <strong className="text-sky-300">the Software Testers</strong>. They
          have found down a large of the Bugs what is known as{' '}
          <strong className="text-blue-400">Army of the Bugs</strong>.
        </p>
        <AnimatedCanvas
          id="bugs"
          src={bugs}
          {...bugsData}
          className="aspect-[5/2] w-full"
        />
        <p>
          And now our watch begins. Our duty is{' '}
          <strong className="text-red-400">fixing the bugs</strong> during the
          Long Night.
        </p>
      </div>
    </section>
  )
}
