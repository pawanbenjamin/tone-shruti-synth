import MIDI from "./components/MIDI";
import Synth from "./components/Synth";
import FreqTable from "./components/FreqTable";
import SynthParams from "./components/SynthParams";
import WaveBkg from "./components/WaveBkg";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      <MIDI />
      <Synth />
      <div className="synth">
        <FreqTable />
        <SynthParams />
      </div>
      <WaveBkg />
    </div>
  );
}

export default App;
