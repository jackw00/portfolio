import { skills } from "../../data";

export default function Skills() {
  return (
    <div id="skills">
      <div>
        <div>
          <h1>Skills &amp; Technologies</h1>
          <p>
            These are some of the skills and technologies I've learned so far
            from my coursework and personal projects. I'm excited to keep
            learning more!
          </p>
        </div>
        <div>
          {skills.map((skill) => (
            <div key={skill}>
              <div>
                <span>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
