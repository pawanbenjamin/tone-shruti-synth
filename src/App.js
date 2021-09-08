import logo from "./logo.svg";
import "./App.css";
import * as Tone from "tone";
import MIDI from "./components/MIDI";
import Synth from "./components/Synth";
import FreqTable from "./components/FreqTable";
import SynthParams from "./components/SynthParams";

function App() {
  return (
    <div className="App">
      <MIDI />
      <Synth />
      <div className="controls">
        <FreqTable />
        <SynthParams />
      </div>
    </div>
  );
}

export default App;
