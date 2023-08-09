import linkedInLogo from '../img/linkedin.png';
import githubLogo from '../img/github.png';
import aboutGraphic from '../img/aboutgraphic.png';

export default function About() {
    return (
        <section id="about">
            <div className="flex p-20 mb-20 flex-col items-center">
                <div className="text-center flex flex-row items-center">
                    <div className="w-auto justify-center mb-5">
                        <h1 className="font-mono sm:text-4xl text-3xl mb-5 text-white"> 
                            Let me introduce myself.
                        </h1>
                        <p className="mb-8">
                            My name is Jack. I am a student at the University of Florida studying computer science. 
                            Computer science gives me the tools to solve problems and create whatever I can image.
                            Checkout some of the new skills I've been learning and projects I've been working on below.
                        </p>
                    </div>
                    <img className="w-0 md:w-1/2 lg:w-1/2 xl:w-1/2 invisible md:visible" src={aboutGraphic}></img>
                </div>
                <div className="flex flex-row items-center border rounded-xl p-1 phover:scale-105">
                    <a className="object-fill h-8 w-8 m-2" target="_blank" href="https://linkedin.com/in/jackwardlaw"><img src={linkedInLogo} alt="LinkedIn"/></a>
                    <a
                        href="#contact"
                        className="font-mono text-white bg-gray-800 py-2 px-4 m-2 hover:bg-gray-700 rounded text-lg">
                        Contact
                    </a>
                    <a
                        href="#projects"
                        className="font-mono text-white bg-gray-800 py-2 px-4 m-2 hover:bg-gray-700 rounded text-lg">
                        Projects
                    </a>
                    <a className="object-fill h-8 w-8 m-2" target="_blank" href="https://github.com/jackw00"><img src={githubLogo} className="rounded" alt="GitHub"/></a>
                </div>
            </div>
        </section>
      );
}
