import Link from "next/link";

// Styles
import NavbarStyles from "./NavbarStyles";

export default function Navbar() {

    return (
        <NavbarStyles>
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <h2>Anže Fajfar</h2>
                    </Link>
                </div>
                <ul className="menu">
                    <li>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills">
                            <a>Skills</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/music">
                            <a>Music</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </NavbarStyles>
    )
}
