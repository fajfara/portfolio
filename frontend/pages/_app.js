import '@glidejs/glide/dist/css/glide.core.min.css';
import '../styles/global.scss'

import Navbar from "../components/navigation/Navbar";

import { ThemeProvider } from 'emotion-theming';

// Basic styles
import { AnimatePresence } from "framer-motion";

// Theme
const theme = {
    colors: {
        primary: '#ff0000'
    }
}

// Dark theme
let isDark = true;

export default function App({ Component, pageProps, router }) {
    return (
        <ThemeProvider theme={theme} className="page">
            <Navbar/>
            <div className="container">
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </div>
        </ThemeProvider>
    )
}