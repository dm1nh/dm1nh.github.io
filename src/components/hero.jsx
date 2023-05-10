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
      <Typing
        options={{
          strings: [
            'Dang Minh of House Ngo, First of his name. King of the Andals, the Rhoynars and the Firstmen. Lord of Seven Kingdoms. Protector of the realms.',
            'He is the owner of Iron Throne. He swings a famous longsword called Blackfyer. He is the first king of House Ngo.',
          ],
          typeSpeed: 100,
          startDelay: 12000,
          cursorChar: '█',
          backDelay: 2000,
        }}
        className="rounded-lg bg-primary-900/25 px-4 py-2 text-center leading-snug"
      />
    </section>
  )
}
