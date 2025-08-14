import { useLocation } from "react-router-dom";
import { HeroSection } from "../home";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-layout">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10 p-3 fluid-container">
          <Header />
        </div>
        {isHomePage && <HeroSection />}
      </div>
      <div className="fluid-container">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
