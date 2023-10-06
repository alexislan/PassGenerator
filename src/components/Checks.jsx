import { useId } from "react"
import "./Checks.css"

export const Checks = ({label, t, val, onC}) => {
const labelInput = useId();
    return (
        <div className={label == "Cantidad de Caracteres:" ? "Largo" : "Check"}>
          <label htmlFor={labelInput}>{label}</label>
          <input
            id={labelInput}
            type= {t}
            value={val}
            onChange={onC}
          />
      </div>
    )
}