// STYLES
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// CONTAINERS
import Header from './components/Header';
import Main from './containers/Main';

function App() {
  return (
    <div className="app">
    <Header />
    <Main />
    </div>
  );
}

export default App;
