import VDlogo from "../assets/images/VDlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" h-16 flex items-center justify-between px-6 mt-5">
      <div className="flex items-center ml-8">
        <img src={VDlogo} alt="VDlogo" className="mx-2 w-10 " />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
      
    </nav>
  );
};

export default Navbar;
