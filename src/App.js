import Hero from "./components/index";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Hero />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
