import './App.css';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
