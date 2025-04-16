import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Sakshiproject/img11.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span className="text-xl tracking-tight">ENVOSTITCH</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          <button onClick={() => scrollToSection("benefits")} className="cursor-pointer">Benefits</button>
          <button onClick={() => scrollToSection("products")} className="cursor-pointer">Products</button>
          <button onClick={() => scrollToSection("budget")} className="cursor-pointer">Budget</button>
          <button onClick={() => scrollToSection("target")} className="cursor-pointer">Target</button>
          <button onClick={() => scrollToSection("marketing")} className="cursor-pointer">MarketingStrategies</button>
          <button onClick={() => scrollToSection("successstory")} className="cursor-pointer">SuccessStory</button>
          {/* <button onClick={() => scrollToSection("team")} className="cursor-pointer">Team</button> */}

        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-16 right-0 w-full bg-white shadow-lg p-4 flex flex-col items-center">



            <button onClick={() => scrollToSection("benefits")} className="py-2">Benefits</button>
            <button onClick={() => scrollToSection("products")} className="py-2">Products</button>
            <button onClick={() => scrollToSection("budget")} className="py-2">Budget</button>
            <button onClick={() => scrollToSection("target")} className="py-2">Target</button>
            <button onClick={() => scrollToSection("marketing")} className="py-2">MarketingStrategies</button>
            <button onClick={() => scrollToSection("successstory")} className="py-2">SuccessStory</button>
            <button onClick={() => scrollToSection("team")} className="py-2">Team</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
