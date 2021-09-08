import logo from "./logo.svg";
import "./App.css";
import * as Tone from "tone";
import MIDI from "./components/MIDI";
import Synth from "./components/Synth";
import FreqTable from "./components/FreqTable";

function App() {
  return (
    <div className="App">
      <MIDI />
      <Synth />
      <FreqTable />
    </div>
  );
}

export default App;
