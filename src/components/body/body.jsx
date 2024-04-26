const Content = () => {
  return (
    <div>
      <div id="home" className="min-h-screen bg-[url('./Images/backgroundmenu.jpg')] bg-no-repeat bg-cover flex flex-col items-center md:flex-row md:justify-center">
        <div className="text-center md:text-left md:mr-8">
          <h1 className="text-5xl font-mono text-white">Hello, I&apos;m <span className="text-red-900">Nicolas</span></h1>
          <p className="text-lg text-white">Web Developer</p>
          <div className="flex-wrap">
            <a href='./src/images/Nicolas-Gaviola-Resume.pdf' download>
              <button className="font-mono mt-4 bg-red-900 text-white w-fit px-4 py-2 rounded-md text-lg px-4 cursor-pointer capitalize text-black font-md hover:scale-125 duration-200">Download CV</button>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img className="w-96" src="./src/Images/mypic.png" alt="My Picture" />
        </div>
      </div>
      <div id="skills" className="flex flex-col bg-black text-white min-h-screen">
        <h1 className="flex justify-center text-2xl font-mono bg-red-900 w-full text-white">SKILLS</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img className="w-48 h-48 m-2" src='./src/Images/htmlogo.png' alt="HTML Logo" />
          <img className="w-48 h-48 m-2" src='./src/Images/csslogo.png' alt="CSS Logo" />
          <img className="w-48 h-48 m-2" src='./src/Images/jslogo.png' alt="JavaScript Logo" />
        </div>
      </div>
      <div id="projects" className="min-h-screen bg-black text-white">
        <h1 className="flex justify-center text-2xl font-mono bg-red-900 w-full text-white">PROJECTS</h1>
        {/* Your contact form or contact information here */}
      </div>
      <div id="contact" className="min-h-screen bg-black text-white">
        <h1 className="flex justify-center text-2xl font-mono bg-red-900 w-full text-white">CONTACT</h1>
        {/* Your contact form or contact information here */}
      </div>
      
    </div>
  );
};

export default Content;
