import React, { useState } from "react"
import "./CalendarSection.css"

export function CalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 9, 28)) // October 28, 2021
  const [selectedDay, setSelectedDay] = useState(28)

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const calendarDays = [
    { day: 25, appointments: [{ time: "10:00", type: "appointment" }] },
    { day: 26, appointments: [{ time: "08:00", type: "checkup" }] },
    { day: 27, appointments: [{ time: "12:00", type: "consultation" }] },
    {
      day: 28,
      appointments: [
        { time: "10:00", type: "appointment" },
        { time: "14:00", type: "checkup" },
      ],
    },
    { day: 29, appointments: [{ time: "14:00", type: "consultation" }] },
    {
      day: 30,
      appointments: [
        { time: "12:00", type: "appointment" },
        { time: "09:00", type: "checkup" },
      ],
    },
    { day: 31, appointments: [] },
  ]

  const upcomingAppointments = [
    {
      day: "Thursday",
      date: "Oct 28",
      appointments: [
        {
          id: "1",
          time: "11:00 AM",
          title: "Health checkup complete",
          doctor: "Dr. Sarah Wilson",
          type: "checkup",
          icon: "🏥",
          location: "Room 205",
        },
        {
          id: "2",
          time: "2:00 PM",
          title: "Ophthalmologist",
          doctor: "Dr. Michael Chen",
          type: "consultation",
          icon: "👁️",
          location: "Eye Care Center",
        },
      ],
    },
    {
      day: "Saturday",
      date: "Oct 30",
      appointments: [
        {
          id: "3",
          time: "12:00 PM",
          title: "Cardiologist",
          doctor: "Dr. Emily Rodriguez",
          type: "appointment",
          icon: "❤️",
          location: "Cardiology Wing",
        },
        {
          id: "4",
          time: "4:00 PM",
          title: "Neurologist",
          doctor: "Dr. James Thompson",
          type: "consultation",
          icon: "🧠",
          location: "Neurology Department",
        },
      ],
    },
  ]

  const getTypeClass = (type) => {
    if (type === "appointment") return "type-appointment"
    if (type === "checkup") return "type-checkup"
    if (type === "consultation") return "type-consultation"
    return ""
  }

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + (direction === "next" ? 1 : -1))
    setCurrentDate(newDate)
  }

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <span className="badge">This Week</span>
        <h3 className="month-name">October 2021</h3>
        <div className="nav-buttons">
          <button onClick={() => navigateMonth("prev")}>{"<"}</button>
          <button onClick={() => navigateMonth("next")}>{">"}</button>
        </div>
      </div>

      <div className="calendar-card">
        <div className="weekdays">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="calendar-days">
          {calendarDays.map((day) => (
            <div
              key={day.day}
              className={`calendar-day ${selectedDay === day.day ? "selected" : ""}`}
              onClick={() => setSelectedDay(day.day)}
            >
              <div className="day-number">{day.day}</div>
              <div className="appointments">
                {day.appointments.slice(0, 2).map((a, i) => (
                  <div key={i} className={`appt-label ${getTypeClass(a.type)}`}>
                    {a.time}
                  </div>
                ))}
                {day.appointments.length > 2 && (
                  <div className="more">+{day.appointments.length - 2} more</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="upcoming-card">
        <h3 className="section-title">The Upcoming Schedule</h3>
        {upcomingAppointments.map((day, i) => (
          <div key={i} className="schedule-day">
            <div className="schedule-header">
              <h4>On {day.day}</h4>
              <span className="date-badge">{day.date}</span>
            </div>
            {day.appointments.map((appt) => (
              <div key={appt.id} className={`appt-card ${getTypeClass(appt.type)}`}>
                <div className="appt-icon">{appt.icon}</div>
                <div className="appt-info">
                  <div className="appt-header">
                    <h5>{appt.title}</h5>
                    <span className="appt-type">{appt.type}</span>
                  </div>
                  <div className="appt-details">
                    <div>🕒 {appt.time}</div>
                    <div>👨‍⚕️ {appt.doctor}</div>
                    <div>📍 {appt.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
