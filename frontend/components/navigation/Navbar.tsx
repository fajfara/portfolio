import Link from 'next/link';
import Button from '../button/Button';
import Heading from '../heading/Heading';

const Navbar = ({ links }) => {
  return (
    <nav className="container mx-auto flex justify-between w-full">
      <div className="cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-in-out">
        <Link href="/">
          <a>
            <Heading level={2}>Anže Fajfar</Heading>
          </a>
        </Link>
      </div>
      <ul className="flex">
        {links.map(({ href, text }, index) => (
          <li className="flex" key={index}>
            <Button
              href={href}
              variant="ternary"
              className={`text-black no-underline font-semibold flex items-center text-base ${index + 1 < links.length ? 'mr-8' : 'mr-0'}`}
            >
              {text}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
