import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/navbar";


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer gretting={'A long time ago, in a galaxy far, far away.'}></ItemListContainer>
    </div>
  );
}

export default App;
