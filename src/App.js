import './App.css';
import Countdown from './components/Countdown';
import { useApp } from './providers/AppProvider';

function App() {
  const store = useApp()
  const THREE_DAYS_IN_MS = 10000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  console.log(dateTimeAfterThreeDays)
  console.log(store)
  return (
    <Countdown currentDate={new Date().getTime()} targetDate={1654631400000} />
  );
}

export default App;
