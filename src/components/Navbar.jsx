import VDlogo from "../assets/images/VDLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  // Scroll to the top when the logo is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="h-16 flex items-center justify-between px-6 fixed top-0 left-0 w-full bg-transparent z-50 shadow-md backdrop-blur-md">
      <div className="flex items-center ml-8">
        {/* Add onClick to scroll to top */}
        <img 
          src={VDlogo} 
          alt="VDlogo" 
          className="mx-2 w-10 cursor-pointer" 
          onClick={scrollToTop} 
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/vedant-dubey-095836204" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vedantdubey22" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/vedthesteel/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
