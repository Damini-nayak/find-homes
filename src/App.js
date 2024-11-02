import React, { useState, useEffect } from 'react';
import './style/App.css';
import './style/var.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './Routes'
import Preloader from './components/preloader'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const spin = setTimeout(()=>{
      setIsLoading(false);
    },3000);

    return () => clearTimeout(spin);

    // const handleLoad = () => { setIsLoading(false); }

    // window.addEventListener('load', handleLoad);

    // return () => {
    //   window.removeEventListener('load', handleLoad);
    // }

  }, [])


  return (
    <>
      {isLoading ? <Preloader /> : (
        <div className="content">
          <Header />
          <Routes />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
