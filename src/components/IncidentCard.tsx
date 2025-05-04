import React from "react";
import { Incident } from "../types/incident";

interface IncidentCardProps {
  incident: Incident;
  expanded: boolean;
  onViewDetails: () => void;
}

export const IncidentCard: React.FC<IncidentCardProps> = ({
  incident,
  expanded,
  onViewDetails,
}) => {
  const truncatedDescription =
    incident.description.length > 50
      ? incident.description.slice(0, 50) + "..."
      : incident.description;

  return (
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

      {/* Always show truncated preview */}
      <div>{truncatedDescription}</div>

      {/* Toggle button */}
      <button className="view-btn" onClick={onViewDetails}>
        {expanded ? "Hide Details" : "View Details"}
      </button>

      {/* Show full description only below button when expanded */}
      {expanded && (
        <div className="incident-details">
          <hr />
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
};
