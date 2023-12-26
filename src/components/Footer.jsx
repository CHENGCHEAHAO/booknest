import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'

const contacts = [
  {
    id: 9001,
    img: location,
    text: '2, Jalan Air Mas, Bayan Baru, Pulau Pinang, Malaysia',
  },
  {
    id: 9002,
    img: phone,
    text: '+60125345786',
  },
  {
    id: 9003,
    img: email,
    text: 'BookNest@gmail.com',
  },
]

const menuList = [
  { id: 8001, title: 'Home' },
  { id: 8002, title: 'Books' },
  { id: 8003, title: 'About' },
  { id: 8004, title: 'News' },
]

const socialList = [
  { id: 7001, img: facebook },
  { id: 7002, img: linkedin },
]

const Footer = () => {
  return (
    <section className="px-5 bg-arbit_purple">
      <div>
        <div className="text-white font-bold text-4xl pt-11">CONTACT</div>
        <ul>
          {contacts.map((item) => {
            const { id, img, text } = item
            return (
              <li key={id} className="flex flex-row items-center my-5">
                <img src={img} alt="mission" className="h-14 w-9" />
                <div className="text-2xl font-normal text-white ml-3.5">
                  {text}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <div className="text-white font-bold text-4xl pt-11">MENU</div>
        <ul className="grid grid-cols-2">
          {menuList.map((item) => {
            const { id, title } = item
            return (
              <li
                key={id}
                className="text-white text-2xl my-5 text-center underline"
              >
                <a href="#"> {title}</a>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <div className="text-white font-bold text-4xl pt-11">NEWSLETTER</div>
        <div className="w-96 h-16 bg-white text-center align-middle font-bold my-5">
          CONTAINER HERE
        </div>
      </div>

      <div>
        <ul className="flex">
          {socialList.map((item) => {
            const { id, img } = item
            return (
              <li key={id} className="">
                <img src={img} alt="social" className="h-20 w-20" />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Footer
