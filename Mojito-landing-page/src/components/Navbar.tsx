import { navLink } from "../constants/constants";

const Navbar = () => {
    return (
        <div >
            <nav className="bg-black text-white">
                <div className="flex justify-evenly items-center ">
                    <a href="/home" className="flex items-center font-bold gap-2">
                        <p className="text-3xl">Velvet Pour</p>
                    </a>

                    <ul className="flex justify-center items-center gap-2">
                        {
                            navLink.map((link) => (
                                <li key={link.id}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;