import React from "react";
import { Incident } from "../types/incident";
import { IncidentCard } from "./IncidentCard";
// import "./IncidentList.css";

interface IncidentListProps {
  incidents: Incident[];
  expanded: number | null;
  onViewDetails: (id: number) => void;
  filter: string;
  sort: string;
  onFilter: (s: string) => void;
  onSort: (s: string) => void;
}

export const IncidentList: React.FC<IncidentListProps> = ({
  incidents,
  expanded,
  onViewDetails,
  filter,
  sort,
  onFilter,
  onSort,
}) => {
  let shown = incidents;
  if (filter !== "All") shown = shown.filter((i) => i.severity === filter);
  if (sort === "Date")
    shown = [...shown].sort((a, b) => b.reported_at.localeCompare(a.reported_at));
  if (sort === "Severity")
    shown = [...shown].sort((a, b) => a.severity.localeCompare(b.severity));

  return (
    <div>
      <div className="controls-row">
        <select value={filter} onChange={e => onFilter(e.target.value)}>
          <option value="All">Filter by Severity</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select value={sort} onChange={e => onSort(e.target.value)}>
          <option value="Date">Sort by Date</option>
          <option value="Severity">Sort by Severity</option>
        </select>
      </div>
      {shown.length === 0 ? (
        <div className="placeholder-empty">
          <span role="img" aria-label="No incidents">😶‍🌫️</span><br />
          No incidents found matching your criteria.
        </div>
      ) : (
        shown.map((incident) => (
          <IncidentCard
            key={incident.id}
            incident={incident}
            expanded={expanded === incident.id}
            onViewDetails={() => onViewDetails(incident.id)}
          />
        ))
      )}
    </div>
  );
};