import { Link } from "react-router-dom";
import "../assets/style/btnStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StyleReference = () => {
  return (
    <>
      <Link to="/">
        <h2>de volta a home</h2>
      </Link>

      <div>
        <button class="btnBase">
          Clique aqui
          <FontAwesomeIcon icon={faPenToSquare} className="fontIcon" />
        </button>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div>
        <button class="btnEditar">
          Editar
          <FontAwesomeIcon icon={faPenToSquare} className="fontIcon" />
        </button>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div>
        <button class="btnExcluir">
          Excluir
          <FontAwesomeIcon icon={faTrash} className="fontIcon" />
        </button>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div>
        <button class="btnBase">
          <FontAwesomeIcon icon={faTrash} className="fontIcon" />
        </button>
      </div>
    </>
  );
};

export default StyleReference;
