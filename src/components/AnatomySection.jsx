import React, { useState } from "react"
import "./AnatomySection.css"

export function AnatomySection() {
  const [selectedOrgan, setSelectedOrgan] = useState("heart")

  const organData = {
    heart: {
      status: "Healthy",
      color: "red",
      icon: "❤️",
      metrics: { bpm: 72, pressure: "120/80" },
    },
    lungs: {
      status: "Good",
      color: "blue",
      icon: "🫁",
      metrics: { capacity: "85%", rate: "16/min" },
    },
    brain: {
      status: "Excellent",
      color: "purple",
      icon: "🧠",
      metrics: { activity: "Normal", stress: "Low" },
    },
  }

  const organ = organData[selectedOrgan]

  return (
    <div className="anatomy-card">
      <div className="anatomy-card-content">
        <div className="anatomy-body-container">
          <div className="body-wrapper">
            <div className="body-outline">
              <div className="body-icon">🧍</div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="badge" style={{ backgroundColor: organ.color }}>
            {organ.icon} {organ.status} {selectedOrgan.charAt(0).toUpperCase() + selectedOrgan.slice(1)}
          </div>

          {/* Organ Metrics Button */}
          <div className="metrics-button">
            <button className="custom-button">
              📊{" "}
              {Object.entries(organ.metrics)
                .map(([k, v]) => `${k}: ${v}`)
                .join(" | ")}
            </button>
          </div>

          {/* Organ Selection */}
          <div className="organ-selector">
            {Object.entries(organData).map(([key, data]) => (
              <button
                key={key}
                className={`selector-button ${selectedOrgan === key ? "active" : ""}`}
                style={{ backgroundColor: data.color }}
                onClick={() => setSelectedOrgan(key)}
              >
                {data.icon} {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// export default AnatomySection;
