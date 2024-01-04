import '../styles/Team.css'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.jpg'
import CYC from '../assets/CYC.png'
import GYX from '../assets/GYX.jpg'
import CJY from '../assets/CJY.jpg'
import CCH from '../assets/CCH.jpg'

const Member = [
  // {
  //   id: 5001,
  //   img: CYC,
  //   name: 'Choong Yew Chung',
  //   position: 'CEO',
  //   desc: 'Description of the member’s role in this company just want to make it longer so it fit',
  // },
  // {
  //   id: 5001,
  //   img: GYX,
  //   name: 'Go Yao Xiang',
  //   position: 'CFO',
  //   desc: 'Description of the member’s role in this company just want to make it longer so it fit',
  // },
  // {
  //   id: 5001,
  //   img: CJY,
  //   name: 'Choong Jun Yang',
  //   position: 'CTO',
  //   desc: 'Description of the member’s role in this company just want to make it longer so it fit',
  // },
  {
    id: 5001,
    img: CCH,
    name: 'Cheng Chea Hao',
    position: 'CMO',
    desc: 'Description of the member’s role in this company just want to make it longer so it fit',
  },
]

const Team = () => {
  return (
    <section className="team">
      <div className="title">Meet Our Team</div>
      <div className="card">
        <ul>
          {Member.map((item) => {
            const { id, img, name, position, desc } = item
            return (
              <li key={id} className="">
                <div className="card-img">
                  <img src={img} alt="member" />
                </div>
                <div className="card-content">
                  <div className="card-name">{name}</div>
                  <div className="card-position">{position}</div>
                  <div className="card-desc">{desc}</div>
                  <div className="card-social">
                    <a href="#">
                      <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Team
