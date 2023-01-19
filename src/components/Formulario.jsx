import useClima from "../hooks/useClima";

const Formulario = () => {

    const {busqueda, datosBusqueda} = useClima()
    const {ciudad, pais} = busqueda
    return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input value={ciudad} onChange={datosBusqueda} type="text" name="ciudad" id="ciudad" />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
        <select value={pais} onChange={datosBusqueda} name="pais" id="pais">
            <option value="">-- Seleccione un País --</option>
            <option value="US">estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
            <option value="VE">Venezuela</option>
            <option value="CL">Chile</option>

        </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
