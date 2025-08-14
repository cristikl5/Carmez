import { Clock, Headset, MapPin, Send } from "lucide-react";

type Info = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const links: Info[] = [
  {
    title: "Adresa",
    description: "R. Moldova, or. Chisinau, str. Calea Basarabiei 36/4",
    icon: <MapPin size={16} className="text-primary" />,
  },
  {
    title: "Tel",
    description: "0 (22) 78 82 51",
    icon: <Headset size={16} className="text-primary" />,
  },
  {
    title: "Email",
    description: "reception@farmmeatgroup.md",
    icon: <Send size={16} className="text-primary" />,
  },
  {
    title: "Ore de lucru",
    description: "08:00 - 18:00, Luni - Sâmb",
    icon: <Clock size={16} className="text-primary" />,
  },
];

const Footer = () => {
  return (
    <footer className="py-11 bg-white fluid-container">
      <div className="flex items-center gap-32">
        <div className="space-y-4">
          <img
            src="/images/logo-foreground.svg"
            alt="Logo"
            className="object-contain"
          />
          <p className="font-ibarra text-base font-normal text-primary max-w-[200px]">
            Awesome grocery store website template
          </p>
          <div className="space-y-2.5">
            {links.map(link => (
              <div key={link.title} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {link.icon}
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base">{link.title}:</span>
                    <span className="font-normal text-base">
                      {link.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
