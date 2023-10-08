import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },

  {
    skill: "Javascript",
    level: "intermediate",
    color: "#EFD81D",
  },

  {
    skill: "Web design",
    level: "advanced",
    color: "#2662EA",
  },

  {
    skill: "Git and Github",
    level: "advanced",
    color: "#FF3B00",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60D8Fb",
  },

  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="rafiu.JPG" alt="Rafiu" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Son Of God</h1>
      <p>
        Full stack web developer and teacher at udemy. when not coding or
        preparing a course , i like to play board games , to cook (and eat) , or
        to just enjoy the Portuguese sun at the beach
      </p>
    </div>
  );
}

function Skilllist() {
  return (
    <div className="skill">
      {Skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😒😒"}
        {level === "intermediate" && "😊"}
        {level === "advanced" && "😍"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
