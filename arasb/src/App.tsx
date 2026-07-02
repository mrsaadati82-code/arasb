import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Products from './components/Products';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Process from './components/Process';
import Countries from './components/Countries';
import Commitment from './components/Commitment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { I18nProvider } from './i18n';

function App() {
  return (
    <I18nProvider>
      <main className="relative font-sans">
        <Navbar />
        <Hero />
        <Expertise />
        <Products />
        <Showcase />
        <Services />
        <Countries />
        <Process />
        <Commitment />
        <Contact />
        <Footer />
      </main>
    </I18nProvider>
  );
}

export default App;
