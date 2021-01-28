// Styles
import '../styles/nucleo.css';
import '../styles/button-riple.css';
import '../styles/tailwind.css';

// Libs
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';

// Components
import Navbar from '../components/navigation/Navbar';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';

// Redux
import store from '../redux/configureStore';

export default function App({ Component, pageProps, router }) {
  const navLinks = [
    {
      href: '#projects',
      text: 'Projects',
    },
    {
      href: '#skills',
      text: 'Skills',
    },
  ];
  return (
    <Provider store={store}>
      <div id="top"></div>
      <Navbar links={navLinks} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <div className="fixed right-0 bottom-0 z-50 w-full">
        <div className="container mx-auto flex justify-end">
          <ScrollToTop />
        </div>
      </div>
    </Provider>
  );
}
