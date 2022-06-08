import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todo />
      <Footer />
    </div>
  )
}

export default App;
