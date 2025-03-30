interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  content: {
    id: string;
    title: string;
    services: Service[];
  };
}

export default function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section id={content.id} className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
          <span className="text-[#f89422]">{content.title}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => (
            <div key={index} className="bg-[#212529] p-8 rounded-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-opacity-20 bg-[#f89422] rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-[#f89422] text-2xl`}></i>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
