
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="pt-[118px]">
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
