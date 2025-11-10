export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-serif text-primary">8130026761/62/63</h1>
      <ul className="hidden md:flex gap-8 text-sm font-medium text-secondary">
        <li>
          <a href="#intro" className="hover:text-primary">
            About
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-primary">
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
