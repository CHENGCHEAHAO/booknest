import about from '../assets/about.png'

const About = () => {
  return (
    <section className="flex flex-col justify-center bg-arbit_bg_brown">
      <h2 className="mt-11 font-bold text-6xl text-center">About Us</h2>
      <div className="text-base font-bold py-8 px-12">
        BookNest, your gateway to a world of literary exploration and community
        connection! At BookNest, we believe in the magic of stories and the
        transformative power of reading.
      </div>
      <button className="w-48 h-16 bg-arbit_purple text-center rounded-3xl text-white font-bold m-auto">
        Our Team
      </button>
      <img src={about} alt="about" className="bottom-0 w-full" />
    </section>
  )
}

export default About
