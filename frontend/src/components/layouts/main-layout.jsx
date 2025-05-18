const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-col-1">
                <main className="flex-grow max-w-7xl px-10 z-0 mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;