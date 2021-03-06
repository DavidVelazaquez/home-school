import React from "react";
import { Link } from "react-router-dom";
import "./CreateClass.css";

function CreateClass() {
  return (
    <div>
      <h2>Agregar clase</h2>
      <form>
        <div className="create-class">
          <input
            className="form-control"
            placeholder="Nombre de la clase (Obligatorio)"
            type="text"
          />
          <hr />
          <input className="form-control" placeholder="Seccion" type="text" />
          <hr />
          <input className="form-control" placeholder="Materia" type="text" />
          <Link to="/clases">
            <button type="button" className="btn btn-success btn-lg m-3 custom">
              Crear clase
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CreateClass;
