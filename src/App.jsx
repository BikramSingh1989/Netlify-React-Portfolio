import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
