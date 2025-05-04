import React from "react";
import { Incident } from "../types/incident";
// import "./IncidentCard.css";

interface IncidentCardProps {
  incident: Incident;
  expanded: boolean;
  onViewDetails: () => void;
}

export const IncidentCard: React.FC<IncidentCardProps> = ({
  incident,
  expanded,
  onViewDetails,
}) => (
  <div className="incident-card">
    <div className="incident-header">
      <div>
        <strong>{incident.title}</strong>
        <span className={`sev sev-${incident.severity.toLowerCase()}`}>
          {incident.severity}
        </span>
      </div>
      <span>
        {new Date(incident.reported_at).toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </span>
    </div>
    <div>{incident.description}</div>
    <button className="view-btn" onClick={onViewDetails}>
      {expanded ? "Hide Details" : "View Details"}
    </button>
    {expanded && (
      <div className="incident-details">{incident.description}</div>
    )}
  </div>
);