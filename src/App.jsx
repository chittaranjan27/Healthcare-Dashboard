import React, { useState } from "react"
import './App.css'
import { Sidebar } from './components/Sidebar'
import HealthcareDashboard from "./components/HealthcareDashboard"

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} /> */}
      <main style={{ flex: 1, padding: "2rem", overflowY: "auto", background: "#f9fafb" }}>
        <HealthcareDashboard />
      </main>
    </div>
  )
}

export default App
