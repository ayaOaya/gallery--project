import Loading from './Loading/Loading'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import './App.css'
import { useEffect, useRef, useState } from 'react'


function App() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);
  const id = useRef(null);

  function clear() {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    preloader ? <Loading /> :
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
