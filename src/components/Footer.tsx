import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-950 text-white mt-auto border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-red-400 mb-4">
                            Unspend
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Take back your time. Block distracting apps on iOS
                            with privacy-first screen time management.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Links</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-white transition"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/features"
                                    className="hover:text-white transition"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-white transition"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Legal</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>
                                <Link
                                    to="/privacy"
                                    className="hover:text-white transition"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terms"
                                    className="hover:text-white transition"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:maxfritzroth@gmail.com"
                                    className="hover:text-white transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Unspend. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
