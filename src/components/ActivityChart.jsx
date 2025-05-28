import React, { useState } from "react";
import "./ActivityChart.css"; // Import the normal CSS file

export default function ActivityChart({ period = "week" }) {
  const [selectedPeriod, setSelectedPeriod] = useState(period);
  const [hoveredBar, setHoveredBar] = useState(null);

  const weeklyData = [
    { day: "Mon", value: 40, appointments: 2, color: "#22d3ee" },
    { day: "Tue", value: 65, appointments: 4, color: "#3b82f6" },
    { day: "Wed", value: 30, appointments: 1, color: "#6366f1" },
    { day: "Thu", value: 80, appointments: 5, color: "#a855f7" },
    { day: "Fri", value: 45, appointments: 3, color: "#ec4899" },
    { day: "Sat", value: 70, appointments: 4, color: "#f97316" },
    { day: "Sun", value: 55, appointments: 2, color: "#10b981" },
  ];

  const monthlyData = [
    { day: "W1", value: 60, appointments: 12, color: "#22d3ee" },
    { day: "W2", value: 75, appointments: 18, color: "#3b82f6" },
    { day: "W3", value: 45, appointments: 8, color: "#6366f1" },
    { day: "W4", value: 85, appointments: 22, color: "#a855f7" },
  ];

  const currentData = selectedPeriod === "week" ? weeklyData : monthlyData;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Activity</h3>
        <p className="card-subtitle">3 appointments this week</p>
      </div>

      <div className="card-content">
        <div className="chart-container">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="bar-group"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {hoveredBar === index && (
                <div className="tooltip">
                  <p>{item.day}</p>
                  <p>{item.appointments} appointments</p>
                  <p>{item.value}% activity</p>
                  <div className="tooltip-arrow" />
                </div>
              )}

              <div className="bar-wrapper">
                <div
                  className="bar"
                  style={{
                    height: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                >
                  <div className="bar-label">{item.value}%</div>
                </div>
              </div>

              <span className="day-label">{item.day}</span>
              <span className="appointment-count">{item.appointments}</span>
            </div>
          ))}

          {/* Grid lines */}
          <div className="grid-lines">
            {[25, 50, 75].map((line) => (
              <div
                key={line}
                className="grid-line"
                style={{ bottom: `${line}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
