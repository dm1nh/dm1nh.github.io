import {
  ironThrone as ironThroneData,
  king as kingData,
} from '../assets/spritesheets/data.json'
import ironThroneSpritesheet from '../assets/spritesheets/iron-throne.png'
import kingSpritesheet from '../assets/spritesheets/king.png'
import AnimatedCanvas from '../components/animated-canvas'
import Typing from './typing'

export default function Hero() {
  return (
    <section className="container flex min-h-screen flex-col items-stretch gap-2">
      <div className="relative">
        <AnimatedCanvas
          id="ironThrone"
          src={ironThroneSpritesheet}
          {...ironThroneData}
          className="aspect-[480/294] w-full"
        />
        <AnimatedCanvas
          id="king"
          src={kingSpritesheet}
          {...kingData}
          className="absolute left-1/2 top-[38%] aspect-[49/87] w-[10.2%] -translate-x-1/2"
        />
      </div>
      <p className="text-center leading-snug">
        Dang Minh of House Ngo, First of his name.
      </p>
      <Typing
        options={{
          strings: [
            'King of the Andals and the Firstmen.',
            'Lord of Seven Kingdoms. Protector of the realms.',
            "His sword is Blackfyer that Aegon The Conqueror's.",
          ],
          typeSpeed: 100,
          cursorChar: '█',
          backDelay: 2000,
        }}
        className="text-center leading-snug"
      />
    </section>
  )
}
