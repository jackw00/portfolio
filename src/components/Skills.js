import { skills } from "../data";

export default function Skills() {
    return (
        <div id="skills" className="mb-20 font-mono">
            <div className="flex flex-col justify-center items-center px-5 py-10 mx-auto ">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        These are some of the skills and technologies I've learned so far from my coursework and personal projects. I'm excited to keep learning more!
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
                {skills.map((skill) => (
                    <div key={skill} className="p-2 sm:w-1/5 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full">
                            <span className="title-font font-medium text-white">
                                {skill}
                            </span>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}