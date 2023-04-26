import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/header/Header';
import MovieList from './components/movieList/movieList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<h1>Movie detail page</h1>} />
          <Route path='movies/:type' element={<MovieList />} />
          <Route path='/*' element={<h1>Error Page</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
