import React from "react";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="App">
      <div className="p-4 container mx-auto">
        <p className="mb-2 text-gray-900 font-bold">Contact Card</p>
        <div>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default App;
