import eBook from '../assets/eBook.png'
// import value from '../assets/value.png'
const Hero = () => {
  return (
    <section className="bg-arbit_bg_yellow">
      <div className="h-80 flex flex-col ml-10 ">
        <img
          src={eBook}
          alt="eBook"
          className="absolute scale-90 -translate-y-8 translate-x-28"
        />
        <div className="text-5xl font-bold text-black mb-7 mt-12">BOOKNEST</div>
        <div className="text-5xl font-bold text-black mb-7">BOOKNEST</div>
        <div className="text-5xl font-bold text-black mb-7">BOOKNEST</div>
      </div>

      <div>
        <div className="h-32 flex mx-10 mb-10 text-black">
          <img src={eBook} alt="company logo" className="h-24 w-24" />
          <div className="text-lg font-bold ml-6">
            "Read. Return. Discuss. Unleash the Power of Shared Stories with
            BookNest!"
          </div>
        </div>
      </div>

      <div className="text-lg font-bold mx-10 pb-24">
        Welcome to BookNest, where the world of books meets the convenience of
        online rental services! At BookNest, we are passionate about fostering a
        love for reading and making it accessible to everyone. Imagine having a
        vast library at your fingertips, with the flexibility to explore a
        diverse range of books without the commitment of permanent ownership.
      </div>
    </section>
  )
}

export default Hero
