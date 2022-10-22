import React, { useEffect } from "react";

import Footer from "./components/footer/Footer";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";





function App() {

  return (
    <main>
      {/* <Header /> */}
      <Main />      
      <div style={{ display: "block",  position: 'absolute', bottom: '0', right:'0', marginInlineEnd: '1rem' }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;