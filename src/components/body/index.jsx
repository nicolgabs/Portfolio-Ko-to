import mypicture from '../../Images/mypic.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const skills = [
  { icon: <FaHtml5 />, title: 'HTML' },
  { icon: <FaCss3Alt />, title: 'CSS' },
  { icon: <FaJsSquare />, title: 'JavaScript' },
  { icon: <FaReact />, title: 'ReactJS' },
];

const Body = () => {
  return (
    <div>
      <div id="home" className="min-h-screen bg-[url('./Images/backgroundmenu.jpg')] bg-no-repeat bg-cover flex flex-col items-center md:flex-row md:justify-center">
        <div className="text-center md:text-left md:mr-8">
          <h1 className="text-5xl font-mono text-white">
            Hello, I&apos;m <span className="text-red-900">Nicolas</span>
          </h1>
          <p className="text-lg text-white">Web Developer</p>
          <div className="flex-wrap">
            <a href="./src/images/Nicolas-Gaviola-Resume.pdf" download>
              <button className="font-mono mt-4 bg-red-900 text-white w-fit py-2 rounded-md text-lg px-4 cursor-pointer capitalize font-md hover:scale-125 duration-200">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img className="w-96" src={mypicture} alt="My Picture" />
        </div>
      </div>
      <div id="skills" className="flex flex-col bg-black text-white min-h-screen">
        <h1 className="flex justify-center text-2xl font-mono bg-red-900 w-full text-white">SKILLS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <div className="text-9xl m-1 transform hover:scale-110 transition duration-300">
                {skill.icon}
              </div>
              <p className="mt-2 text-lg font-mono text-white">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="projects" className="min-h-screen bg-black text-white">
        <h1 className="flex justify-center text-2xl font-mono bg-red-900 w-full text-white">PROJECTS</h1>
      </div>
      <div id="contact" className="min-h-screen bg-black text-white">
        <h1 className="flex justify-center text-2xl font-mono bg-red-900 w-full text-white">CONTACT</h1>
      </div>
    </div>
  );
};

export default Body;
