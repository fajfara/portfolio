// Styles
import '../styles/nucleo.css';
import '../styles/button-riple.css';
import '../styles/tailwind.css';

// Libs
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';

// Components
import Header from '../components/layout/Header';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import ProjectModalController from '../components/modal/project-modal/ProjectModalController';

// Redux
import store from '../redux/configureStore';
import PageWrapper from '../components/animated/PageWrapper';

export default function App({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <div id="top"></div>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <PageWrapper>
          <Component {...pageProps} key={router.route} />
        </PageWrapper>
      </AnimatePresence>
      <div className="fixed right-0 bottom-0 z-50 w-full">
        <div className="container mx-auto flex justify-end">
          <ScrollToTop />
        </div>
      </div>
      <ProjectModalController />
    </Provider>
  );
}
