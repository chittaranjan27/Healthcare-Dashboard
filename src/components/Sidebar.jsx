import React, { useState } from "react"
import {
  BarChart3,
  Clock,
  Calendar,
  Users,
  Activity,
  MessageCircle,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "./button"
import "./Sidebar.css"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function Sidebar({ collapsed = false, onToggle }) {
  const [activeItem, setActiveItem] = useState("Dashboard")

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Clock, label: "History" },
    { icon: Calendar, label: "Calendar", badge: 3 },
    { icon: Users, label: "Appointments", badge: 5 },
    { icon: Activity, label: "Statistics" },
    { icon: MessageCircle, label: "Chat", badge: 2 },
    { icon: HelpCircle, label: "Support" },
    { icon: Settings, label: "Setting" },
  ]

  return (
    <div className={cn("sidebar", collapsed ? "collapsed" : "expanded")}>
      {/* Header */}
      <div className="sidebar-header">
        <div className="header-content">
          {!collapsed && <h1 className="brand-title">Healthcare.</h1>}
          <Button variant="ghost" size="icon" onClick={onToggle} className="toggle-btn">
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="sidebar-nav">
        {!collapsed && <p className="section-label">General</p>}

        <nav className="nav-list">
          {sidebarItems.map((item, index) => {
            const isActive = activeItem === item.label
            return (
              <div
                key={index}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "nav-item",
                  isActive ? "active" : "inactive",
                  collapsed ? "collapsed-item" : ""
                )}
              >
                <item.icon className={cn("nav-icon", isActive ? "icon-active" : "icon-inactive")} />

                {!collapsed && (
                  <>
                    <span className="nav-label">{item.label}</span>
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </>
                )}

                {/* Tooltip for collapsed */}
                {collapsed && (
                  <div className="tooltip">
                    {item.label}
                    {item.badge && <span className="badge-tooltip">{item.badge}</span>}
                  </div>
                )}

                {/* Active indicator */}
                {isActive && <div className="active-indicator" />}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
