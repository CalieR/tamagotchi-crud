import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import UserPage from './components/UserPage';
import { useEffect, useState } from 'react';
import { getTamagotchis } from './service/tamagotchiService';
import { TableData } from './types/types';

function App() {
  const [tamagotchis, setTamagotchis] = useState<TableData>();
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchExpenses = async () => {
    const response = await getTamagotchis();
    setTamagotchis(response);
    setError(response.error);
    setLoading(false);
  };

  console.log(error, loading);

  useEffect(() => {
    setLoading(true);
    fetchExpenses();
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
            <UserPage tamagotchis={tamagotchis}  />
          )}
        </SignedIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
