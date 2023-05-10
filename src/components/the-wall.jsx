import { theWall as theWallData } from '../assets/spritesheets/data.json'
import theWall from '../assets/spritesheets/the-wall.png'
import AnimatedCanvas from './animated-canvas'

export default function TheWall() {
  return (
    <section className="container mt-64 flex min-h-screen flex-col items-stretch gap-16">
      <h3 className="text-xl uppercase">But the Great Winter is coming...</h3>
      <AnimatedCanvas
        id="wall"
        src={theWall}
        {...theWallData}
        className="aspect-[2/1]"
      />
      <div className="space-y-16">
        <p>
          The Jest&apos;s Watch is a military order dedicated to holding the
          Wall, the immense fortification on the northern border of the Seven
          Kingdoms, defending the realms of men from{' '}
          <strong className="text-amber-400">what lies beyond the Wall</strong>.
          The men of Jest&apos;s Watch wear only black, and they are known as{' '}
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
        <p className="uppercase">
          And we&apos;ll have to help them, by{' '}
          <strong className="text-red-400">fixing the bugs</strong> during the
          Long Night.
        </p>
      </div>
    </section>
  )
}
