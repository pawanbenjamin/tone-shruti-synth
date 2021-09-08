import React, { useState, useEffect, useContext, useRef } from "react";
import { store } from "../state";
import * as Tone from "tone";

function MIDI(props) {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    const synth = new Tone.PolySynth().toDestination();
    dispatch({ type: "synth", value: synth });
  }, []);

  const [noteObj, setNoteObj] = useState({});

  //   const poly = useRef(synth);

  const handleNote = (noteObj) => {
    const now = Tone.now();
    if (noteObj.command === 144) {
      keyDown(noteObj.note, now, noteObj.velocity);
    }
    if (noteObj.command === 128) {
      //   keyUp();
    }
  };

  const keyDown = (note, time, velocity) => {
    state.synth.set({
      volume: 0,
      detune: 0,
      portamento: 0,
      envelope: {
        attack: 0.005,
        attackCurve: "linear",
        decay: 0.1,
        decayCurve: "exponential",
        release: 1,
        releaseCurve: "exponential",
        sustain: 0.3,
      },
      oscillator: {
        partialCount: 0,
        partials: [],
        phase: 0,
        type: "triangle",
      },
    });
    state.synth.triggerAttackRelease(note, "8n");
  };

  //   const keyUp = () => {
  //     synth.triggerRelease();
  //   };

  useEffect(() => {
    dispatch({ type: "note-obj", value: noteObj });
    handleNote(noteObj);
  }, [noteObj]);

  function getMIDIMessage(midiMessage) {
    setNoteObj({
      command: midiMessage.data[0],
      note: midiMessage.data[1],
      velocity: midiMessage.data.length > 2 ? midiMessage.data[2] : 0,
    });
  }

  useEffect(() => {
    navigator.requestMIDIAccess().then(function (access) {
      // Get lists of available MIDI controllers
      const inputs = access.inputs.values();
      const outputs = access.outputs.values();

      for (let input of inputs) {
        input.onmidimessage = getMIDIMessage;
      }

      for (let output of outputs) {
        output.onmidimessage = getMIDIMessage;
      }

      access.onstatechange = function (e) {
        // Print information about the (dis)connected MIDI controller
        console.log(e.port.name, e.port.manufacturer, e.port.state);
      };
    });
  }, []);

  return <div>Midi</div>;
}

export default MIDI;
