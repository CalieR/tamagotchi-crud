import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';
import { useEffect, useState } from 'react';
import { TableData } from './types/types';
import { getTamagotchis } from './service/tamagotchiService';

function App() {
  const [tamagotchis, setTamagotchis] = useState<TableData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');

  const fetchTamagotchis = async () => {
    const response = await getTamagotchis();
    setTamagotchis(response);
    setError(response.error);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchTamagotchis();
  }, []);
  return (
    <>
      <Header />
      <main className="container">
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && tamagotchis && <Table tableData={tamagotchis} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
