import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

/** A new page starts at its top; a link to a section goes to the section. */
const useScrollOnNavigate = () => {
    // `key` changes with every navigation, so following a link to the
    // section that is already in the address scrolls to it again.
    const { pathname, hash, key } = useLocation();
    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useScrollOnNavigate();
    return (
        <div className="flex min-h-screen flex-col">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-3"
            >
                Skip to content
            </a>
            <Header />
            <main id="main" className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
