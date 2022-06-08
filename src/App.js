import './App.css';
import Countdown from './components/Countdown';
import { useApp } from './providers/AppProvider';

function App() {
  const store = useApp()
  console.log(store)

  return (
    <div>
      <div>ay diomio 🙄🙄🙄🙄🙄🙄</div>
      <Countdown targetDate={1654910468000} />
    </div>
  );
}

export default App;
