import React from "react"
import "./HealthMetrics.css"
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

const healthMetrics = [
  {
    id: "lungs",
    icon: "🫁",
    name: "Lungs",
    date: "28 Oct 2021",
    progress: 75,
    color: "#ef4444", // red-500
    status: "good",
    trend: "up",
    value: "75%",
  },
  {
    id: "teeth",
    icon: "🦷",
    name: "Teeth",
    date: "26 Oct 2021",
    progress: 60,
    color: "#22c55e", // green-500
    status: "warning",
    trend: "stable",
    value: "60%",
  },
  {
    id: "bone",
    icon: "🦴",
    name: "Bone",
    date: "26 Oct 2021",
    progress: 45,
    color: "#f97316", // orange-500
    status: "critical",
    trend: "down",
    value: "45%",
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case "good":
      return "status-good"
    case "warning":
      return "status-warning"
    case "critical":
      return "status-critical"
    default:
      return "status-default"
  }
}

const getTrendIcon = (trend) => {
  switch (trend) {
    case "up":
      return <TrendingUp size={12} color="#22c55e" />
    case "down":
      return <TrendingDown size={12} color="#ef4444" />
    default:
      return <AlertCircle size={12} color="#eab308" />
  }
}

export function HealthMetrics() {
  return (
    <div className="health-metrics-container">
      {healthMetrics.map((metric) => (
        <div key={metric.id} className="card">
          <div className="card-content">
            <div className="card-row">
              <div className="icon">{metric.icon}</div>

              <div className="metric-info">
                <div className="metric-header">
                  <h3>{metric.name}</h3>
                  <div className="metric-trend">
                    {getTrendIcon(metric.trend)}
                    <span className={`metric-value ${getStatusColor(metric.status)}`}>
                      {metric.value}
                    </span>
                  </div>
                </div>

                <p className="metric-date">Date: {metric.date}</p>

                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${metric.progress}%`,
                        backgroundColor: metric.color,
                      }}
                    ></div>
                  </div>
                  <div className="progress-labels">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="button-outline">View Details →</button>
    </div>
  )
}
