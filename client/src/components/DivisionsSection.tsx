interface Division {
  icon: string;
  name: string;
  firstName: string;
  lastName: string;
}

interface DivisionsSectionProps {
  content: {
    id: string;
    title: string;
    divisions: Division[];
  };
}

export default function DivisionsSection({ content }: DivisionsSectionProps) {
  return (
    <section id={content.id} className="py-16 bg-[#212529]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
          <span className="text-[#f89422]">{content.title}</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {content.divisions.map((division, index) => (
            <div 
              key={index} 
              className="bg-[#121212] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${division.icon} text-[#f89422] text-2xl`}></i>
              </div>
              <h3 className="mb-2">
                <span className="text-[#0d6efd]">{division.firstName}</span>{" "}
                <span className="text-[#f89422]">{division.lastName}</span>
              </h3>
              <p className="text-[#f89422] font-medium">{division.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
