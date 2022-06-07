import './App.css';
import Countdown from './components/Countdown';

function App() {
  const THREE_DAYS_IN_MS =  60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <Countdown targetDate={dateTimeAfterThreeDays} />
  );
}

export default App;
