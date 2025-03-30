interface HeroSectionProps {
  content: {
    id: string;
    title: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    buttons: {
      primary: {
        label: string;
        href: string;
      };
      secondary: {
        label: string;
        href: string;
      };
    };
    image: {
      src: string;
      alt: string;
    };
  };
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id={content.id} className="py-16 md:py-24 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
              <span className="text-[#0d6efd]">{content.title.part1}</span>{" "}
              <span className="text-[#f89422]">{content.title.part2}</span>{" "}
              {content.title.part3}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={content.buttons.primary.href} 
                className="px-6 py-3 bg-[#f89422] text-white rounded-md hover:bg-opacity-90 transition"
              >
                {content.buttons.primary.label}
              </a>
              <a 
                href={content.buttons.secondary.href} 
                className="px-6 py-3 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-white transition"
              >
                {content.buttons.secondary.label}
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src={content.image.src} 
              alt={content.image.alt} 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
