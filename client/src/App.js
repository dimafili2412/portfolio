import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import NoPage from './Pages/NoPage/NoPage';

//bars
import TopNavBar from './Components/TopNavBar/TopNavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopNavBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
