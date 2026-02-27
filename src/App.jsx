
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[118px]">
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
