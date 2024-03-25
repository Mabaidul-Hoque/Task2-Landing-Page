import React from "react";
interface FooterProps {
  scrollToSection: (value: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-800 text-white p-6 py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-20">
          <div>
            <h3
              onClick={() => scrollToSection("overview")}
              className="text-lg font-bold mb-4 cursor-pointer"
            >
              Overview
            </h3>
          </div>
          <div>
            <h3
              onClick={() => scrollToSection("features")}
              className="text-lg font-bold mb-4 cursor-pointer"
            >
              Features
            </h3>
          </div>
          <div>
            <h3
              onClick={() => scrollToSection("technology")}
              className="text-lg font-bold mb-4 cursor-pointer"
            >
              Technology
            </h3>
          </div>
          <div>
            <h3
              onClick={() => scrollToSection("design")}
              className="text-lg font-bold mb-4 cursor-pointer"
            >
              Design
            </h3>
          </div>

          <div>
            <h3
              onClick={() => scrollToSection("price")}
              className="text-lg font-bold mb-4 cursor-pointer"
            >
              Pricing
            </h3>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Crafto is proudly powered by ThemeZaa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
