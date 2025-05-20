import Header from "@/components/nav/app-header";
import Footer from "@/components/footer/Footer";

const Layout = ({ children }) => {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-7xl pt-40 mx-auto">
          {children}
        </main>
        <Footer />
      </div>
  );
};

export default Layout;
