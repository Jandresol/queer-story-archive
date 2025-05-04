
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-queer-softPurple py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 gradient-text">Queer Archives Project</h3>
            <p className="text-queer-purple text-sm">
              Documenting and celebrating the lived experiences of Queer People of Color at Harvard
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/" className="text-queer-purpleDark hover:text-queer-purple transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-queer-purpleDark hover:text-queer-purple transition-colors">
              About
            </Link>
            <Link to="/stories" className="text-queer-purpleDark hover:text-queer-purple transition-colors">
              Stories
            </Link>
          </div>
        </div>
        
        <div className="mt-8 border-t border-queer-purple/20 pt-6 text-center text-sm text-queer-gray">
          <p>© {currentYear} Queer Archives Project. All rights reserved.</p>
          <p className="mt-1">A project celebrating the intersectional experiences of Queer POC at Harvard.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
