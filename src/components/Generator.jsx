import { useState } from "react"
import { Checks } from "./Checks";
import "./Generator.css"

export const Generator = () =>{
    const [contra, setContra] = useState('');
    const [largo, setLargo] = useState(8);
    const [mayusculas, setMayusculas] = useState(false);
    const [minusculas, setMinusculas] = useState(false);
    const [numeros, setNumeros] = useState(false);
    const [especiales, setEspeciales] = useState(false);

    const generarContra = () => {
        const mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        const min = "abcdefghijklmnñopqrstuvwxyz"
        const nums = "0123456789";
        const espe = "!@#$%^&*()_+[]{}|;:,.<>?";

        let validacion = '';
        if(mayusculas){
            validacion += mayus
        }
        if(minusculas){
            validacion += min
        }
        if(numeros){
            validacion += nums
        }
        if(especiales){
            validacion += espe
        }

        if(!validacion){
            alert("Se debe seleccionar al menos un tipo de caracter")
            return;
        }
        if (largo < 8 || largo > 30){
            alert("la contraseña debe tener un largo mayor que 8 y menor que 30 para ser segura")
            return;
        }

        let contrasenia = '';
        for( let i=0; i < largo; i++){
            const index = Math.floor(Math.random() * validacion.length);
            contrasenia += validacion[index];
        }
        setContra(contrasenia);
    }

    const copiar = () => {
        const textarea = document.createElement("textarea");
        textarea.value = contra;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert('Contraseña copiada al portapapeles.');
    };

    return(
        <>
        <div className="content">

            <h2>Generador de Contraseñas</h2>
            <Checks
            label={"Cantidad de Caracteres:"}
            t={"number"}
            val={largo}
            onC={(e) => setLargo(e.target.value)}
            />
            <label>Incluir:</label>
            <Checks
            label={"Mayusculas:"}
            t={"checkbox"}
            val={mayusculas}
            onC={() => setMayusculas(!mayusculas)}
            />
            <Checks
            label={"Minusculas:"}
            t={"checkbox"}
            val={minusculas}
            onC={() => setMinusculas(!minusculas)}
            />
            <Checks
            label={"Numeros:"}
            t={"checkbox"}
            val={numeros}
            onC={() => setNumeros(!numeros)}
            />
            <Checks
            label={"Caracteres Especiales:"}
            t={"checkbox"}
            val={especiales}
            onC={() => setEspeciales(!especiales)}
            />
            <button className="crearContra" onClick={generarContra}>Crear Contraseña</button>
            <div className="contraFinal">
                <p>Contraseña Generada:</p>
                <input type="text" value={contra} readOnly/>
                {contra && (
                    <button onClick={copiar}>Copiar al portapapeles</button>
                )}
            </div>
        </div>
        </>
    )
}