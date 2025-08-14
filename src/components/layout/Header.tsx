import { ChevronDown, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary rounded-[20px] py-3.5 px-7 ">
      <div className="flex items-center justify-between">
        {/* Left side - Social Media Icons */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <img
              src="/icons/facebook.svg"
              alt="facebook"
              width={20}
              height={20}
            />
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <img
              src="/icons/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </a>
        </div>

        <nav className="flex items-center ">
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
                News
              </NavLink>
            </div>

            {/* Logo */}
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
        <div className="flex items-center gap-4">
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
    </header>
  );
};

export default Header;
