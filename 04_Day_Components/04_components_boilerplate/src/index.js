// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";
import htmlImage from "./images/html_logo.png";
import cssImage from "./images/css_logo.png";
import jsImage from "./images/js_logo.png";
import reactImage from "./images/react_logo.png";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const bgColor = hexaColor();
  const styles = {
    height: "100px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    fontFamily: "Montserrat",
    margin: "2px auto",
    borderRadius: "5px",
    width: "75%",
    border: "2px solid black",
    "background-color": bgColor,
  };
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  );
};

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

// User Card Component
const userCardList = {
  display: "flex",
  "flex-wrap": "wrap",
  gap: "8px",
};

const UserCard = () => (
  <div className="user-card">
    <img src={asabenehImage} alt="asabeneh image" />
    <h2>Asabeneh Yetayeh</h2>
    <p>Senior Developer, Finland</p>
    <h2>Skills</h2>
    <ul style={userCardList}>
      <TechList />
    </ul>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Flask",
    "Django",
    "NumPy",
    "Pandas",
    "Data Analysis",
    "MYSQL",
    "GraphQL",
    "D3.js",
    "Gatsby",
    "Docker",
    "Heroku",
    "Git",
  ];
  const techsFormatted = techs.map((tech) => (
    <li
      key={tech}
      style={{
        color: "white",
        backgroundColor: "#add8e6",
        padding: "5px",
        borderRadius: "12%",
      }}
    >
      {tech}
    </li>
  ));
  return techsFormatted;
};

// Button Component

const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0)",
  border: "none",
  borderRadius: 5,
};

const Button = () => (
  <button style={buttonStyles} type="submit">
    {" "}
    action{" "}
  </button>
);

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
      <InputField />
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    <Header />
    <Background />
    <Main />
    {/* <Footer /> */}
  </div>
);

// Input Component

const wrapperStyles = {
  background: "#add8e6",
  "justify-content": "center",
  "align-items": "center",
  height: "200px",
  display: "flex",
  "flex-direction": "column",
  padding: "10px 0px",
};

const InputField = () => (
  <div style={wrapperStyles}>
    <h2>Subscribe</h2>
    <p>Sign up with your email address to receive news and updates.</p>
    <form>
      <input type="text" placeholder="First name"></input>
      <input type="text" placeholder="Last name"></input>
      <input type="email" placeholder="Email"></input>
    </form>
    <Button />
  </div>
);

const titleBg = {
  "font-weight": "bold",
  "text-align": "center",
  "padding-top": "40px",
};

const wrapperBg = {
  display: "flex",
  "flex-direction": "row",
  gap: "120px",
  "justify-content": "center",
  "margin-top": "40px",
};

const Background = () => (
  <>
    <p style={titleBg}>Front End Technologies</p>
    <div style={wrapperBg}>
      <img src={htmlImage} alt="Front End Technologies" height="150px"></img>
      <img src={cssImage} alt="Front End Technologies" height="150px"></img>
      <img src={jsImage} alt="Front End Technologies" height="150px"></img>
      <img src={reactImage} alt="Front End Technologies" height="150px"></img>
    </div>
  </>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
