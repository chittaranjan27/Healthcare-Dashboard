// src/HealthcareDashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

import {Sidebar} from './Sidebar';
import {AnatomySection} from './AnatomySection';
import ActivityChart from './ActivityChart';
import {CalendarSection} from './CalendarSection';
import {HealthMetrics} from './HealthMetrics';

export default function HealthcareDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard-container">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="main-content">
        <header className="header">
          <h2>Dashboard</h2>
          <div className="header-right">
            <div className="search-bar">
              <input className="search-input" placeholder="Search" />
            </div>
            <button>🔔</button>
            <img src="/placeholder-user.jpg" alt="Avatar" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
            <button className="new-patient-btn">+ New Patient</button>
          </div>
        </header>

        <div className="grid-layout">
          <div className="col-span-4">
            <AnatomySection />
            <ActivityChart />
          </div>
          <div className="col-span-3">
            <HealthMetrics />
          </div>
          <div className="col-span-5">
            <CalendarSection />
          </div>
        </div>
      </div>
    </div>
  );
}
