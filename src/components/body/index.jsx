import mypicture from '../../Images/mypic.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaWordpress } from 'react-icons/fa';

const skills = [
  { icon: <FaHtml5 />, title: 'HTML' },
  { icon: <FaCss3Alt />, title: 'CSS' },
  { icon: <FaJsSquare />, title: 'JavaScript' },
  { icon: <FaReact />, title: 'ReactJS' },
  { icon: <FaGithub />, title: 'Github' },
  { icon: <FaWordpress />, title: 'Wordpress' }
];

const Body = () => {
  return (
    <div className="bg-black text-white">
      {/* Home Section */}
      <div
        id="home"
        className="min-h-screen flex flex-col items-center justify-center py-24"
      >
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Profile Image */}
          <img
            className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-gray-700 shadow-xl"
            src={mypicture}
            alt="myImage"
          />
          
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold">
              Nicolas Gaviola Jr
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mt-2">
               Web Developer
            </p>

            {/* Skills Icons */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              {skills.slice(0, 5).map((skill, index) => (
                <div key={index} className="text-3xl text-gray-400">
                  {skill.icon}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a  href="mailto:nicolgaviola@gmail.com" download>
                <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300 font-bold">
                  Hire Me
                </button>
              </a>
              <a href="./src/images/Nicolas-Gaviola-Resume.pdf" download className="ml-4">
                <button className="bg-transparent border-2 border-gray-400 text-gray-400 py-2 px-6 rounded-md hover:bg-gray-700 hover:text-white transition duration-300 font-bold">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-8 text-center max-w-xl">
          <p className="text-gray-400 leading-relaxed">
            Hi! I'm Nicolas, a fresh graduate from Holy Angel University with a degree in Information Technology, specializing in <strong>Web Development.</strong>
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            I’m skilled in front-end development and have a keen interest in crafting engaging and responsive websites. My expertise includes <strong>HTML, CSS, JavaScript, and ReactJS</strong>. I love designing intuitive interfaces and improving user experiences.
          </p>  
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-black text-white">
        <h1 className="text-3xl font-bold text-center py-2 mb-6 border-t-2 border-gray-700">
          SKILLS
        </h1>
        <div className="flex flex-wrap justify-center gap-8 p-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border-2 border-transparent hover:border-red-600 transition-colors duration-300">
              <div className="text-9xl mb-4">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen bg-black text-white">
        <h1 className="text-3xl font-bold text-center py-2 border-t-2 border-gray-700">
          PROJECTS
        </h1>
      </div>

      {/* Contact Section */}
      <div id="contact" className="min-h-screen bg-black text-white">
        <h1 className="text-3xl font-bold text-center py-2 border-t-2 border-gray-700">
          CONTACT
        </h1>
      </div>
    </div>
  );
};

export default Body;
