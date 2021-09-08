import React, { useEffect, useContext } from "react";
import { store } from "../state";
import * as Tone from "tone";

// export const handleNote = (noteObj) => {
//   const now = Tone.now();
//   if (noteObj.command === 144) {
//     keyDown(noteObj.note, now, noteObj.velocity);
//   }
//   if (noteObj.command === 128) {
//     //   keyUp();
//   }
// };

function Synth(props) {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    const synth = new Tone.PolySynth().toDestination();
    dispatch({ type: "synth", value: synth });
  }, []);

  return <div></div>;
}

export default Synth;
