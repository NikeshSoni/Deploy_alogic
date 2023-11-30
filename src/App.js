
import './App.css';
import  './SCSS/App.scss';
import  './SCSS/comman.scss';
import  './SCSS/index.scss';
import Shop from './pages/shop';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
           <HashRouter>
                <Routes>
                      <Route path='/' element={ <Shop />}>  </Route>
                </Routes>
            </HashRouter>
    </div>
  );
}

export default App;
