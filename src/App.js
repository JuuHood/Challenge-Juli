import React from 'react';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import Producto from './components/Product';
import LastProductCreate from './components/LastProductCreate';
import Brands from './components/Brands'

function App() {
  return (
    <div>      	
      <TopBar/>
      <Producto/>
      <div className='brand-lastproduct'>
      <Brands/>
      <LastProductCreate/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
