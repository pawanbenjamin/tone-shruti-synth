import React, { useContext, useState, useEffect } from "react";
import * as Tone from "tone";

import { store } from "../state";

const polyVoices = 16;

function Synth(props) {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    const synth = new Tone.Synth().toDestination();
    dispatch({ type: "synth", value: synth });
  }, []);

  const handleNote = (noteObj) => {
    const now = Tone.now();
    if (noteObj.command === 144) {
      keyDown(noteObj.note, now, noteObj.velocity);
    }
  };

  const keyDown = (note, time, velocity) => {
    state.synth.triggerAttach(note, time, velocity);
  };

  const keyUp = () => {};

  return (
    <div>
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Synth;
