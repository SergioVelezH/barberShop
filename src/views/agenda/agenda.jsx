import React, { useState } from "react";
import "./agenda.css";

function Agenda() {
  const horarios = {
    Martin: {
      Lunes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Martes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Miércoles: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Jueves:["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Viernes:["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"]
    },
    Sergio: {
      Lunes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Martes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Miercoles: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Jueves: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Viernes:["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"]
    },
    Nicolás: {
      Lunes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Martes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Miércoles: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Jueves: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Viernes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
    },
    Joaquín: {
      Lunes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Martes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Miércoles: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Jueves: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Viernes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
    },
    Juan: {
      Lunes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Martes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Jueves: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
      Viernes: ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
    },
  };

  const numeroBarberia = "3513474734";

  const [peluqueroSeleccionado, setPeluqueroSeleccionado] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  const handlePeluqueroClick = (nombre) => {
    setPeluqueroSeleccionado(nombre);
    setDiaSeleccionado(null);
    setHorarioSeleccionado(null);
  };

  const handleDiaClick = (dia) => {
    setDiaSeleccionado(dia);
    setHorarioSeleccionado(null);
  };

  const handleHorarioClick = (horario) => {
    setHorarioSeleccionado(horario);
  };

  const enviarReserva = () => {
    if (peluqueroSeleccionado && diaSeleccionado && horarioSeleccionado) {
      const mensaje = `Hola! Acabo de hacer una reserva para ${peluqueroSeleccionado} el ${diaSeleccionado} a las ${horarioSeleccionado}. Dejo asentado el turno. Gracias!`;
      const url = `https://wa.me/${numeroBarberia}?text=${mensaje}`;
      window.location.href = url;

      // Resetear la selección después de enviar la reserva
      setPeluqueroSeleccionado(null);
      setDiaSeleccionado(null);
      setHorarioSeleccionado(null);
    }
  };

  const diasDisponibles = peluqueroSeleccionado
    ? Object.keys(horarios[peluqueroSeleccionado])
    : [];

  return (
    <div className="container-agenda">
      <span>AGENDA</span>
      <div className="div-peluqeros">
        <span>PELUQUEROS</span>
        <div>
          {Object.keys(horarios).map((nombre) => (
            <button key={nombre} onClick={() => handlePeluqueroClick(nombre)}>
              {nombre}
            </button>
          ))}
        </div>
      </div>
      {peluqueroSeleccionado && (
        <div className="div-dias">
          <span>Días disponibles para {peluqueroSeleccionado}</span>
          <div>
            {diasDisponibles.map((dia) => (
              <button key={dia} onClick={() => handleDiaClick(dia)}>
                {dia}
              </button>
            ))}
          </div>
        </div>
      )}
      {diaSeleccionado && (
        <div className="div-horarios">
          <span>
            Horarios disponibles para {peluqueroSeleccionado} el{" "}
            {diaSeleccionado}
          </span>
          <ul>
            {horarios[peluqueroSeleccionado][diaSeleccionado].map(
              (horario, index) => (
                <button key={index} onClick={() => handleHorarioClick(horario)}>
                  {horario}
                </button>
              )
            )}
          </ul>
        </div>
      )}
      {horarioSeleccionado && (
        <div className="div-reserva">
          <span>
            Has seleccionado: {peluqueroSeleccionado} el {diaSeleccionado} a las{" "}
            {horarioSeleccionado}
          </span>
          <button onClick={enviarReserva}>Confirmar Reserva</button>
        </div>
      )}
    </div>
  );
}

export default Agenda;
