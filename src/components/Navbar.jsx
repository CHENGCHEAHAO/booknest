import burger from '../assets/burger.png'

const Navbar = () => {
  return (
    <section>
      <div className="flex bg-arbit_purple h-14 items-center">
        <a href="#">
          <img src={burger} alt="burger" className="h-6 w-6 mx-3.5" />
        </a>
        <a href="#">
          <h1 className="text-black text-xl font-bold">BOOKNEST</h1>
        </a>
      </div>
    </section>
  )
}

export default Navbar
