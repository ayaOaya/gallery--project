import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Loading from './Loading/Loading'
import Page from './Page/Page'
import './App.css'
import { useEffect, useRef, useState } from 'react'


function App() {
  return (
 
    <div>
      <Navbar />
      <Header />
      <Page />
    </div>
  );
}

export default App;
