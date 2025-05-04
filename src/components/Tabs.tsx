import React from "react";
// import "./Tabs.css";

interface TabsProps {
  current: string;
  onTab: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ current, onTab }) => (
  <div className="tabs">
    {["List View", "Report New Incident", "Analytics"].map(tab => (
      <button
        key={tab}
        className={current === tab ? "tab-active" : ""}
        onClick={() => onTab(tab)}
        type="button"
      >
        {tab}
      </button>
    ))}
  </div>
);