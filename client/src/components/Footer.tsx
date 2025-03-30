import beaverLogo from "@assets/beaver.png";

interface FooterProps {
  content: {
    company: {
      name: {
        firstName: string;
        lastName: string;
        group: string;
      };
      description: string;
      socialMedia: {
        facebook: string;
        twitter: string;
        linkedin: string;
      };
    };
    quickLinks: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    };
    contact: {
      title: string;
      address: string[];
      phone: string;
      email: string;
    };
    copyright: string;
  };
}

export default function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#212529] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src={beaverLogo} 
                alt="Beaver Logo" 
                className="h-12 w-12 mr-3"
              />
              <h3 className="font-['Montserrat'] font-bold text-xl">
                <span className="text-[#0d6efd]">{content.company.name.firstName}</span>{" "}
                <span className="text-[#f89422]">{content.company.name.lastName}</span>{" "}
                <span className="text-[#f89422]">{content.company.name.group}</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              {content.company.description}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={content.company.socialMedia.facebook} className="text-gray-400 hover:text-[#f89422] transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={content.company.socialMedia.twitter} className="text-gray-400 hover:text-[#f89422] transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={content.company.socialMedia.linkedin} className="text-gray-400 hover:text-[#f89422] transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-1 text-center">
            <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
              {content.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {content.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-[#f89422] transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div id="contact" className="md:col-span-1 text-center md:text-right">
            <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
              {content.contact.title}
            </h3>
            <address className="not-italic text-gray-300">
              {content.contact.address.map((line, index) => (
                <p key={index} className="mb-2">{line}</p>
              ))}
              <p className="mb-2">
                <i className="fas fa-phone-alt mr-2 text-[#f89422]"></i>
                {content.contact.phone}
              </p>
              <p>
                <i className="fas fa-envelope mr-2 text-[#f89422]"></i>
                {content.contact.email}
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
