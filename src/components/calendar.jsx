import React, { useState } from "react";
import "./calendarForm.css";

const CalendarForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitors: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted:\n${JSON.stringify(form, null, 2)}`);
  };

  const generateCalendar = () => {
    const daysInMonth = 31;
    const startDay = new Date(2025, 0, 7).getDay(); // Jan 1, 2017 = Sunday = 0
    const calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDay) || day > daysInMonth) {
          week.push(<td key={`${i}-${j}`}></td>);
        } else {
          let className = "";
          if (day >= 3 && day <= 5) className = "gray";
          if (day >= 9 && day <= 11) className = "red";
          if (
            [20, 21, 22, 23, 24, 25, 31].includes(day)
          )
            className = "orange";

          week.push(
            <td key={`${i}-${j}`} className={className}>
              {day++}
            </td>
          );
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }
    return calendar;
  };

  return (
    <div className="container">
      <div className="calendar">
        <h3>Julio 2025</h3>
        <table>
          <thead>
            <tr>
              <th>Do</th><th>Lu</th><th>Ma</th><th>Mi</th><th>Ju</th><th>Vi</th><th>Sa</th>
            </tr>
          </thead>
          <tbody>{generateCalendar()}</tbody>
        </table>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre*:
          <input name="firstName" required onChange={handleChange} />
        </label>

        <label>Apellido*:
          <input name="lastName" required onChange={handleChange} />
        </label>

        <label>Correo Electrónico*:
          <input name="email" type="email" required onChange={handleChange} />
        </label>

        <label>Teléfono:
          <input name="phone" onChange={handleChange} />
        </label>

        <label>Número de Visitantes:
          <input type="number" name="visitors" min="1" value={form.visitors} onChange={handleChange} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CalendarForm;
