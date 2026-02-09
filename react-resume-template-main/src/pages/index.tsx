import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Resume from '../components/Sections/Resume';
import Portfolio from '../components/Sections/Portfolio';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';

import { homePageMeta } from '../data/data';

// Header is dynamically imported (client-side only)
const Header = dynamic(() => import('../components/Sections/Header'), {
  ssr: false,
});

// eslint-disable-next-line react-memo/require-memo
const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  return (
    <Page title={title} description={description}>
      <Header />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* RESUME (Education + Experience + Projects summary)
          ⚠️ Certifications intentionally NOT included */}
      <Resume />

      {/* PROJECTS / PORTFOLIO */}
      <Portfolio />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </Page>
  );
});

export default Home;
