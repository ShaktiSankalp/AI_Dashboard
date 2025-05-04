

# AI Safety Incident Dashboard

A simple and responsive web dashboard for tracking and reporting AI safety incidents.



##  Technology Stack

- **Language:** TypeScript
- **Framework:** React 
- **Styling:** CSS



##  Setup & Run Instructions

**1. Clone or download this repo/folder.**

**2. Install dependencies:**

```bash
npm install
```
> _**Note:** You must be in the folder containing `package.json`._

**3. Run the app locally:**

```bash
npm start
```

Your app will be available at [http://localhost:3000](http://localhost:3000).



##  Project Structure


src/
  components/
    IncidentCard.tsx
    IncidentForm.tsx
    IncidentList.tsx
    Sidebar.tsx
    Tabs.tsx
  data/
    mockIncidents.ts
  types/
    incident.ts
  App.tsx
  App.css
  index.tsx
```



##  Features

- Sidebar for main navigation (`Incidents`, `Reports`, `Settings`)
- Tabs for views inside `Incidents`
- List view with severity color coding, filter, sort, and detail expand
- Responsive design (works on mobile)
- "Report New Incident" form with validation and dynamic list update
- Placeholder Analytics tab
- "Work in progress" screens for Settings and Reports



##  Design Notes & Decisions (Optional)

- Chose React + TypeScript for strong type safety and easy component reuse.
- All state is managed in-memory for simplicity, as no backend was required.
- CSS is written to be easily customizable. Severity badges use clear color cues.
- The project is easily extendable; for example, real analytics could later be slotted into the Analytics tab.



##  Known Limitations

- Data does **not** persist on reload (mock data only).
- Analytics and non-incident tabs are currently in-progress/mock only.



##  Contributions

This project is for instructional/demo purposes, but PRs and feedback are welcome.

