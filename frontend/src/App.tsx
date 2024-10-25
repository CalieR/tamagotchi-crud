import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main data-theme="bumblebee" className="flex-grow"></main>
      <Footer />
    </div>
  );
}

export default App;
