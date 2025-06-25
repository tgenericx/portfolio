export default function NavMenu() {
  return (
    <nav className="hidden sm:flex gap-6 text-sm">
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </nav>
  );
}
