import bugs from '../assets/spritesheets/bugs.png'
import {
  bugs as bugsData,
  dragonSide as dragonSideData,
  theWall as theWallData,
  weapons as weaponsData,
} from '../assets/spritesheets/data.json'
import dragonSide from '../assets/spritesheets/dragon-side.png'
import theWall from '../assets/spritesheets/the-wall.png'
import weapons from '../assets/spritesheets/weapons.png'
import AnimatedCanvas from './animated-canvas'

export default function TheWall() {
  return (
    <section
      id="winter"
      className="container mt-64 flex flex-col items-stretch gap-24"
    >
      <h3 className="text-md uppercase text-violet-400 sm:text-lg md:text-xl">
        But the Great Winter is coming...
      </h3>
      <AnimatedCanvas
        id="wall"
        src={theWall}
        {...theWallData}
        className="aspect-[2/1]"
      />
      <p>
        The Night&apos;s Watch is a military order dedicated to holding the
        Wall, the immense fortification on the northern border of the Seven
        Kingdoms, defending the realms of men from{' '}
        <strong className="text-amber-400">what lies beyond the Wall</strong>.
      </p>
      <p>
        The men of Night&apos;s Watch wear only black, and they are known as{' '}
        <strong className="text-violet-400">black brothers</strong>. They take
        the black and protect the people of the Seven Kingdoms from an evil side
        of humanoid beings that exist in the north beyond the Wall,{' '}
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
        className="aspect-[5/2]"
      />
      <p>
        And now our watch begins. Our duty is{' '}
        <strong className="text-red-400">fixing the bugs</strong> during the
        Long Night.
      </p>
      <p>
        There are only three ways to kill a White Death. We can stab them with
        weapons made of <strong className="text-violet-600">Dragonglass</strong>{' '}
        or <strong className="text-white">Valyrian Steel</strong>.
      </p>
      <AnimatedCanvas
        id="weapons"
        src={weapons}
        {...weaponsData}
        className="aspect-[200/73]"
      />
      <p>And the most powerful way to kill a White Death is ...</p>
      <AnimatedCanvas
        id="dragon-side"
        src={dragonSide}
        {...dragonSideData}
        className="aspect-[200/213] w-full self-center sm:w-2/3 md:w-1/2"
      />
    </section>
  )
}
