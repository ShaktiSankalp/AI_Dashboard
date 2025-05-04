import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tabs } from "./components/Tabs";
import { IncidentList } from "./components/IncidentList";
import { IncidentForm } from "./components/IncidentForm";
import { incidents as initialIncidents } from "./data/mockIncidents";
import { Incident } from "./types/incident";
import "./App.css";

const App: React.FC = () => {
  const [section, setSection] = useState("Incidents");
  const [tab, setTab] = useState("List View");
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("Date");
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleAddIncident = (incident: Incident) => {
    setIncidents([incident, ...incidents]);
    setTab("List View");
  };

  return (
    <div className="app">
      <Sidebar selected={section} onSelect={setSection} />
      <main>
        <h1>AI Safety Incidents</h1>
        {section === "Incidents" && (
          <>
            <Tabs current={tab} onTab={setTab} />
            {tab === "List View" && (
              <IncidentList
                incidents={incidents}
                expanded={expanded}
                /** 
                 * CHANGED HERE: Provide a toggle function
                 * Instead of: onViewDetails={setExpanded}
                 * Use:
                 */
                onViewDetails={id => setExpanded(expanded === id ? null : id)}
                filter={filter}
                sort={sort}
                onFilter={setFilter}
                onSort={setSort}
              />
            )}
            {tab === "Report New Incident" && (
              <IncidentForm onAdd={handleAddIncident} incidents={incidents} />
            )}
            {tab === "Analytics" && (
              <div className="analytics-placeholder">
                <h2>Analytics (Coming Soon)</h2>
                <p>Analytics dashboard will appear here.</p>
              </div>
            )}
          </>
        )}
        {section === "Settings" && (
  <div style={{ marginTop: 50, textAlign: "center" }}>
    <p style={{ color: "#888", fontSize: "1.2rem" }}>
      Work in progress,<br />
      <b>Settings page</b> will be implemented soon.
    </p>
  </div>
)}
{section === "Reports" && (
  <div style={{ marginTop: 50, textAlign: "center" }}>
    <p style={{ color: "#888", fontSize: "1.2rem" }}>
      Work in progress,<br />
      <b>Reports page</b> will be implemented soon.
    </p>
  </div>
)}
      </main>
    </div>
  );
};

export default App;