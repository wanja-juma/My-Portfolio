import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;