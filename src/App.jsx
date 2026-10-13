import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <Hero />
      </main>
    </>
  );
}

export default App;
