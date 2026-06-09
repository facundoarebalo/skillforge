import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="bg-zinc-900 border-b border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-white text-xl font-bold"
                    >
                        ⚒️ SkillForge
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/"
                            className="text-zinc-300 hover:text-white transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/learn"
                            className="text-zinc-300 hover:text-white transition-colors"
                        >
                            Learn
                        </Link>

                        <Link
                            to="/profile"
                            className="text-zinc-300 hover:text-white transition-colors"
                        >
                            Profile
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar