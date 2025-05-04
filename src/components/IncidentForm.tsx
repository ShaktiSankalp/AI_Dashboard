import React, { useState } from "react";
import { Incident, Severity } from "../types/incident";

interface Props {
  onAdd: (incident: Incident) => void;
  incidents: Incident[]; // Needed for id auto-increment
}

export const IncidentForm: React.FC<Props> = ({ onAdd, incidents }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reportedAt, setReportedAt] = useState("");
  const [severity, setSeverity] = useState<Severity>("Low");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !reportedAt) {
      setError("All fields required");
      return;
    }
    onAdd({
      id: Math.max(0, ...incidents.map(i => i.id)) + 1,
      title,
      description,
      severity,
      reported_at: reportedAt
    });
    setTitle(""); setDescription(""); setReportedAt(""); setError("");
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Description
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <label>
        Date
        <input type="datetime-local" value={reportedAt} onChange={e => setReportedAt(e.target.value)} />
      </label>
      <label>
        Severity
        <select value={severity} onChange={e => setSeverity(e.target.value as Severity)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <button type="submit">Add Incident</button>
      {error && <div className="input-error">{error}</div>}
    </form>
  );
};