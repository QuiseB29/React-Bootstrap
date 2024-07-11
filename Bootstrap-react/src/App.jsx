import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import CharacterDetail from './components/CharacterDetail';
import 'bootstrap/dist/css/bootstrap.min.css'
import CharactersList from './components/CharacterList';
import './file.css';


function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="marvel-character" element={<CharactersList />} />
        <Route path="marvel-detail" element={<CharacterDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
