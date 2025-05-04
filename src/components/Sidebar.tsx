import React from "react";
// import "./Sidebar.css";

interface SidebarProps {
  selected: string;
  onSelect: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => (
  <nav className="sidebar">
    <div className="sidebar-title">Dashboard</div>
    <ul>
      {["Incidents", "Reports", "Settings"].map((section) => (
        <li
          key={section}
          className={selected === section ? "selected" : ""}
          onClick={() => onSelect(section)}
        >
          {section}
        </li>
      ))}
    </ul>
  </nav>
);