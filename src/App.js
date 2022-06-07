import './App.css';
import Countdown from './components/Countdown';
import { useApp } from './providers/AppProvider';

function App() {
  const store = useApp()

  return (
    <Countdown currentDate={store.currentDate} targetDate={store.targetDate} />
  );
}

export default App;
