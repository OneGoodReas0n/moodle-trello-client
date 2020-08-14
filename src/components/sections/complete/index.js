import React from "react";
import "./complete.scss";
import SuccessIcon from "~a/icons/success_icon.svg";

export default function ({
  style,
  isTrelloFormComplete,
  isMoodleFormComplete,
}) {
  return (
    <div
      className={"complete ".concat(
        style === "moodle"
          ? isMoodleFormComplete
            ? "show"
            : ""
          : isTrelloFormComplete
          ? "show"
          : ""
      )}
    >
      <p className="complete__text">
        {style === "moodle" ? "Moodle" : "Trello"} is Authorized !
      </p>
      <img src={SuccessIcon} />
    </div>
  );
}
