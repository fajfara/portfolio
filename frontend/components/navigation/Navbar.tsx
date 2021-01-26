import Link from 'next/link';
import Heading from '../heading/Heading';

const Navbar = ({ links }) => {
  return (
    <div className="w-full sticky top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between p-8 w-full">
        <div className="cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-in-out">
          <Link href="/">
            <Heading level={2}>Anže Fajfar</Heading>
          </Link>
        </div>
        <ul className="flex">
          {links.map(({ href, text }, index) => (
            <li className="flex">
              <Link href={href}>
                <a
                  className={`text-black no-underline font-semibold flex items-center text-base ${
                    index + 1 < links.length ? 'mr-8' : 'mr-0'
                  }`}
                >
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
