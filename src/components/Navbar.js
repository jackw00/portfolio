
export default function Navbar() {
  return (
    <div className="bg-gray-800 flex flex-wrap p-5 flex-row font-mono">
      <div className="">
        <a href="#about" className="text-m sm:text-xl hover:text-gray-300 font-medium text-white">
          Jack Wardlaw
        </a>
        <a href="#projects" className="mx-5 text-sm sm:text-xl hover:text-gray-200">
          Projects
        </a>
        <a href="#skills" className="mr-5 text-sm sm:text-xl hover:text-gray-200">
          Skills
        </a>
        <a
          href="#contact"
          className="text-sm sm:text-xl hover:text-gray-200">
          Contact Me
        </a>
      </div>
      
    </div>
  );
}
