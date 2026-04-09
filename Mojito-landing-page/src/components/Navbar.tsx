import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { navLink } from "../constants/constants";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav',
            {
                backgroundColor: 'transparent',
            },
            {
                backgroundColor: '#000000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        )
    })


    return (
        <div >
            <nav className="bg-black text-white py-2">
                <div className="flex justify-between items-center w-2/3 mx-auto p-2 border border-white rounded-md">
                    <a href="/home" className="flex items-center font-bold gap-2">
                        <p className="text-3xl">Velvet Pour</p>
                    </a>

                    <ul className="flex justify-center items-center gap-4">
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