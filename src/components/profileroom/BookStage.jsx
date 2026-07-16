import React from "react";
import PersonFlipBook from "./PersonFlipBook";
import "./BookStage.css";

function BookStage({ people, selectedId }) {
  const person = people.find((p) => p.id === selectedId);

  return (
    <div className="book-container">
      <div className="profile-book">
        <div className="binder-rings">
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
        </div>

        <div className="book-mount-fade">
          <PersonFlipBook person={person} />
        </div>
      </div>
    </div>
  );
}

export default BookStage;
