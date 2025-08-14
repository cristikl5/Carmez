import { Clock, Headset, MapPin, PhoneCall, Send } from "lucide-react";

type InfoItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Link = {
  title: string;
  urls: {
    title: string;
    href: string;
  }[];
};

const infoItems: InfoItem[] = [
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

const links: Link[] = [
  {
    title: "Company",
    urls: [
      {
        title: "About us",
        href: "/",
      },
      {
        title: "Affiliate",
        href: "/",
      },
      {
        title: "Career",
        href: "/",
      },
      {
        title: "Contact us",
        href: "/",
      },
    ],
  },
  {
    title: "Categories",
    urls: [
      {
        title: "Milks and Dairies",
        href: "/",
      },
      {
        title: "Clothing & beauty",
        href: "/",
      },
      {
        title: "Pet Toy",
        href: "/",
      },
      {
        title: "Baking material",
        href: "/",
      },
      {
        title: "Fresh Fruit",
        href: "/",
      },
      {
        title: "Wines & Drinks",
        href: "/",
      },
    ],
  },
  {
    title: "Information",
    urls: [
      {
        title: "Contact Us",
        href: "/",
      },
      {
        title: "About Us",
        href: "/",
      },
      {
        title: "Cookie Policy",
        href: "/",
      },
      {
        title: "Terms & Conditions",
        href: "/",
      },
      {
        title: "Returns & Exchanges",
        href: "/",
      },
      {
        title: "Shipping & Delivery",
        href: "/",
      },
      {
        title: "Privacy Policy",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-primary">
      <div className="py-8 md:py-11 fluid-container">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-32">
          {/* Company Info Section */}
          <div className="space-y-4 lg:flex-shrink-0 lg:max-w-sm">
            <img
              src="/images/logo-foreground.svg"
              alt="Logo"
              className="object-contain h-12 md:h-auto"
            />
            <p className="font-ibarra text-sm md:text-base font-normal text-primary max-w-[280px] md:max-w-[200px]">
              Awesome grocery store website template
            </p>
            <div className="space-y-2.5">
              {infoItems.map(link => (
                <div key={link.title} className="flex items-start gap-2">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0">{link.icon}</div>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="font-bold text-sm md:text-base flex-shrink-0">
                        {link.title}:
                      </span>
                      <span className="font-normal text-sm md:text-base break-words">
                        {link.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {links.map(link => (
                <div key={link.title} className="space-y-4 lg:space-y-5">
                  <h3 className="font-bold text-base md:text-lg">
                    {link.title}
                  </h3>
                  <ul className="space-y-2.5 lg:space-y-3">
                    {link.urls.map(url => (
                      <li
                        key={url.title}
                        className="text-gray-500 text-sm md:text-base"
                      >
                        <a
                          href={url.href}
                          className="hover:text-primary transition-colors duration-200"
                        >
                          {url.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-4 md:py-7">
        <div className="fluid-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
            {/* Copyright */}
            <span className="text-gray-500 font-normal text-sm md:text-base text-center md:text-left">
              Copyright © 2025 Carmez Moldova.
            </span>

            {/* Phone Info - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <PhoneCall size={30} className="text-gray-500" />
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl">
                  0 227 88 251
                </span>
                <span className="text-gray-500 font-normal text-sm">
                  0 610 61 666
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6">
              <span className="font-bold text-gray-500 hover:text-primary text-sm md:text-base">
                Urmărește-ne
              </span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="object-contain w-6 h-6"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="object-contain w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Phone Info - Mobile */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-4 pt-4 border-t border-gray-100">
            <PhoneCall size={24} className="text-gray-500" />
            <div className="flex flex-col">
              <span className="text-primary font-bold text-lg">
                0 227 88 251
              </span>
              <span className="text-gray-500 font-normal text-sm">
                0 610 61 666
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
