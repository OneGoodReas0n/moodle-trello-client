import React from "react";
import "./greeting.scss";
import Input from "~c/parts/input";
import Button from "~c/parts/button";

function Greeting({ onInputChange, onInputFocus, activeTrello, activeMoodle }) {
  return (
    <div
      className={"greeting ".concat(
        activeMoodle && activeTrello ? "active" : ""
      )}
    >
      <div className="greeting-modal">
        <h4>
          Hi Reason, to begin our journey <br /> we need to create a Trello
          board for you
        </h4>
        <Input
          style="trello"
          placeholder="Board name"
          name="board"
          onChange={onInputChange}
          onFocus={onInputFocus}
        />
        <Button text="Create" type="trello" />
      </div>
    </div>
  );
}

export default Greeting;
