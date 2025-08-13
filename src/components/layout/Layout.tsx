import { HeroSection } from "../home";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <HeroSection />
        <div className="absolute top-0 left-0 right-0 z-10 p-3 fluid-container">
          <Header />
        </div>
      </div>
      <div className="fluid-container">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
