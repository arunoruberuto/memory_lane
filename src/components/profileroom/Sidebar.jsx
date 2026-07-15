import React from "react";
import "./Sidebar.css";

function Sidebar({ people, activeId, onSelect }) {
  return (
    <div className="sidebar-menu">
      <div className="menu-title">♥ メンバー ♥</div>
      {people.map((person) => (
        <button
          key={person.id}
          type="button"
          className={`menu-item${
            person.id === activeId ? " menu-item--active" : ""
          }`}
          onClick={() => onSelect(person.id)}
          aria-pressed={person.id === activeId}
        >
          <span className="menu-icon">{person.icon}</span>
          <span className="menu-name">{person.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
