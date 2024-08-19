import mypicture from '../../Images/mypicture.jpg';
import gtfootwear from '../../Images/gtfootwear.png';
import cafejuan2 from '../../Images/cafejuan2.png';
import { TypeAnimation } from 'react-type-animation';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaWordpress,FaFacebook,FaEnvelope,FaLinkedin } from 'react-icons/fa';

const contacts = [
  {icon: <FaFacebook/>, link:'https://www.facebook.com/nicolgavz/'},
  {icon: <FaLinkedin/>, link:'https://www.linkedin.com/in/nicolas-gaviola-jr-840a50292/'},
  {icon: <FaEnvelope/>, link:'mailto:nicolgaviola@gmail.com'}
]

const skills = [
  { icon: <FaHtml5 />, title: 'HTML' },
  { icon: <FaCss3Alt />, title: 'CSS' },
  { icon: <FaJsSquare />, title: 'JavaScript' },
  { icon: <FaReact />, title: 'ReactJS' },
  { icon: <FaGithub />, title: 'Github' },
  { icon: <FaWordpress />, title: 'Wordpress' }
];
const project=[
  {title:'GT FOOTWEAR',
    description:"An e-commerce platform for purchasing shoes online.",
    image: gtfootwear,
    technologies:["ReactJS", "TailwindCSS","Django"],
    /*link:*/
  },
  {title:'CAFE JUAN INVENTORY MANAGEMENT SYSTEM',
    description:"An inventory management system for a Cafe.",
    image: cafejuan2,
    technologies:["ReactJS", "MaterialUI","Django"],
    /*link:*/
  },
  {title:'GT FOOTWEAR',
    description:"An e-commerce platform for purchasing shoes online.",
    image: gtfootwear,
    technologies:["ReactJS", "TailwindCSS"],
    /*link:*/
  },
]


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
            YOUR ASPIRING {' '}
              <TypeAnimation 
                sequence={[
                  'WEB DEVELOPER',
                  3000, 
                  '', 
                  
                ]}
                speed={70} 
                wrapper="span"
                repeat={Infinity}
                className='text-red-800' 
              />
            </p>

            {/* PROFILE Skills Icons */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              {contacts.map((contact, index) => (
                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer">
                  <div className="text-3xl text-gray-400 hover:scale-150 duration-200">
                    {contact.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <a href="mailto:nicolgaviola@gmail.com">
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


        <div className="mt-8 text-center max-w-xl">
          <p className="text-gray-400 leading-relaxed">
            Hi! I&apos;m Nicolas, a fresh graduate from Holy Angel University with a degree in Information Technology, specializing in <strong>Web Development.</strong>
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            I’m skilled in front-end development and have a keen interest in crafting engaging and responsive websites. My expertise includes <strong>HTML, CSS, JavaScript, ReactJS and TailwindCSS</strong>. I love designing responsive website and improving user experiences.
          </p>  
        </div>
      </div>

    
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

    
      <div id="projects" className="bg-black text-white pb-12">
        <h1 className="text-3xl font-bold text-center py-2 border-t-2 border-gray-700">
          PROJECTS
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center p-8 ">
          {project.map((project, index) => (
            <div key={index} className="bg-gray-900 p-2 rounded-lg shadow-lg max-w-xl w-full shadow-gray-500 hover:scale-105 duration-200">
              <img className=" h-92 w-92 rounded-md" src={project.image} alt={project.title} />
              <h2 className="text-2xl font-bold mt-4 barlow-semi-bold">{project.title}</h2>
              <p className="text-gray-400 mt-2 barlow-semi-regular ">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 barlow-semi-bold">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div id="contact" className="min-h-screen bg-black text-white ">
        <h1 className="text-3xl font-bold text-center py-8 border-t-2 border-gray-700">CONTACT ME</h1> 

        <div className='flex flex-col items-center justify-center' >
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl w-full">
          <form action="https://formspree.io/f/mpwajdkv" method="POST" className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 bg-gray-900 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 bg-gray-900 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 bg-gray-900 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300 font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div> 
    </div>
  );
};

export default Body;

