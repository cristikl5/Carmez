import { useLocation } from "react-router-dom";
import AboutUsHero from "../about-us/AboutUsHero";
import { HeroSection } from "../home";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutUsPage = location.pathname === "/despre-noi";

  return (
    <div className="min-h-screen flex flex-col no-overflow bg-layout">
      {/* Header - Always visible */}
      <div className="relative z-10">
        <div className="absolute top-0 left-0 right-0 z-10 p-2 md:p-3 fluid-container">
          <Header />
        </div>
      </div>

      {/* Hero Section - Only on homepage */}
      {isHomePage && (
        <div className="relative no-overflow">
          <HeroSection />
        </div>
      )}

      {/* About Us Hero Section - Only on about us page */}
      {isAboutUsPage && (
        <div className="relative no-overflow">
          <AboutUsHero />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow no-overflow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
