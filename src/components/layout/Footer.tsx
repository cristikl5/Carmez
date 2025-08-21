import { Clock, Headset, MapPin, PhoneCall, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const Footer = () => {
  const { t } = useTranslation();

  const infoItems: InfoItem[] = [
    {
      title: t("footer.address"),
      description: t("footer.infoItems.address"),
      icon: <MapPin size={16} className="text-primary" />,
    },
    {
      title: t("footer.phone"),
      description: t("footer.infoItems.phone"),
      icon: <Headset size={16} className="text-primary" />,
    },
    {
      title: t("footer.email"),
      description: t("footer.infoItems.email"),
      icon: <Send size={16} className="text-primary" />,
    },
    {
      title: t("footer.workingHours"),
      description: t("footer.infoItems.workingHours"),
      icon: <Clock size={16} className="text-primary" />,
    },
  ];

  const links: Link[] = [
    {
      title: "company",
      urls: [
        {
          title: t("footer.aboutUs"),
          href: "/",
        },
        {
          title: t("footer.affiliate"),
          href: "/",
        },
        {
          title: t("footer.career"),
          href: "/",
        },
        {
          title: t("footer.contactUs"),
          href: "/",
        },
      ],
    },
    {
      title: "categories",
      urls: [
        {
          title: t("footer.milksDairies"),
          href: "/",
        },
        {
          title: t("footer.clothingBeauty"),
          href: "/",
        },
        {
          title: t("footer.petToy"),
          href: "/",
        },
        {
          title: t("footer.bakingMaterial"),
          href: "/",
        },
        {
          title: t("footer.freshFruit"),
          href: "/",
        },
        {
          title: t("footer.winesDrinks"),
          href: "/",
        },
      ],
    },
    {
      title: "information",
      urls: [
        {
          title: t("footer.contactUs"),
          href: "/",
        },
        {
          title: t("footer.aboutUs"),
          href: "/",
        },
        {
          title: t("footer.cookiePolicy"),
          href: "/",
        },
        {
          title: t("footer.termsConditions"),
          href: "/",
        },
        {
          title: t("footer.returnsExchanges"),
          href: "/",
        },
        {
          title: t("footer.shippingDelivery"),
          href: "/",
        },
        {
          title: t("footer.privacyPolicy"),
          href: "/",
        },
      ],
    },
  ];

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
              {t("footer.description")}
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
                    {t(`footer.${link.title}`)}
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
              {t("footer.copyright")}
            </span>

            {/* Phone Info - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <PhoneCall size={30} className="text-gray-500" />
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl">
                  {t("footer.phoneNumbers.primary")}
                </span>
                <span className="text-gray-500 font-normal text-sm">
                  {t("footer.phoneNumbers.secondary")}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6">
              <span className="font-bold text-gray-500 hover:text-primary text-sm md:text-base">
                {t("footer.followUs")}
              </span>
              <a
                href="https://www.facebook.com/carmez.md"
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
                href="https://www.instagram.com/carmezmd/"
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
                {t("footer.phoneNumbers.primary")}
              </span>
              <span className="text-gray-500 font-normal text-sm">
                {t("footer.phoneNumbers.secondary")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
