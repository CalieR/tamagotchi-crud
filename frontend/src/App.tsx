import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow bg-yellow-100 content-center">
        <SignedOut>
          <Hero />
        </SignedOut>
        <SignedIn>
          <UserPage />
        </SignedIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
