import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow bg-yellow-100 content-center">
       <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
