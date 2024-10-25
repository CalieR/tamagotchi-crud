import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow bg-yellow-100 content-center">
        <SignedOut>
          <Hero />
        </SignedOut>
        <SignedIn>
          <p>Signed in</p>
        </SignedIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
