import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
const t1 ={
  background: `url("data:image/svg+xml,%3Csvg width='197' height='72' viewBox='0 0 197 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.2993 1H4.27196C2.4649 1 1 2.4649 1 4.27195V56.8711C1 58.6782 2.46491 60.1431 4.27196 60.1431H18.2021C19.1185 60.1431 19.993 60.5274 20.6127 61.2026L28.6324 69.9405C29.2521 70.6157 30.1265 71 31.0429 71H48.23C49.1549 71 50.0367 70.6085 50.657 69.9224L58.5243 61.2207C59.1446 60.5346 60.0264 60.1431 60.9513 60.1431H192.806C194.613 60.1431 196.078 58.6782 196.078 56.8711V4.27195C196.078 2.4649 194.613 1 192.806 1H60.8539C59.9861 1 59.1539 1.34472 58.5402 1.95833L50.6411 9.85753C50.0274 10.4711 49.1952 10.8159 48.3274 10.8159H30.9457C30.0865 10.8159 29.2617 10.4779 28.6496 9.87486L20.5955 1.941C19.9834 1.338 19.1586 1 18.2993 1Z' fill='%23B003B0' stroke='%23800080' stroke-width='1.09065'/%3E%3C/svg%3E") no-repeat center center/cover`,
  width: "206px",
  height: "76px",
}
const Size = ({ character, comp_id }) => {
  const [state, setState] = useState({
    scale: 2,
  });
  // To change Size of Sprint
  const changeSize = () => {
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    el.style.transform = el.style.transform + `scale(${state.scale})`;
  };

  return (
    <div 
    style={t1} className="flex justify-center items-center">
      <div className="rounded-lg text-center">
      <div className="flex justify-between items-center text-sm">
          <div className="text-white">Size:</div>
          <input
             className="ml-2 w-28 text-center rounded-lg"
            type="number"
            value={state.scale}
            min="0"
            max="1000"
            step="0.1"
            onChange={(e) =>
              setState({ ...state, scale: parseFloat(e.target.value) })
            }
          />
        </div>
        <div
          id={comp_id}
          className="flex text-center flex-row items-center flex-wrap text-white text-sm cursor-pointer"
          onClick={() => changeSize()}
        > 
        <span className="text-center ml-1">Size
        </span>
        <span className="text-center ml-2">
        {state.scale}
          </span>
        </div>
      </div>
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Size);
