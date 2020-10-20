import React from "react";
import ContactCard from "./components/ContactCard";
import Navbar from "./components/Navbar";
import Zendesk from 'react-zendesk';
const ZENDESK_KEY = "bGluZ2VzdmFyYW4ucEBnbWFpbC5jb20vdG9rZW46SHZPV0J6enZHanJaVzA3Qkl4VzBGQzFkb2hCeXdCTWRITUNQTDFpUw==";

const setting = {
  color: {
    theme: "#000"
  },
  launcher: {
    chatLabel: {
      "en-US": "Need Help"
    }
  },
  contactForm: {
    fields: [
      { id: "description", prefill: { "*": "My pre-filled description" } }
    ]
  }
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="p-4 container mx-auto">
        <p className="mb-2 text-gray-900 font-bold">Contact Card</p>
        <div>
          <ContactCard />
          <Zendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
        </div>
      </div>
    </div>
  );
}

export default App;
