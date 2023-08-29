import Hero from "./components/index";
import Cards from "./components/projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/projects" element={<Cards />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
