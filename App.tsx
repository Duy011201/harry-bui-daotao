import React, { useState } from 'react';
import { IntroOverlay } from './components/IntroOverlay';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Programs } from './components/Programs';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { VideoDocumentary } from './components/VideoDocumentary';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="bg-cream min-h-screen text-ink selection:bg-gold selection:text-white">
      {!introComplete && (
        <IntroOverlay onComplete={() => setIntroComplete(true)} />
      )}

      <main className={`transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <Hero />
        <Timeline />
        {/* <Programs /> */}
        <Services />
        <Gallery />
        {/* <VideoDocumentary /> */}
        <ContactForm />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;