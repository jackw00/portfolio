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
                            My name is Jack. I am a student at the University of Florida studying computer engineering.  
                            Checkout some of the projects I've been working on and my skills below. I am undegraduate researcher
                            at the <a className="underline" target="_blank" href="https://smartdata.ece.ufl.edu/">SmartData Lab</a> working on a project related to signal processing and non-destructive evaluation. 
                            Outside of my coursework, I am President of <a className="underline" target="_blank" href="https://www.honors.ufl.edu/student-life/student-orgs/honors-athletics/">Honors Athletics</a> and
                            a developer on the <a className="underline" target="_blank" href="https://www.ufdreamteameng.org/">Dream Team Engineering</a> software division. 
                            
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
