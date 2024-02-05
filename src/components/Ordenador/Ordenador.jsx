import Form from "react-bootstrap/Form";
const Ordenador = ({ setOrdenar }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => setOrdenar(e.target.value)}
    >
      <option>Ordenar por:</option>
      <option value="titleAsc">Titulos A-B-C</option>
      <option value="titleDesc">Titulos Z-Y-X</option>
      <option value="dateAsc">Fecha Lanzamiento Anteriores</option>
      <option value="dateDesc">Fecha Lanzamiento Recientes</option>
      <option value="AverageAsc">Mayor puntuación</option>
      <option value="AverageDesc">Menor puntuación</option>
    </Form.Select>
  );
};

export default Ordenador;
