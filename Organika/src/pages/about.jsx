import { useState } from 'react';
import './about.css';

function About() {
  const [count, setCount] = useState(0);
  const [hobbies, setHobbies] = useState(['Fishing', 'Motorcycle travel', 'Watch TV']);
  const [projects, setProjects] = useState(['Pet Salon', 'Task Manager', 'Online Store']);

  function handleButton() {
    console.log('Button Clicked!');
    setCount(count + 1);
  }

  return (
    <div className="about">
      <h1>Contact Us</h1>
      <label>Clicked: {count}</label> <br />
      <button onClick={handleButton}>Test</button>
      <hr />
      {hobbies.map((hb) => (
        <button className="btn btn-sm btn-primary mx-3">{hb}</button>
      ))}
      <hr />
      <h2>My coding projects</h2>
      {projects.map((pr) => (
        <h3>{pr}</h3>
      ))}
      <img src="/images/wrap1.jpg" alt=""></img>
    </div>
  );
}

export default About;

/**
 * create an state variable for project, and list 3 of your coding project
 * render the projects each of them into a h3
 */
