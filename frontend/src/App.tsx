import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import UserPage from './components/UserPage';
import { useEffect, useState } from 'react';
import { Tamagotchi } from './types/types';
import { getAllTamagotchis } from './service/tamagotchi/tamagotchi.api';

function App() {
  const [tamagotchis, setTamagotchis] = useState<Tamagotchi[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTamagotchis = async () => {
    const response = await getAllTamagotchis();

    setTamagotchis(response.data);
    setError(response.error);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchTamagotchis();
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow bg-yellow-100 content-center">
        <SignedOut>
          <Hero />
        </SignedOut>
        <SignedIn>
          {loading && <p>loading...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && tamagotchis && (
            <UserPage tamagotchis={tamagotchis} setTamagotchis={setTamagotchis}/>
          )}
        </SignedIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
