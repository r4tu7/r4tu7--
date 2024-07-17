import React from "react";

import Content from "./Layout/Content/Content";
import Nav from "./Layout/Nav/Nav";
import Side from "./Layout/Side/Side";
import About from "./Pages/About";


const App: React.FC = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-white-100">
    //   <h1 className="text-4xl font-bold text-blue-500">Hello Ratul</h1>
    // </div>

    <>
    <div className="grid grid-cols-12 gap-2 w-full h-full bg-white-600">
      <Nav />
      <Content />
      <Side />
    </div>

    <div className="my-20">
        <About />
    </div>
   
    
    
    
    </>

  );
};

export default App;
