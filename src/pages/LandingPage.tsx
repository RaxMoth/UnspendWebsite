import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-4">
            <div className="text-center max-w-2xl">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 mb-8">
                    <svg
                        className="w-10 h-10 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                    </svg>
                </div>

                <h1 className="text-5xl font-bold text-white mb-4">Unspend</h1>
                <p className="text-xl text-gray-400 mb-2">
                    Take back your time.
                </p>
                <p className="text-gray-500 mb-10 leading-relaxed">
                    Block distracting apps on iOS with powerful profiles,
                    scheduled blocks, usage limits, and task-based unlocking.
                    Built with privacy at its core — all data stays on your
                    device.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => navigate("/features")}
                        className="rounded-xl bg-red-500 px-8 py-3 font-semibold text-white hover:bg-red-600 transition"
                    >
                        See Features
                    </button>
                    <button
                        onClick={() => navigate("/about")}
                        className="rounded-xl border border-gray-700 px-8 py-3 font-semibold text-gray-300 hover:bg-gray-800 transition"
                    >
                        Learn More
                    </button>
                </div>

                {/* App Store badge placeholder */}
                <p className="text-gray-600 text-sm mt-12">
                    Coming soon to the App Store
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
