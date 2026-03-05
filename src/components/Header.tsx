import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-950 text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-red-400 hover:text-red-300 transition"
                    >
                        Unspend
                    </Link>
                    <nav className="flex gap-6 text-sm">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-white transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/features"
                            className="text-gray-300 hover:text-white transition"
                        >
                            Features
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-300 hover:text-white transition"
                        >
                            About
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-gray-300 hover:text-white transition"
                        >
                            Privacy
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
