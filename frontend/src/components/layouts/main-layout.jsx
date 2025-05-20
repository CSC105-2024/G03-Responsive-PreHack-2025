import Header from "@/components/nav/app-header";
import Footer from "@/components/footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Header />
      <main className="max-w-7xl px-10 z-0 mx-auto">{children}</main>
    </div>
  );
};

export default Layout;