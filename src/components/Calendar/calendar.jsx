import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import getDay from "date-fns/getDay";
import { startOfWeek as dfStartOfWeek } from "date-fns";
import es from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendarForm.css";

const CustomToolbar = (toolbar) => (
  <div className="rbc-toolbar">
    <span className="rbc-btn-group">
      <button type="button" onClick={() => toolbar.onNavigate('PREV')}>Anterior</button>
      <button type="button" onClick={() => toolbar.onNavigate('TODAY')}>Hoy</button>
      <button type="button" onClick={() => toolbar.onNavigate('NEXT')}>Siguiente</button>
    </span>
  </div>
);

// Custom day header to show uppercase day names
const UppercaseDayHeader = ({ label }) => (
  <span>{label.toUpperCase()}</span>
);

const locales = { es };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date) => dfStartOfWeek(date, { weekStartsOn: 0 }), // 0 = Sunday
  getDay,
  locales,
});

const CalendarForm = () => {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitors: 1,
    date: null,
  };

  const [form, setForm] = useState(initialForm);
  const [selectedDate, setSelectedDate] = useState(null);
  const [visibleDate, setVisibleDate] = useState(new Date());

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateSelect = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setForm({ ...form, date: slotInfo.start });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Formulario enviado:\n${JSON.stringify(
        { ...form, date: selectedDate ? selectedDate.toLocaleDateString("es-ES") : null },
        null,
        2
      )}`
    );
  };

  const handleCancel = () => {
    setForm(initialForm);
    setSelectedDate(null);
  };

  // Update visibleDate when user navigates months
  const handleNavigate = (date) => {
    setVisibleDate(date);
  };

  return (
    <div className="container">
      <div className="calendar">
        <h3>
          {format(visibleDate, "MMMM yyyy", { locale: es }).toUpperCase()}
        </h3>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleDateSelect}
          events={[]}
          views={["month"]}
          date={visibleDate}
          onNavigate={handleNavigate}
          style={{ height: 350 }}
          messages={{
            today: "HOY",
            previous: "ANTERIOR",
            next: "SIGUIENTE",
            month: "MES",
            week: "SEMANA",
            day: "DÍA",
            date: "FECHA",
            time: "HORA",
            event: "EVENTO",
            noEventsInRange: "NO HAY EVENTOS EN ESTE RANGO.",
            showMore: (total) => `+ VER MÁS (${total})`,
          }}
          culture="es"
          components={{
            toolbar: CustomToolbar,
            month: {
              header: UppercaseDayHeader,
            },
          }}

          dayPropGetter={date => {
            if (
              selectedDate &&
              date.getDate() === selectedDate.getDate() &&
              date.getMonth() === selectedDate.getMonth() &&
              date.getFullYear() === selectedDate.getFullYear()
            ) {
              return { className: 'rbc-selected-cell' };
            }
            return {};
          }}
        />
        
        {selectedDate && (
          <div className="selected-date">
            Fecha seleccionada: <strong>{selectedDate.toLocaleDateString("es-ES")}</strong>
          </div>
        )}
        
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <button type="button" onClick={handleCancel} className="submit">Cancelar</button>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre*:
          <input name="firstName" required value={form.firstName} onChange={handleChange} />
        </label>

        <label>Apellido*:
          <input name="lastName" required value={form.lastName} onChange={handleChange} />
        </label>

        <label>Correo Electrónico*:
          <input name="email" type="email" required value={form.email} onChange={handleChange} />
        </label>

        <label>Fecha*:
          <input
            type="text"
            name="date"
            value={selectedDate ? selectedDate.toLocaleDateString("es-ES") : ""}
            readOnly
            required
            placeholder="Selecciona una fecha en el calendario"
          />
        </label>

        <label>Teléfono:
          <input name="phone" value={form.phone} onChange={handleChange} />
        </label>

        <label>Número de Visitantes:
          <input
            type="number"
            name="visitors"
            min="1"
            value={form.visitors}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CalendarForm;
