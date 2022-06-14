import './App.css';
// import Countdown from './components/Countdown';
import { useApp } from './providers/AppProvider';

function App() {
  const store = useApp()
  console.log(store)

  return (
    <div>
    <div>sondeo: {store}</div>
      {/* <div>ay diomio 🙄🙄🙄🙄🙄🙄</div> */}
      {/* <Countdown targetDate={1654910468000} serverDate={new Date().getTime()} /> */}
    </div>
  );
}

export default App;
