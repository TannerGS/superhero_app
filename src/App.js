import Search from './components/Search';
import Body from './components/Body';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Superhero List</h1>
      <Search />
      <Body />
    </div>
  );
}

export default App;
