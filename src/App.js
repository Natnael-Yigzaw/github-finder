import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Fotter";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12"></main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
