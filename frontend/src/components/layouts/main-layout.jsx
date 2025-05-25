import Navbar from "@/components/nav/nav-topbar.jsx";
import Footer from "@/components/footer/Footer";
import { useLocation } from "react-router";

const Layout = ({ children }) => {
    const location = useLocation().pathname;
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main 
            className="flex-grow max-w-7xl mx-auto md:pt-26 md:pb-16 pt-26">
          {children}
        </main>
        {/*<Footer />*/}
      </div>
    );
};

export default Layout;
