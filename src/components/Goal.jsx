import mission from '../assets/mission.png'
import vision from '../assets/vision.png'
import value from '../assets/value.png'

const list = [
  {
    id: 1001,
    img: mission,
    title: 'Mission',
    desc: 'Description of mission I just want to make it longer so it fit',
  },
  {
    id: 1002,
    img: vision,
    title: 'Vision',
    desc: 'Description of mission I just want to make it longer so it fit',
  },
  {
    id: 1003,
    img: value,
    title: 'Values',
    desc: 'Description of mission I just want to make it longer so it fit',
  },
]

const Goal = () => {
  return (
    <section className="bg-arbit_bg_brown">
      <div>
        <ul>
          {list.map((item) => {
            const { id, img, title, desc } = item
            return (
              <li key={id} className="flex flex-col items-center mx-7">
                <img src={img} alt="mission" className="h-40 w-72 m-8" />
                <div className="text-6xl font-bold py-5">{title}</div>
                <div className="text-4xl font-normal mb-9">{desc}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Goal
