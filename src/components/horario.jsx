import React from "react";

function Horario() {
  const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday

  let mensaje = (
    <>
      Abierto hasta<br />las 5pm
    </>
  );

  if (today === 1) {
    mensaje = "Cerrado hoy";
  } else if (today === 0) {
    mensaje = "Horario especial: 10am - 2pm";
  }

  return (
    <div className="horario">
      <p className="horario-texto">{mensaje}</p>
    </div>
  );
}

export default Horario;
