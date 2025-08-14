import { ChevronDown, Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const timer = setTimeout(() => setAnimateItems(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimateItems(false);
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-primary rounded-[20px] py-3.5 px-4 md:px-7">
      <div className="flex items-center justify-between">
        {/* Mobile: Logo, Menu Button, Cart */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* Logo - Mobile/Tablet only */}
          <div className="flex-shrink-0 lg:hidden">
            <a href="/">
              <img
                src="/images/logo.svg"
                alt="logo"
                className="w-16 h-8 md:w-20 md:h-10"
              />
            </a>
          </div>

          {/* Social Media Icons - Desktop only (replaces left logo) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <img
                src="/icons/facebook-foreground.svg"
                alt="facebook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <img
                src="/icons/instagram-foreground.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
          </div>

          {/* Mobile: Menu button and Cart */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-bold">RU</span>
              <span className="text-white/60 text-sm">RO</span>
            </div>
            <div className="relative">
              <a
                href="/cart"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <ShoppingCart size={18} color="white" />
                <span className="absolute -top-2 -right-2 bg-white text-primary text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1 hover:scale-110 transition-transform duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative text-white text-base font-bold hover:text-gray-200 transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-white after:transition-all after:duration-200 ${
                    isActive ? "after:w-full" : "after:w-0"
                  }`
                }
              >
                Acasă
              </NavLink>
              <NavLink
                to="/despre-noi"
                className={({ isActive }) =>
                  `relative text-white text-base font-bold hover:text-gray-200 transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-white after:transition-all after:duration-200 ${
                    isActive ? "after:w-full" : "after:w-0"
                  }`
                }
              >
                Despre Noi
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `relative text-white text-base font-bold hover:text-gray-200 transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-white after:transition-all after:duration-200 ${
                    isActive ? "after:w-full" : "after:w-0"
                  }`
                }
              >
                Noutăți
              </NavLink>
            </div>

            {/* Logo - Desktop */}
            <div className="mx-[72px]">
              <a href="/">
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  width={100}
                  height={50}
                />
              </a>
            </div>

            {/* Right nav items */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <a
                  href="/catalog"
                  className="text-white text-base font-bold hover:text-gray-200 transition-colors flex items-center gap-1"
                >
                  Catalog
                  <ChevronDown size={12} color="white" />
                </a>
              </div>
              <NavLink
                to="/retete"
                className={({ isActive }) =>
                  `relative text-white text-base font-bold hover:text-gray-200 transition-colors after:absolute after:left-0 after:-bottom-[4px] after:h-0.5 after:bg-white after:transition-all after:duration-200 ${
                    isActive ? "after:w-full" : "after:w-0"
                  }`
                }
              >
                Rețete
              </NavLink>
              <NavLink
                to="/contacte"
                className={({ isActive }) =>
                  `relative text-white text-base font-bold hover:text-gray-200 transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-white after:transition-all after:duration-200 ${
                    isActive ? "after:w-full" : "after:w-0"
                  }`
                }
              >
                Contacte
              </NavLink>
            </div>
          </div>
        </nav>
        {/* Right side - Language switcher and Cart */}
        <div className="items-center gap-4 hidden lg:flex">
          <div className="flex items-center gap-2">
            <span className="text-white text-base font-bold">RU</span>
            <span className="text-white/60 text-base">RO</span>
          </div>
          <div className="relative">
            <a
              href="/cart"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ShoppingCart size={20} color="white" />
              <span className="absolute -top-2 -right-2 bg-white text-primary text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden mt-4 pb-4 transition-all duration-300 ease-out transform ${
            animateItems
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-white text-base font-bold hover:text-gray-200 transition-all duration-500 ease-out transform ${
                  animateItems
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } delay-75 ${isActive ? "text-gray-200" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Acasă
            </NavLink>
            <NavLink
              to="/despre-noi"
              className={({ isActive }) =>
                `block text-white text-base font-bold hover:text-gray-200 transition-all duration-500 ease-out transform ${
                  animateItems
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } delay-100 ${isActive ? "text-gray-200" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Despre Noi
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `block text-white text-base font-bold hover:text-gray-200 transition-all duration-500 ease-out transform ${
                  animateItems
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } delay-150 ${isActive ? "text-gray-200" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Noutăți
            </NavLink>
            <a
              href="/catalog"
              className={`block text-white text-base font-bold hover:text-gray-200 transition-all duration-500 ease-out transform ${
                animateItems
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              } delay-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Catalog
            </a>
            <NavLink
              to="/retete"
              className={({ isActive }) =>
                `block text-white text-base font-bold hover:text-gray-200 transition-all duration-500 ease-out transform ${
                  animateItems
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } delay-300 ${isActive ? "text-gray-200" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Rețete
            </NavLink>
            <NavLink
              to="/contacte"
              className={({ isActive }) =>
                `block text-white text-base font-bold hover:text-gray-200 transition-all duration-500 ease-out transform ${
                  animateItems
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } delay-500 ${isActive ? "text-gray-200" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contacte
            </NavLink>

            {/* Social Media in Mobile Menu */}
            <div
              className={`flex items-center gap-4 pt-4 border-t border-white/20 transition-all duration-500 ease-out transform ${
                animateItems
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              } delay-700`}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <img
                  src="/icons/facebook-foreground.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <img
                  src="/icons/instagram-foreground.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
