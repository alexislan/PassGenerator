import "./Checks.css"

export const Checks = ({label, t, val, onC}) => {
    return (
        <div className={label == "Cantidad de Caracteres:" ? "Largo" : "Check"}>
          <label>{label}</label>
          <input
            type= {t}
            value={val}
            onChange={onC}
          />
      </div>
    )
}