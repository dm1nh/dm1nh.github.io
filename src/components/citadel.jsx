import citadel from '../assets/spritesheets/citadel.png'
import { citadel as citadelData } from '../assets/spritesheets/data.json'
import AnimatedCanvas from './animated-canvas'

export default function Citadel() {
  return (
    <section className="container mt-64 flex min-h-screen flex-col items-stretch justify-center gap-16">
      <h3 className="text-xl uppercase">The maesters of Citadel sent ravens</h3>
      <AnimatedCanvas
        src={citadel}
        {...citadelData}
        className="aspect-[10/3]"
      />
      <div>
        <ul className="divide-y-2 divide-primary-800">
          {quotes.map(({ quote, author }, index) => (
            <li key={index} className="py-8">
              <p>&quot;{quote}&quot;</p>
              <p className="text-primary-400">-- {author}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const quotes = [
  {
    quote:
      'He knowns how to exit Vim. He told me that shuting down the computer is best way to do it.',
    author: "Maester Aemon of the Jest's Watch",
  },
  {
    quote:
      'The Noble Houses gathers to teach him how to write Front-end code in years.',
    author: 'Maester Harmune of Eastwatch-by-the-sea',
  },
  {
    quote: 'He learns things quickly. He always want to be a better developer.',
    author: "Grand Maester Pycelle of King's Landing",
  },
  {
    quote:
      'The knowledge of Web Development is enormous. But he is trying to up to date with the cutting-edge technology.',
    author: 'Maester Samwell',
  },
  {
    quote:
      "It's never too late to start something new in your life. Your life hasn'd end, son. Keep going!",
    author: 'Maester Yandel of Citadel',
  },
  {
    quote:
      'Bran the Builder had built the Wall thousand years ago. And now this young King builds the web apps.',
    author: 'Maester Luwin of Winterfell',
  },
]
