import Navbar from "@/components/nav/nav-topbar.jsx";
import Footer from "@/components/footer/Footer";

const Layout = ({ children }) => {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto md:py-32 py-16">
          {children}
        </main>
        {/*<Footer />*/}
      </div>
  );
};

export default Layout;
