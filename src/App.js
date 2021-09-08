import logo from "./logo.svg";
import "./App.css";
import * as Tone from "tone";
import MIDI from "./components/MIDI";
import Synth from "./components/Synth";

function App() {
  return (
    <div className="App">
      <MIDI />
    </div>
  );
}

export default App;
