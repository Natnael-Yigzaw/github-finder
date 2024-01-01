import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main></main>
      </div>
    </Router>
  );
}

export default App;
