// Styles
import '../styles/nucleo.css';
import '../styles/button-riple.css';
import '../styles/tailwind.css';

// Components
import Navbar from '../components/navigation/Navbar';
import Button from '../components/button/Button';

// Basic styles
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  const navLinks = [
    {
      href: '/projects',
      text: 'Projects',
    },
    {
      href: '/skills',
      text: 'Skills',
    },
    {
      href: '/blog',
      text: 'Blog',
    },
    {
      href: '/music',
      text: 'Music',
    },
  ];
  return (
    <>
      <div id="top"></div>
      <Navbar links={navLinks} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <div className="fixed right-0 bottom-0 z-50">
        <Button href="#top" variant="secondary" className="block">
          Back to top
        </Button>
      </div>
    </>
  );
}
